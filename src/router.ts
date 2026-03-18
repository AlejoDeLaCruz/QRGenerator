import express from 'express';
import QRCode from 'qrcode';

const routes = express.Router()

routes.get('/getQr', async (req, res) => {
    try {
        const { url } = req.query;
        const urlString = typeof url === 'string' ? url : '';
        const qrCode = await QRCode.toDataURL(urlString);
        res.send(`<img src="${qrCode}" alt="QR Code"/>`);
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).send('Internal Server Error');
    }
})

export default routes;