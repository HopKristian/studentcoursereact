const StudentForm = () => {
    const AddStudentToTable = async () =>
    {
        const url = "http://localhost:5024/students/addstudent";
        try {
            const response = await fetch(url);
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
            <input type="text" id="name" placeholder="Start writing..."></input>

            <label>Student Email</label>
            <input type="text" id="email" placeholder="Start writing..."></input>

            <label>Student Age</label>
            <input type="number" id="age" placeholder="Start writing..."></input>
            <button className="btn btn-secondary" type="submit">Find</button>
        </div>
    )
}

export default StudentForm;