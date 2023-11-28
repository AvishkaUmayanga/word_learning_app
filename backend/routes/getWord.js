const express = require('express')
const router = express.Router()
const supabase = require('../supabase')

router.get('/get_word/:wordId', async(req, res) =>{
    const wordId = req.params.wordId;

    try{
        const {word, 
            wordMeaning, 
            nounSingular, 
            nounPlural, 
            nounExample,
            proNounExample,
            adjectiveExample,
            adverbExample,
            verbSingular,
            verbPlural,
            pastParticiple,
            pastTense,
            presentParticiple,
            futureTense,
            verbExample,
            prePositionExample,
            conjunctionExample,
            interjectionExample,
            articleExample} = req.body;
        
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