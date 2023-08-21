import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { id } = req.body;
            const response = await fetch('https://bankaccountdata.gocardless.com/api/v2/requisitions/', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${process.env.GOCARDLESS_ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    redirect: `${process.env.URL}/dashboard`,
                    institution_id: id,
                    user_language: "EN",
                })
            })
            if (response.status === 201) {
                const data = await response.json();
                const { link } = data;
                return res.status(200).json({ 
                    message: "success", 
                    data: data 
                });
        } else return res.status(400).json({ message: response.statusText })
    }
}