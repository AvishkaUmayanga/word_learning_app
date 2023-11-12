const express = require('express')
const router = express.Router()
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPERBASE_URL, process.env.SUPABASE_KEY);

router.post('/add_word', async (req, res) => {
    
    try{
        const {word,nounSingular,nounPlural,nounMeaning,verbSingular,verbPlural,verbMeaning,sp,pc,pp,ppc,spa,pac,pap,papc,sf,fc,fp,fpc} = req.body;

        const {data, error} = await supabase
        .from('words')
        .insert([{word,nounSingular,nounPlural,nounMeaning,verbSingular,verbPlural,verbMeaning,sp,pc,pp,ppc,spa,pac,pap,papc,sf,fc,fp,fpc}])

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
