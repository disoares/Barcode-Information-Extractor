export default function CheckDrugs(req, res) {

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Houve um erro de método.' });
        return;
    }

    const drugs = req.body.drugs;
    if (drugs) {
        if (drugs.length > 1) {

            const base_url = `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${drugs.replaceAll(';', '+')}`;
            res.status(200).send(base_url);

            /*fetch(base_url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                res.status(200).json(response.fullInteractionTypeGroup);
            });*/

        } else {
            res.status(405).json({ error: 'Passe dois ou mais medicamentos para a checagem.' });
        }
    } else {
        res.status(405).json({ error: 'Passe dois ou mais medicamentos para a checagem.' });
    }    

}