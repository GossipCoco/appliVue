import { db} from "@/firebase" 

export const GenresService = {
    async getGenres(){
        const genresRef = db.collection('genres')
        const genresDoc = await genresRef.get()
        const genres = genresDoc.docs.map(genre=>genre.data())

        return genres
    }
};