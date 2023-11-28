const express = require('express')
const router = express.Router()
const supabase = require('../supabase')

router.get('/get_word/:id', async(req, res) =>{
    const wordId = req.params.id;

    try{
        const {data,error} = await supabase
        .from('words')
        .select()
        .eq('id',wordId) 
        
        if(data.length===0){
            return res.status(404).json('not found')
        }
        if(error){
            return res.status(500).json('supabase error');
        }
        return res.status(200).json(data)
    }
    catch(error){
        return res.status(500).json('server error');
    }
})

module.exports = router;