//logic
const User = require("../models/userModel")

exports.home = (req, res) => {
    res.send("Hello from chhakuli")
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        //To check all the details
        if (!name || !email) {
            throw new Error("Name and email is required")
        }
        //to chech unique email
        const userExist = await User.findOne({ email })
        if (userExist) {
            throw new Error("Email already exist")
        }
        //inserting into the database
        const user = await User.create({ name, email });
        res.status(201).json({
            sussess: true,
            message: "User created successfully",
            user,
        })

    } catch (error) {
        console.log(error);
    }
}