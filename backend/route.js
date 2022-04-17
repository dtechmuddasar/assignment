let route=require('express').Router();
const {list,create} =require('./controller/controller');
route.get("/list",(req,res)=>{
    list(req,res);
});

route.post("/create",(req,res)=>{
    create(req,res);
});

module.exports=route;