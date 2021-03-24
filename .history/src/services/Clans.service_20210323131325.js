import { db } from "@/firebase"
const clansRef = db.collection('clans')

export const ClansService = {
    async getClans(){
        const clansDoc = await clansRef.get()
        const clans = clansDoc.docs.map(clan=>Object.create({ ...clan.data(), id: clan.id}))
        console.log("all clan : ", clans);
        return clans
    },
    async getClanById(id){
        const clanByIDDoc = await clansRef.get();
        const clanById = clanByIDDoc.docs.map(clan=>clan.id = id);
        return clanById;
    }
}