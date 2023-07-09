import { serialize } from 'cookie'


export default async function handler(req, res) {
    try {
        res.setHeader(
            'Set-Cookie',
            serialize(process.env.COOKIE_NAME, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", {
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24 * 7,
            }) 

        )
    } catch (error) {
        console.log(error)
    } finally {
        return res.status(200).json({message: 'Logout successful'})
    }

           
}