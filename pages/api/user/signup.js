import { db } from '@/lib/db';
import { createJWT, hashPassword } from '../../../lib/auth'
import {serialize} from 'cookie'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const existingUser = await db.user.findUnique({
            where: {
                email: req.body.email
            }
        })
    	 if (!existingUser) {
            const user = await db.user.create({ 
                data: {
                    email: req.body.email,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    password: await hashPassword(req.body.password)
                }
            }) 

            const jwt = await createJWT(user)
            
            res.setHeader(
                'Set-Cookie',
                serialize(process.env.COOKIE_NAME, jwt, {
                    httpOnly: true,
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7,
                })
            )
            
            if (!user.ok) {
                return res.status(200).json({user: user})
            } else return res.status(500).json({message: 'Error Occured: Please try again later'})
    
        } else return res.status(400).json({message: 'User Email Already Exists'})
    } else return res.status(402).json({message: 'Wrong Api method'})
        
}
