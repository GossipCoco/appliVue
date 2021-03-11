import allCharacters from "../components/datas/characters.json"
import { db } from "@/firebase" 

export const CharactersService = {
    async getCharacters(){        
        const charactersRef = db.collection('characters')
        const charactersDoc = await charactersRef.get()

        const characters = charactersDoc.docs.map(character=>character.data())
        console.log("characters : ", characters)
        return characters

    }
};