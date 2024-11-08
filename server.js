const express=require('express')
const app =express()
app.use(express.json())
const dotenv=require('dotenv')
dotenv.config();
const db=require('./models/index')
const routes=require('./routes/index')

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
    
})
db.sequelize.sync().then(()=>{
    console.log("Database connected");
    
}).catch((err)=>{
    console.log(err);
    
})
app.use('/',routes)


