import mongoose from "mongoose";

export const Connection = async(username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.l5jzwbh.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database is connected Sucessfully');
    }catch(error){
        console.log('Error while Connecting with database', error);
    }
}
export default Connection;