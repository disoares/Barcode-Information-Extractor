import { Boleto } from "broleto";

export default function BarcodeWithTax(req, res) {

    const barcode = req.query.barcode;
    const tax = Number(req.query.tax) / 100;

    const boleto = new Boleto(barcode);

    if(boleto.expired){

        const newAmount = boleto.interest(tax);

        const data = {
            barcode: barcode,
            codeType: boleto.codeType(),
            type: boleto.type().type,
            expirationDate: boleto.expirationDate(),
            expired: boleto.expired(),
            expiredDays: boleto.expiredDays(),
            banks: boleto.banks(),
            amount: boleto.amount(),
            prettyAmount: boleto.prettyAmount(),
            valid: boleto.valid(),
            newAmount: newAmount
        }

        res.status(200).json(data);
    }else{
        res.status(200).json(boleto.toJSON());
    }
}