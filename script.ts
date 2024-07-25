import { config } from "./config/config";
import { Course, Prerequisite } from "./types/types";
import { insertCourses, insertPrerequsite, readCSVFile } from "./Insertion/Insertion";
import { router } from "./routes/route";
import express from 'express'

const app = express();
app.use(express.json());
app.use('/',router);

config;
let courses: Course[]
let prerequisites : any =[]
const LoadInsert = async() =>{
    try{
        courses = await readCSVFile<Course>('staticData/courses.csv');
        prerequisites = await readCSVFile<Prerequisite>('staticData/prerequisite.csv');
        console.log(courses)
        console.log("prerequisite",prerequisites)
        if(courses){
            await insertCourses(courses);
        }
        if(prerequisites){
            await insertPrerequsite(prerequisites);
        }
    }
    catch(e){
        console.log("Error fetching or Inserting:", e);
    } 
}
LoadInsert()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});