const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT

const connectDb = require('./config/db')

const startServer = async()=>{
    try{
       await connectDb(process.env.LINK)

        app.listen(port,()=>{
        console.log(`Server is running at Port:${port}`)
})
    }
    catch(err){
     console.log("Startup Error:",err.message)
    }
}

startServer()



