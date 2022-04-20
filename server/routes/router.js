import express from "express";


const router = express.Router()


router.post('/signup', (req,res)=>{
    console.log('Hello Guys');
    res.send('This is done')
})


export default router;