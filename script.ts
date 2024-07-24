import { config } from "./config/config";
import { Course, Prerequisite } from "./types/types";
import { insertCourses, insertPrerequsite, readCSVFile } from "./Insertion/Insertion";


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