import axios from 'axios';
import { readRentalConfig } from './sqlite.js';


function getAccessToken() {
try {
const cfg = readRentalConfig({})
return String(cfg?.mercadoPagoAccessToken || cfg?.tokenMP || cfg?.token || '').trim()
} catch {
return ''
}
}

async function criarPagamentoPix(valorCompra, descricao, idempotencyKey) {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error('Token do Mercado Pago não configurado');
    const payment_data = {
        transaction_amount: valorCompra,
        description: descricao || 'Pagamento via PIX',
        payment_method_id: "pix",
        payer: {
            email: "cliente@email.com",
            first_name: "Cliente",
            last_name: "Teste",
            identification: {
                type: "CPF",
                number: "12345678909"
            }
        }
    };


    try {
        const response = await axios.post(
            'https://api.mercadopago.com/v1/payments',
            payment_data,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'X-Idempotency-Key': idempotencyKey
                }
            }
        );

        const pagamento = response.data;

        return {
            id: pagamento.id,
            qr_code: pagamento.point_of_interaction.transaction_data.qr_code,
            qr_code_base64: pagamento.point_of_interaction.transaction_data.qr_code_base64
        };
    } catch (error) {
        console.error('Erro ao criar o pagamento:', error.response ? error.response.data : error.message);
        throw new Error('Erro ao criar o pagamento');
    }
}

async function verificarPix(id) {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error('Token do Mercado Pago não configurado');
    try {
        const response = await axios.get(
            `https://api.mercadopago.com/v1/payments/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        const pagamento = response.data;

        return {
            status: pagamento.status,
            status_detail: pagamento.status_detail
        };
    } catch (error) {
        console.error('Erro ao verificar o status do pagamento:', error.response ? error.response.data : error.message);
        throw new Error('Erro ao verificar o status do pagamento');
    }
}


export { criarPagamentoPix, verificarPix };
