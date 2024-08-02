import express from 'express';

const servidor = express()

servidor.use(express);


servidor.get('/calc/soma/:n1:n2', (req, resp)  => {
    let n1 = Number(req.params.n1)
    let n2 = NUmber(req.params.n2)

    resp.send('a soma é ' + n2+n1)
})


servidor.listen(5500, () => console.log('api subiu'))