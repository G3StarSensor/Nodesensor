const { Router } = require("express");
const router=Router();
const funct = require('./function/loadInfo');

router.get('/batalla1',(req, res) => {
	res.send(funct.algo());
});

module.exports=router;