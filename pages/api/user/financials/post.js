import { db } from '@/lib/db';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const user = await db.financials.create({
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
        if (!user.ok) {
            return res.status(500).json({message: 'Failed to create add financials'})
        } else return res.status(200).json({message: 'Successfully added financials'})
    }
}