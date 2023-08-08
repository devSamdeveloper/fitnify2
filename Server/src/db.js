import mongoose from "mongoose";

mongoose.connection.on('open', ()=> console.log('db connected'))

export async function connectDb ({host , port, dbName}){
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect (uri, {useNewUrlParser : true})
}