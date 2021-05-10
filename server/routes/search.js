import express from 'express';


const router = express.Router();


router.get('/', (req, res, next) => {
    let query = req.query;
    console.log(query);
    res.status(200).send({status: "ok"})
});


export default router;