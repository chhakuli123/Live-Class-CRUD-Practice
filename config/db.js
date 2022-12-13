const mongoose = require("mongoose")



const connectToDb = () => {
    mongoose.connct(process.env.MONGO_URL)
        .then((conn) => {
            console.log(`Connected DB:${conn.connection.host}`);

        })
        .catch(() => {
            console.log(err.message);
            process.exit(1);
        })
}
module.exports = connectToDb;