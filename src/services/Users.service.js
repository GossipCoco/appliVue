import { db } from "@/firebase"

export const UsersService = {
    async getUsers(){
        const usersRef = db.collection('allusers');
        const usersDoc = await usersRef.get();
        const users = usersDoc.docs.map(user => user.data());
        return users;
    },
    async getUserById(id){
        const usersRef = db.collection('allusers');
        const searchUserDoc = await usersRef.get();
        const searchUser = searchUserDoc.docs.map(user => user.id = id);
        return searchUser;
    },
    async getUserByEmail(){
        const usersRef = db.collection('allusers');
        const searchUserDoc = await usersRef.get();
        const searchUser = searchUserDoc.docs.map(user => user.email = email);
        return searchUser;
    }
};