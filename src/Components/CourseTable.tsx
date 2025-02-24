import {useState} from "react";
const CourseTable = () => {

    interface Course{
        id:number;
        name:string;
        students: Student[]
    }

    interface Student{
        name:string
    }

    const [courses, setCourses] = useState<Course[]>([]);

    const getCourse = async () => {
        const url = "http://localhost:5024/courses/getallcourse";
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setCourses(data);
            
        }
        catch(error){
            console.error("Error", error);
        }
    }

    return (
        
        <div id="course-table-group">
            <button id="get-course-button" onClick={getCourse}>Get courses</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Students</th>
                    </tr>
                </thead>
                <tbody>
    {courses.map(course => (
        <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.name}</td>
            <td>
                {course.students.length > 0 
                    ? course.students.map(student => student.name).join(', ')
                    : "No students"}
            </td>
        </tr>
    ))}
</tbody>

            </table>
        </div>
    )
}
export default CourseTable;

