import { db } from "@/firebase"

export const StatesService = {
    async getStates(){
        const statesRef = db.collection('states')
        const statesDoc = await statesRef.get()

        const states = statesDoc.docs.map(state=>state.data())

        return states
    }
};