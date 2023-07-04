import { comparePasswords, createJWT } from '@/lib/auth'
import { db } from '@/lib/db'
import { serialize } from 'cookie'


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const user = await db.user.findUnique({
            where: {
                email: req.body.email,
            }
        })
        const isValidUser = await comparePasswords(req.body.password, user?.password)
        
        if (isValidUser) {
            const jwt = await createJWT(user);

            res.setHeader(
                'Set-Cookie',
                serialize(process.env.COOKIE_NAME, jwt, {
                    httpOnly: true,
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7,
                }) 

            )

            return res.status(200).json({user: user})
        } else return res.status(401).json({message: 'Email or Password Incorrect. Please try again.'})
    } else return res.status(500).json({message: 'API method error'})
    
}