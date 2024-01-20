const express=require('express');

const app=express();
const PORT=3000;
app.get('/ping', (request, response)=> {
    console.log("ping received");
    response.json({message:'PING received'})
});
//2 arguments, 1->route as a string 2->callback
app.listen(3000, () =>{
    console.log('server started at port 3000');

});//the listen method takes 2 paramneters->1port number 2 callback 