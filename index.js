const express=require("express")
const app=express()


app.use(express.json());


app.get("/",(req,res)=>{
    
    return res.status(200).send({message :"Welcome to english to french translation api, /translate/engtofr to translate it to french from english",status:true})
})

const translateRouters=require("./routes/translate.route")
app.use("/translate",translateRouters);

const PORT=process.env.PORT || 5454;
app.listen(PORT , async()=>{
    console.log("ecommerce api listening on PORT: ",PORT);
})

module.exports=app;
