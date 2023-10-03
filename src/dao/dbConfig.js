import mongoose from "mongoose"

const URI="mongodb+srv://mauricioaguirrert:4tqvy44yvE9FHEeK@cluster0.odynofm.mongodb.net/?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Conectado a Mongo-Database")