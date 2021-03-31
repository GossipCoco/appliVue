import { db} from "@/firebase" 
const CharactersByUserRef = db.collection('userCharacters');

export const CharactersByUserService = {
    async getCharactersByUser(){
        const CharactersByUserDoc = await CharactersByUserRef.get();
        const CharactersByUser = CharactersByUserDoc.docs.map(CharacterByUser => 
            Object.create({ ...CharacterByUser.data(), id: CharacterByUser.id}));
        return CharactersByUser;
    }
}