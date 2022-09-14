export default async function CheckAddress(req, res){

    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Houve um erro de método!' });
        return;
    }
    else{
        const params = req.query;
        const address = params.address;
    
        if(address){
            const response = await fetch(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x0f4c0d01f4057dca10c17120076bb45a15d4e7cb&address=${address}&tag=latest&apikey=HPQ2DPIU41MK8UK2F1AZP9KUSGPC14UP6F`);
            const data =  await response.json();
            res.status(200).json(data);
            return;
        }
        else{
            res.status(405).json({ error: 'Passe o parametro address para consulta.' });
            return;
        }
    }
}