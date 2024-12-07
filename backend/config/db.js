const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbpassword = process.env.DB_PASS

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbpassword}@cluster0.vfy03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );

        console.log("conectou ao banco")

        return dbConn
    } catch (error) {
        console.log(error)
    }
}
 
conn()

module.exports = conn;