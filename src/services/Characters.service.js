import allCharacters from "../components/datas/characters.json"
import { db} from "@/firebase" 



export const CharactersService = {
    async getCharacters(){
        
        const charactersRef = db.collection('characters')
        const charactersDoc = await charactersRef.get()
        const characters = charactersDoc.docs.map(character=>character.data())
        return characters
    },


    /* TEST NEWS CHARACTERS */
    async getNewCharacters(){        
        const newcharactersRef = db.collection('newCharacters')
        const newcharactersDoc = await newcharactersRef.get()
        //console.log(newcharactersRef)
        const newcharacters = newcharactersDoc.docs.map(newCharacter => Object.create({ ...newCharacter.data(), id: newCharacter.id}));
        //console.log(newcharacters);
        return newcharacters
    },
    async addCharacter(character) {
        const newcharactersRef = db.collection('newCharacters')
        console.log("new char js : ", character);
        const result = await newcharactersRef.add(character);        
        console.log("result : ", result, result.id);
        return result.id;
    },
    deleteChararcter(character){
        const newcharactersRef = db.collection('newCharacters');
        const newCharacterDelete = newcharactersRef.doc(character.id);
        console.log(newCharacterDelete);
        newCharacterDelete.delete();

    },
    async getCharacterById(id){
        const searchCharacterRef = db.collection('characters')
        const searchCharacterDoc = await charactersRef.get()

        const searchCharacter = charactersDoc.docs.map(character=>character.id = id)
        return searchCharacter
    }
};