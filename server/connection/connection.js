import mongoose from 'mongoose';


const Connection =  async(DB_URL) =>{
    const URL = `${DB_URL}`
    try{
        await mongoose.connect(URL, { useNewUrlParser: true })
            console.log('connect');
    } catch(error) {
        console.log('Error: from database ', error);
    }
}

export default Connection;