import { db } from "@/firebase"

export const RolesService = {
    async getRoles(){
        const rolesRef = db.collection('roles');
        const rolesDoc = await rolesRef.get();
        const roles = rolesDoc.docs.map(role => role.data());
        return roles;
    }
}