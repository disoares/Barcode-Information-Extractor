const boleto = require('@mrmgomes/boleto-utils');

export default function SearchDrug(req, res) {
    const barcode = req.query.barcode;
    const line = boleto.codBarras2LinhaDigitavel(barcode)

    const data = {
        barcode: barcode,
        digitableLine: line
    };

    res.status(200).json(data);
}