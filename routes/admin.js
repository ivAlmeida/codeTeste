//Carregando os módulos
const express = require('express');
//const mongoose = require('mongoose');
//require('../models/cadastroMotorista');
//const MotoristasDisponiveis = mongoose.model('motoristasdisponiveis');
const router = express.Router();


router.get('/admin', (req,res)=>{
    res.render('admin/index')
})

router.get('/disponiveis', (req,res)=>{
    res.render('admin/disponiveis')
})

router.get('/cadastro-motorista', (req,res)=>{
    res.render('admin/cadastro-motorista')
})


router.get('/programados', (req,res)=>{
    res.render('admin/programados')
})




//Exportando o módulo de rotas
module.exports = router