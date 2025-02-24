import {useState} from "react";

const StudentTable = () => {

    interface Student {
        id:number;
        name:string;
        age:number;
        email:string;
        courses:Course[]
    }

    interface Course {
        name:string;
    }

    const [students, setStudents] = useState<Student[]>([]);

    
    const getStudents = async () => {
        const url = "http://localhost:5024/students/getallstudents";
        try {
            const response = await fetch(url);
            const data:Student[] = await response.json();
            console.log(data);
            setStudents(data);
            

        }
        catch(error){
            console.error("Error", error);
        }
    }
    
    return (
        
        <div id="student-table-group">
            <button id="get-students-button" onClick={getStudents}>Get students</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Courses</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>
                                {student.courses.length > 0 
                                    ? student.courses.map(course => course.name).join(', ')
                                    : "No courses"}
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}
export default StudentTable;