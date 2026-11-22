
import { useState } from "react";

function Class() {

  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Class 1A",
      teacher: "Ahmed Ali",
      students: 35,
      status: "Active"
    },
    {
      id: 2,
      name: "Class 2B",
      teacher: "Fatima Hassan",
      students: 28,
      status: "Active"
    }
  ]);

  const [className, setClassName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [studentsCount, setStudentsCount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newClass = {
      id: Date.now(),
      name: className,
      teacher: teacherName,
      students: Number(studentsCount),
      status: "Active"
    };

    setClasses([...classes, newClass]);

    setClassName("");
    setTeacherName("");
    setStudentsCount("");
  }

  const totalStudents = classes.reduce(
    (total, item) => total + item.students, 0
  );

  const totalTeachers = new Set(
    classes.map(item => item.teacher)
  ).size;

  return (
    <div className="class-page">

      <h1>Class Management</h1>
      <p className="subtitle">Manage school classes easily</p>


      <div className="class-stats">

        <div className="stat-card">
          <h3>Total Classes</h3>
          <p className="blue">{classes.length}</p>
        </div>

        <div className="stat-card">
          <h3>Total Students</h3>
          <p className="green">{totalStudents}</p>
        </div>

        <div className="stat-card">
          <h3>Teachers</h3>
          <p className="orange">{totalTeachers}</p>
        </div>

      </div>


      <div className="class-section">

        <h3>Add New Class</h3>

        <form onSubmit={handleSubmit}>

          <div className="class-inputs">

            <input
              type="text"
              placeholder="Class Name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Teacher Name"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Students Count"
              value={studentsCount}
              onChange={(e) => setStudentsCount(e.target.value)}
              min="0"
              required
            />

          </div>

          <button type="submit">Add Class</button>

        </form>

      </div>

     

      <div className="class-section">

        <h3>Class List</h3>

        <table className="class-table">

          <thead>
            <tr>
              <th>Class</th>
              <th>Teacher</th>
              <th>Students</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.teacher}</td>
                <td>{item.students}</td>
                <td>
                  <span className="status">{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Class;
