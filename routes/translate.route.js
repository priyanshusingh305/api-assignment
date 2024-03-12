const express=require("express")
const router=express.Router();

const translateController=require("../controller/translate.controller")


router.post("/engtofr",translateController.translateToFrench);




module.exports=router;