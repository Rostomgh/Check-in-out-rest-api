const express=require('express');
const app=express();
port=3000;
const mongoose=require('mongoose');
const dotenv=require('dotenv');
app.use(express.json());

dotenv.config();
const participantRoute=require('./Router/participantRoute');
app.use('/participant',participantRoute);

mongoose.connect('mongodb+srv://mohamed:rosmouh@cluster0.fdzeqkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
  console.log("database connected");  
})
.catch((err)=>{
  console.log(err);
});
app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})




