import formatPixKey from "./../../../src/utils/ValidatePixKey";

export default function ValidatePixKey(req, res) {

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Houve um erro de método.' });
        return;
    }

    const pixkey = req.body.pixkey;
    if (pixkey) {
        const formattedPixKey = formatPixKey(pixkey);        
        res.status(200).json({ status: formattedPixKey[0], msg: formattedPixKey[1] });
    } else {
        res.status(400).json({ error: 'Chave Pix é obrigatória' });
    }

}