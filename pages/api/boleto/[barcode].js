import { Boleto } from "broleto";

export default function Barcode(req, res) {

    const barcode = req.query.barcode;
    const boleto = new Boleto(barcode);

    res.status(200).json(boleto.toJSON());
}