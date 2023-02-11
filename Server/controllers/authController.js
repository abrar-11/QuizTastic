import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, password, email, fullName } = req.body;

        // promise for check username
        const isUsernameExists = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, (err, user) => {
                if (err) reject(err);
                if (user) reject("Username already Exists");
                resolve();
            });
        });

        // promise for check email address
        const isEmailExists = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, (err, email) => {
                if (err) reject(err);
                if (email) reject("Email already Exists");
                resolve();
            });
        });

        Promise.all([isUsernameExists, isEmailExists])
            .then(() => {
                if (password) {
                    bcrypt.hash(password, 10, function (err, hash) {
                        if (err) {
                            return res.status(500).send({
                                success: false,
                                error: "Unable to hashed password this time..",
                            });
                        } else {
                            const user = new UserModel({
                                email,
                                username,
                                password: hash,
                                fullName,
                            });

                            user.save()
                                .then((result) => {
                                    res.status(200).send({
                                        success: true,
                                        data: result,
                                    });
                                })
                                .catch((err) => {
                                    return res.status(500).send({
                                        success: false,
                                        error: err,
                                    });
                                });
                        }
                        // Store hash in your password DB.
                    });
                }
            })
            .catch((err) => {
                // 👇️ .catch block ran:  An error occurred
                res.status(500).send({ success: false, err });
            });
    } catch (error) {
        res.status(500).send({ success: false, error });
    }
};
const login = async (req, res) => {
    res.json("login");
};
const registerMail = async (req, res) => {
    res.json("register");
};
const authenticate = async (req, res) => {
    res.json("authenticate");
};
const userInfo = async (req, res) => {
    res.json("User Info");
};
const generateOtp = async (req, res) => {
    res.json("generateOtp");
};
const verifyOtp = async (req, res) => {
    res.json("verifyOtp");
};

const resetSession = async (req, res) => {
    res.json("resetSession");
};

export {
    register,
    login,
    registerMail,
    authenticate,
    userInfo,
    generateOtp,
    verifyOtp,
    resetSession,
};
