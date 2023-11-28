const express = require('express')
const router = express.Router()
const supabase = require('../supabase')

router.put('/update_word/:wordId', async(req, res) =>{
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
        
        const{data:existWord,error:existError} = await supabase
        .from('words')
        .select()
        .eq('id',wordId)

        if(existError){
            return res.status(500).json('supabase error')
        }
        if(existWord.length===0){
            return res.status(404).json('word not found')
        }

        const{data,error:updateError} = await supabase
        .from('words')
        .update({word, 
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
            articleExample})
        .eq('id',wordId)
        .select()

        if(updateError){
            return res.status(500).json('supabase error')
        }
        return res.status(200).json('update succesfull')
    }
    catch(error){
        return res.status(500).json("server error")
    }
})
    
module.exports = router;