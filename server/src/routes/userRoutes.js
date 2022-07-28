const router = require('express').Router()
const User = require('../models/User.js')
const bcrypt = require('bcrypt')

//Criar Usuário 
router.post('/', async (req, res) => {
    const salt = await bcrypt.genSalt(12)
    const { name, email  } = req.body
    const updated = ''
    var { password, created, birth } = req.body
    
    if (!name || !email || !password || !birth) {
        return(res.status(422).json({ error: 'Nome, E-mail, Senha e Data de Nascimento são campos obrigatórios' }))
    } 
    password = await bcrypt.hash(password, salt)
    created = new Date('yyyy-mm-dd').toLocaleString('pt-BR');
    // birth = new Date(birth).toLocaleDateString('pt-BR')
    var d = new Date()
    if (d.getMonth() + 1 < 10) {
        created = `${d.getFullYear()}-0${d.getMonth()+1}-`
    } else {
        created = `${d.getFullYear()}-${d.getMonth()+1}-`
    }
    if (d.getDate() < 10) {
        created = created + '0' + d.getDate()
    } else {
        created = created + d.getDate()
    }
    const user = {
        name, email, password, birth, created, updated
    }
    try {
        await User.create(user)
        res.status(201).json({message: 'Usuário cadastrado com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//Buscar todos usuários
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Buscar usuario por email
router.get('/:email', async (req, res) => {
    const email = req.params.email
    try {
        const user = await User.findOne({email : email})
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Atualizar Usuario 
router.patch('/:id', async (req, res) => {
    const urlId = req.params.id
    const { name, email, password, birth } = req.body    
    var {created} = req.body
    const updated = new Date().toLocaleString('pt-BR');
    const user = {
        name, email, password, birth, created, updated
    }
    
    try {
        const updatedUser = await User.updateOne({ id: urlId }, user)
        if (updatedUser.matchedCount === 0) {
            return(res.status(422).json({ message: 'Diferenças não encontradas' }))   
        }
        res.status(200).json(user)
        
    }catch (error) {
        res.status(500).json({error: error})
    }
})

//Apagar Usuario
router.delete('/:id', async (req, res) => {
    const urlId = req.params.id
    const user = await User.findOne({ id: urlId })
    if (!user) {
        return(res.status(422).json({ message: 'Usuário não encontrado' }))
    }
    try {
        await User.deleteOne({ _id: urlId })
        res.status(200).json({ message: 'Usuário excluído' })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router