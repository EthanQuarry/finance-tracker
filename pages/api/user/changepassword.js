// import { db } from '@/lib/db';
// import nodemailer from 'nodemailer';

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// })  



// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const user = await db.user.findUnique({
//             where: {
//                 email: req.body.email,
//             }
//         })
//         var mailOptions = {
//             from: process.env.EMAIL,
//             to: req.body.email,
//             subject: "------ Password Reset",
//             html: 
//             "<div style='text-align: center;'><h1  >" + user?.email + "</h1>" +
//                 "<div>"+ user?.password +"</div>" +
//                 "</div>"
//         }
//         if (user) {
//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     return res.status(500).json({message: 'Error sending Email containing Details'})
//                 } else return res.status(200).json({message: 'Successfully sent email containing login details. Be sure to check spam!'})
//             });
//         } else return res.status(401).json({message: 'Error validating Email please try again'})        

//     } 

// }

//NEED TO WATCH VIDEO ON HOW TO CHANGE PASSWORD THROUGHT EMAIL.