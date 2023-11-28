const express = require('express')
const router = express.Router()
const supabase = require('../supabase')

router.get('/', async(req, res) => {
    try{
        const {data, error} = await supabase
        .from('words')
        .select();

        if(error){
            return res.status(500).json("supabase error")
        }
        
        const modeifyData = data.map(wordDetails =>({
          id: wordDetails.id,
          word: wordDetails.word,
          meaning: wordDetails.wordMeaning,
          noun:{
            nounSingular: wordDetails.nounSingular,
            nounPlural: wordDetails.nounPlural,
            nounExample: wordDetails.nounExample,
          },
          proNoun:{
            proNounExample: wordDetails.proNounExample,
          },
          adjective:{
            adjectiveExample: wordDetails.adjectiveExample,
          },
          adverb:{
            adverbExample: wordDetails.adverbExample,
          },
          verb:{
            pastTense: wordDetails.pastTense,
            pastParticiple: wordDetails.pastParticiple,
            presentParticiple: wordDetails.presentParticiple,
            futureTense: wordDetails.futureTense,
            verbSingular: wordDetails.verbSingular,
            verbPlural: wordDetails.verbPlural,
            verbExample: wordDetails.verbExample,
          },
          prePosition:{
            prePositionExample: wordDetails.prePositionExample,
          },
          conjunction:{
            conjunctionExample: wordDetails.conjunctionExample,
          },
          interjection:{
            interjectionExample: wordDetails.interjectionExample,
          },
          articles: {
            articleExample: wordDetails.articleExample,
          }
        }))
        return res.status(200).json({words:modeifyData})
    }
    catch(error){
        return res.status(500).json("server error")
    }
});

module.exports = router;
