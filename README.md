# API para reconhecimento e extração de informação do código de barras

## Como usar?

https://barcode-information-extractor.vercel.app/api/boleto/{BARCODE}

Exemplo: https://barcode-information-extractor.vercel.app/api/boleto/34191091070000013555851122200002157810000115300

### Retorno

O retorno pode ser com o nome do banco, em casos de boletos gerados por bancos. Ou, em caso de contas como: água, luz, etc, o retorno será 
sem o nome do banco.

Obs.: Em caso de contas de luz, água e outras desse tipo, o retorno de data de vencimento também fica em branco, pois esses não tem data 
de vencimento e o cálculo de juros fica para a conta do mês seguinte.

#### Com nome de banco

![](https://barcode-information-extractor.vercel.app/retorno1.png)

#### Sem nome de banco

![](https://barcode-information-extractor.vercel.app/retorno2.png)

Obs.: O retorno dessas contas vem com o type "ARRECADACAO".