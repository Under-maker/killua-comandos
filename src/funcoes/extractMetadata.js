import webpmux from 'node-webpmux'

const { Image } = webpmux

function parseExif(exifBuffer) {
  if (!exifBuffer) return {}

  const exifText = exifBuffer.toString('utf8')
  const start = exifText.indexOf('{')
  const end = exifText.lastIndexOf('}')

  if (start === -1 || end === -1 || end < start) return {}

  try {
    return JSON.parse(exifText.slice(start, end + 1))
  } catch {
    return {}
  }
}

async function extractMetadata(image) {
  const img = new Image()
  await img.load(image)

  return parseExif(img.exif)
}

export { extractMetadata }
export default extractMetadata
