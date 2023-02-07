import UserModel from "../model/User.model";
import bcrypt from "bcrypt";
const register = async (req, res) => {
    try {
        const { username, password, email, fullName } = req.body;

        // promise for check username
        const isUsernameExists = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, (err, user) => {
                if (err) reject(new Error(err));
                if (user)
                    reject(
                        new Error({
                            error: "Username Already exists.. ",
                        })
                    );
                resolve();
            });
        });

        // promise for check email address
        const isEmailExists = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, (err, email) => {
                if (err) reject(new Error(err));
                if (email)
                    reject(
                        new Error({
                            error: "Email Already exists.. ",
                        })
                    );
                resolve();
            });
        });

        Promise.all([isUsernameExists, isEmailExists]).then(() => {
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
                            .then(() => {
                                res.status(200).send({
                                    success: true,
                                    data: user,
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
