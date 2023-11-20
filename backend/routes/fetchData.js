const express = require('express')
const router = express.Router()
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPERBASE_URL, process.env.SUPABASE_KEY);

router.get('/', async(req, res) => {
    try{
        const {data, error} = await supabase
        .from('words')
        .select();

        if(error){
            return res.status(500).json("supabase error")
        }
        return res.status(200).json(JSON.stringify(data))
    }
    catch(error){
        return res.status(500).json("server error")
    }
});

module.exports = router;
