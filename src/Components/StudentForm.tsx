import {useState} from "react";

const StudentForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const AddStudentToTable = async () =>
    {
        


        const url = "http://localhost:5024/students/addstudent";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            });
            const data = await response.json();
            console.log(data);

        }
        catch(error){
            console.error("Error", error);
        }

    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 mb-3" id="form-group">
            <label htmlFor="name">Student Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Start writing..."></input>

            <label>Student Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Start writing..."></input>

            <label>Student Age</label>
            <input type="number" id="age" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Start writing..."></input>
            <button className="btn btn-secondary" type="submit" onClick={AddStudentToTable}>Find</button>
        </div>
    )
}

export default StudentForm;