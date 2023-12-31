const express = require('express')
const router = express.Router()
const supabase = require('../supabase')

router.post('/add_word', async (req, res) => {
    
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

        const {data:existWord, error:existError} = await supabase
        .from('words')  
        .select()
        .eq('word',word) 
         
        if(existError){
            return res.status(500).json('Supabase error')
        }
        if(existWord && existWord.length>0){
            return res.status(400).json('word already exist')
        }

        const {data, error} = await supabase
        .from('words')
        .insert([{word, 
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
            articleExample}])

        if(error){
            return res.status(500).json("supabase error")
        }
        return res.status(200).json("Word added successfully");
    }
    catch(error){
        return res.status(500).json("server error")
    }
    
});

module.exports = router;
