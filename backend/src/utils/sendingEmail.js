import nodemailer from "nodemailer"
const sendEmail=async(to,subject,html)=>{
    ///configration sending
const transporter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user:process.env.SMTP_email,
        pass:process.env.SMTP_password
    }
})
    ///configration reciever

const info =await transporter.sendMail({
from:process.env.SMTP_email,
to,
subject,
html,
})
// console.log(info)
return info.rejected.length===0?true:false
}
export const subject ={
    register:"registered email",
    reset:"reseted email"
}
export default sendEmail
// sendEmail()