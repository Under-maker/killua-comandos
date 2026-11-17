import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { readFileSync as __readJSONFileSync } from 'fs';
import { generateWAMessageFromContent, prepareWAMessageMedia, proto } from '@whiskeysockets/baileys';
let mentions;

const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8'));

function buildButtonContextInfo({ mentions = [], contextInfo = {} } = {}) {
const merged = { ...(contextInfo || {}) }

if (Array.isArray(mentions) && mentions.length) {
merged.mentionedJid = [...new Set([...(merged.mentionedJid || []), ...mentions])]
}

return Object.keys(merged).length ? merged : undefined
}

function generateInnovatorsInteractiveMessage(payload = {}) {
const interactiveMessage = {
body: {
text: String(payload.text || payload.body || payload.caption || '')
},
footer: payload.footer ? { text: String(payload.footer) } : undefined,
header: {
title: payload.title ? String(payload.title) : undefined,
subtitle: payload.subtitle ? String(payload.subtitle) : undefined,
hasMediaAttachment: !!payload.hasMediaAttachment
},
contextInfo: buildButtonContextInfo({
mentions: payload.mentions,
contextInfo: payload.contextInfo
}) || {},
nativeFlowMessage: {
buttons: Array.isArray(payload.interactiveButtons) ? payload.interactiveButtons : [],
messageParamsJson: '{}',
messageVersion: 1
}
}

return {
interactiveMessage: proto.Message.InteractiveMessage.fromObject(interactiveMessage)
}
}

function unwrapInteractiveContent(content = {}) {
return content?.viewOnceMessage?.message?.interactiveMessage
? { interactiveMessage: content.viewOnceMessage.message.interactiveMessage }
: content
}

function getButtonTransportNode(content = {}) {
const message = unwrapInteractiveContent(content)
const nativeFlow = message?.interactiveMessage?.nativeFlowMessage
const carouselButtons = message?.interactiveMessage?.carouselMessage?.cards?.some(card => Array.isArray(card?.nativeFlowMessage?.buttons) && card.nativeFlowMessage.buttons.length)
const firstButtonName = nativeFlow?.buttons?.[0]?.name

const nativeFlowSpecials = [
'mpm',
'cta_catalog',
'send_location',
'call_permission_request',
'wa_payment_transaction_details',
'automated_greeting_message_view_catalog'
]

if (nativeFlow && (firstButtonName === 'review_and_pay' || firstButtonName === 'payment_info')) {
return {
tag: 'biz',
attrs: {
native_flow_name: firstButtonName === 'review_and_pay' ? 'order_details' : firstButtonName
}
}
}

if (nativeFlow && nativeFlowSpecials.includes(firstButtonName)) {
return {
tag: 'biz',
attrs: {},
content: [{
tag: 'interactive',
attrs: { type: 'native_flow', v: '1' },
content: [{
tag: 'native_flow',
attrs: { v: '2', name: firstButtonName }
}]
}]
}
}

if (nativeFlow || carouselButtons || message?.buttonsMessage) {
return {
tag: 'biz',
attrs: {},
content: [{
tag: 'interactive',
attrs: { type: 'native_flow', v: '1' },
content: [{
tag: 'native_flow',
attrs: { v: '9', name: 'mixed' }
}]
}]
}
}

if (message?.listMessage) {
return {
tag: 'biz',
attrs: {},
content: [{
tag: 'list',
attrs: { v: '2', type: 'product_list' }
}]
}
}

return null
}

async function relayButtonMessage(sock, jid, content, options = {}) {
const isCarouselMessage = !!content?.interactiveMessage?.carouselMessage

const msg = isCarouselMessage
? generateWAMessageFromContent(jid, content, {})
: generateWAMessageFromContent(jid, content, {
quoted: options.quoted,
userJid: sock?.user?.id,
timestamp: options.timestamp || new Date()
})

const buttonsNode = getButtonTransportNode(content)
const additionalNodes = []

if (buttonsNode) additionalNodes.push(buttonsNode)

await sock.relayMessage(jid, msg.message, {
messageId: msg.key.id,
additionalNodes: additionalNodes.length ? additionalNodes : undefined
})

return msg
}

async function sendLikeInnovators(sock, jid, payload = {}, options = {}) {
if (payload?.interactiveButtons?.length) {
const content = generateInnovatorsInteractiveMessage(payload)
return relayButtonMessage(sock, jid, content, options)
}

return sock.sendMessage(jid, payload, {
quoted: options.quoted
})
}

async function sendInteractiveImageButtons(sock, jid, {
image,
body = '',
footer = '',
buttons = [],
contextInfo = {}
} = {}, options = {}) {
const media = await prepareWAMessageMedia(
{ image },
options.mediaOptions || { upload: sock.waUploadToServer }
)

return relayButtonMessage(sock, jid, {
interactiveMessage: {
header: {
hasMediaAttachment: true,
imageMessage: media.imageMessage
},
headerType: 'IMAGE',
body: {
text: String(body || '')
},
footer: {
text: String(footer || '')
},
contextInfo,
nativeFlowMessage: {
buttons: Array.isArray(buttons) ? buttons : [],
messageParamsJson: '{}',
messageVersion: 1
}
}
}, options)
}

export { relayButtonMessage, sendLikeInnovators, sendInteractiveImageButtons, generateInnovatorsInteractiveMessage };
