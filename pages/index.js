export default function Home() {
  const a = fetch('http://api2.valoz.app.br/get-payment-status/1684497997433').then(response => response.json()).then(json => console.log(json))
    .catch((err) => {
      console.log(err);
    });

  return (
    <p>Teste</p>
  )
}