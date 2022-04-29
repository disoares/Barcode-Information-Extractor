export default function SearchDrug(req, res) {

    const drug = req.query.drug;

    fetch(`https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=${drug}`)
        .then((response) => {
            return response.json()
        })
        .then((response) => {

            const a = response.drugGroup.conceptGroup;
            if (a) {
                const b = a.find(element => element.tty === 'SBD');
                res.status(200).json(b.conceptProperties[0]);
            } else {
                const error = { error: 'Medicamento não encontrado.' }
                res.status(405).json(error);
            }
        })
        .catch((err) => {
            res.status(405).send({ error: err });
        });
}