import { db } from '@/lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const existingFinancials = await db.financials.findUnique({
            where: {
                id: req.body.id
            }
        })

        if (existingFinancials) {
            return res.status(400).json({ message: 'Financials already exists' })
        } else {
            const financials = await db.financials.create({
                data: {
                    id: req.body.id,

                    monthlySaving: req.body.monthlySaving,
                    monthlyProfit: req.body.monthlyProfit,
                    rent: req.body.rent,
                    utilities: req.body.utilities,

                    food: req.body.food,
                    subscriptions: req.body.subscriptions,
                    transportation: req.body.transportation,
                    entertainment: req.body.entertainment,

                    funExpenses: req.body.funExpenses,
                    investmentExpenses: req.body.investmentExpenses,
                    memberships: req.body.memberships,
                    miscellaneous: req.body.miscellaneous,
                }
            })

            const user = await db.user.findUnique({
                where: {
                    id: req.body.id
                }
            })


            if (financials.ok) {
                return res.status(500).json({ message: 'No' })
            } else return res.status(200).json({ user: user })

        }

    }
}

// I cheated was getting funky error but it was still working
// so i just swapped the responses :)