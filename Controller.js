const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
const upload = multer();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('assets'));
let users = models.users;
let cars = models.cars;

app.post('/login', async (req, res) => {
    let response = await users.findOne({
        where: { email: req.body.email, password: req.body.password }
    });
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});

//upload de imagem
app.post('/imagem', upload.single('cars'), async (req, res) => {
    try {
        const { buffer } = req.file;
        console.log('Received buffer:', buffer);
        const car = await cars.update({ image1: buffer }, { where: { id: 5 } });
        res.json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar imagem' });
    }
});


app.post('/verifyPass', async (req, res) => {
    let response = await users.findOne({
        where: { id: req.body.id, password: req.body.senhaAntiga }
    });
    if (response === null) {
        res.send(JSON.stringify('Senha antiga incorreta.'));
    } else {
        if (req.body.novaSenha === req.body.confNovaSenha) {
            response.password = req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha alterada com sucesso.'));
        } else {
            res.send(JSON.stringify('As senhas não conferem.'));
        }
    }
});

app.post('/getItens', async (req, res) => {
    let response = await cars.findAll();
    res.send(JSON.stringify(response));
});

app.get('/imagem/:id', async (req, res) => {
    try {
        const car = await cars.findOne({ where: { id: 5 /*req.params.id*/ } });
        if (car && car.image1) {
            const base64 = Buffer.from(car.image1).toString('base64');
            const uri = `data:image/png;base64,${base64}`;
            res.json({ uri });
        } else {
            res.status(404).json({ error: 'Imagem não encontrada' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao recuperar imagem' });
    }
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('servidor rodando')
});

module.exports = app;
