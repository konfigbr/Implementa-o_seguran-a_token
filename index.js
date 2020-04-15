const express = require('express');
const router = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
const port = 3000;
app.listen(port, () => console.log(`Servidor esta rodando na porta ${port}`) )

