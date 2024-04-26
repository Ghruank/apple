const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const { Collection } = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// app.get("/login", cors(),(req,res)=>{

// })

app.post("/login", async(req,res)=>{
    const{email, password}= req.body
    try{
        const check=await collection.findOne({email: email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")

    }
})
// app.get("/register", cors(),(req,res)=>{

// })

app.post("/register", async(req,res)=>{
    // console.log(req.body)
    
    const{email, password}= req.body
    const data={
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email: email})
        if(check){
            res.json("exist")
        }
        else{
            let user = new collection(data)
            await user.save()
            res.status(200).json("notexist")
        }
    }
    catch(e){
        res.status(500).json("notexist")
    }
})


app.listen(3001,()=>{
    console.log("port connected");
})