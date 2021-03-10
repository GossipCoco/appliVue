import { db } from "@/firebase"

export const ClansService = {
    async getClans(){
        const clansRef = db.collection('clans')
        const clansDoc = await clansRef.get()
        const clans = clansDoc.docs.map(clan=>clan.data())
        return clans
    }
}