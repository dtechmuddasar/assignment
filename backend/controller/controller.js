const axios = require('axios');
const list=async (req,res) =>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos');
    res.send({data:response.data});
} 

const create=async (req,res) =>{
    const data=req.body;
    const response=await axios.post('https://jsonplaceholder.typicode.com/todos',{...data});
    res.send({status:200,success:true,message:response.statusText});
    
} 
module.exports={
    list,
    create
}