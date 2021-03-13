import allCharacters from "../components/datas/characters.json"
import { db} from "@/firebase" 
const charactersRef = db.collection('characters');
export const CharactersService = {
    async getCharacters(){        
        const charactersDoc = await charactersRef.get();
        const characters = charactersDoc.docs.map(character => Object.create({ ...character.data(), id: character.id}));
        return characters;
    },
    async getCharacterById(id){
        const searchCharacterDoc = await charactersRef.get();
        const searchCharacter = searchCharacterDoc.docs.map(character=>character.id = id);
        return searchCharacter;
    },
    /* TEST NEWS CHARACTERS */
    async getNewCharacters(){        
        const newcharactersRef = db.collection('newCharacters')
        const newcharactersDoc = await newcharactersRef.get();
        const newcharacters = newcharactersDoc.docs.map(newCharacter => Object.create({ ...newCharacter.data(), id: newCharacter.id}));
        return newcharacters
    },
    async addCharacter(character) {
        const newcharactersRef = db.collection('newCharacters')
        const result = await newcharactersRef.add(character);
        return result.id;
    },
    deleteChararcter(character){
        const newcharactersRef = db.collection('newCharacters');
        const newCharacterDelete = newcharactersRef.doc(character.id);
        newCharacterDelete.delete();
    },
};