
import { useState } from "react";

function Finance() {

  const [finance, setFinance] = useState([
    { id: 1, name: "Ahmed Ali", className: "Class One", status: "Paid", amount: 120 },
    { id: 2, name: "Ayan Hassan", className: "Class Two", status: "Unpaid", amount: 100 },
    { id: 3, name: "Mohamed Yusuf", className: "Class Three", status: "Paid", amount: 150 },
    { id: 4, name: "Hodan Omar", className: "Class One", status: "Unpaid", amount: 120 }
  ]);

  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [status, setStatus] = useState("Paid");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPayment = {
      id: Date.now(),
      name: studentName,
      className: className,
      status: status,
      amount: Number(amount)
    };

    setFinance([...finance, newPayment]);

    setStudentName("");
    setClassName("");
    setStatus("Paid");
    setAmount("");
  }

  const paidStudents = finance.filter(
    item => item.status === "Paid"
  ).length;

  const unpaidStudents = finance.filter(
    item => item.status === "Unpaid"
  ).length;

  const totalStudents = finance.length;

  const totalPaid = finance
    .filter(item => item.status === "Paid")
    .reduce((total, item) => total + item.amount, 0);

  return (
    <div className="finance-page">

      <h1>Finance Section</h1>

     

      <div className="finance-section">

        <h3>Add Student Fee</h3>

        <form onSubmit={handleSubmit}>

          <div className="finance-inputs">

            <input
              type="text"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Class Name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>

            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              required
            />

          </div>

          <button type="submit">Add</button>

        </form>

      </div>

     

      <div className="finance-stats">

        <div className="finance-card paid-card">
          <h4>Paid Students</h4>
          <p>{paidStudents}</p>
        </div>

        <div className="finance-card unpaid-card">
          <h4>Unpaid Students</h4>
          <p>{unpaidStudents}</p>
        </div>

        <div className="finance-card total-card">
          <h4>Total Students</h4>
          <p>{totalStudents}</p>
        </div>

        <div className="finance-card amount-card">
          <h4>Student Paid</h4>
          <p>${totalPaid}</p>
        </div>

      </div>


      <div className="finance-section">

        <h2>Finance List</h2>

        <table className="finance-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {finance.map((item) => (
              <tr key={item.id}>
                <td>{item.id === finance[0].id ? 1 : finance.indexOf(item) + 1}</td>
                <td>{item.name}</td>
                <td>{item.className}</td>
                <td className={item.status === "Paid" ? "paid-text" : "unpaid-text"}>
                  {item.status}
                </td>
                <td>${item.amount}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Finance;
