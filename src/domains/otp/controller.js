const OTP = require("./model");
const sendOTP = async ({email,subject,message,duraton = 1})=>{
try {
    if(!(email && subject && message)){
        throw Error("Provide values for email,subject,message");
    }
    await OTP.deleteOne({email});
} catch (error) {
    
}
}