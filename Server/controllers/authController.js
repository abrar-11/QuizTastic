const register = async (req, res) => {
    res.json("register");
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
