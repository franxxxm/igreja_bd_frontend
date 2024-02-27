const axios = require('axios')
const routes = require('express').Router()


routes.get('/home', (req, res)=>{
    axios.get('http://localhost:8000/api/igreja').then(dados=>{
        const {data} = dados    
        return res.render('./admin/index.hbs', {data})
    }) 
})



module.exports = routes