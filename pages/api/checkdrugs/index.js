export default function CheckDrugs(req, res) {

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Houve um erro de método.' });
        return;
    }

    const drugs = req.body.drugs;
    if (drugs) {
        if (drugs.split(';').length > 2) {


            const base_url = `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${drugs.split(';').join('+')}`;

            fetch(base_url)
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    res.status(200).json(response.fullInteractionTypeGroup);
                });

        } else {
            res.status(405).json({ error: 'Passe dois ou mais medicamentos para a checagem.' });
        }
    } else {
        res.status(405).json({ error: 'Passe dois ou mais medicamentos para a checagem.' });
    }

}