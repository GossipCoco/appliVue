import { db } from "@/firebase"

export const GradesService = {
    async getGrades(){
        const gradesRef = db.collection('grades')
        const gradesDoc = await gradesRef.get()

        const grades = gradesDoc.docs.map(grade=>grade.data())
        console.log(grades)
        return grades
    }
};