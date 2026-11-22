
function Home() {
  return (

    <div className="home">

      <h1>School Dashboard</h1>

      <p>Welcome to the School Management System</p>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Students</h3>
          <p>3</p>
        </div>

        <div className="card">
          <h3>Teachers</h3>
          <p>2</p>
        </div>

        <div className="card">
          <h3>Classes</h3>
          <p>2</p>
        </div>

        <div className="card">
          <h3>Departments</h3>
          <p>12</p>
        </div>

      </div>

      <div className="home-last-cards">

      <div className="last-cards"> 
        <h3>Attendance</h3>
        <p>Today's student attendance overview</p>

          <div className="progress-container">
            <div className="progress-fill"></div>
            <p>85% Present</p>
          </div>
      </div>

      <div className="last-cards">
        <h3>Upcoming Events</h3>
        <ul>
          <li>Final Exam - june 12</li>
          <li>Sports Competition - june 20</li>
          <li>Graduation Ceremony - july 1</li>
        </ul>
      </div>

      <div className="last-cards">
        <h3>Notifications</h3>
        <ul>
          <li>New student registered</li>
          <li>School meeting tomorrow</li>
          <li>Result upload successfully</li>
        </ul>
      </div>




      </div>

    </div>
  );
}

export default Home;
