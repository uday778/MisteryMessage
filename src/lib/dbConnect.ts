import mongoose from "mongoose";


type ConnectionObject= {
    isConnected?:number
}


const connection:ConnectionObject = {}


async function dbConnect():Promise<void>{
    //next js is edge time framework
    //to avoid dtabase choking
    //check database connection present 
    //if present use it 
    //else not present create new database connection

    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }

    try {
       const db = await mongoose.connect(process.env.MONGODBURI || '',{})

        connection.isConnected = db.connections[0].readyState

        console.log("Db connected Sucessfully");
        




    } catch (error) {
        

        console.log("database connection is failed",error);
        process.exit(1)
    }
}

export default dbConnect;




