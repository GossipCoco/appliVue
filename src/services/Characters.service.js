import allCharacters from "../components/datas/characters.json"
import { db} from "@/firebase" 

export const CharactersService = {
    async getCharacters(){
        
        const charactersRef = db.collection('characters')
        const charactersDoc = await charactersRef.get()

        const characters = charactersDoc.docs.map(character=>character.data())
        return characters
    },
    async getNewCharacters(){        
        const newcharactersRef = db.collection('newCharacter')
        const newcharactersDoc = await newcharactersRef.get()
        const newcharacters = newcharactersDoc.docs.map(newcharacter=>newcharacter.data())
        return newcharacters
    },
    async addCharacter(character) {
        const newCharacterRef = db.collection('newCharacter')
        const result = await newCharacterRef.add(character);
        return result.id;
      },
};