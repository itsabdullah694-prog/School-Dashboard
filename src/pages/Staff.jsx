
import { useState } from "react";

function Staff() {

  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Ahmed Mohamed",
      role: "Teacher",
      email: "ahmed@gmail.com",
      phone: "0612345678",
      status: "Active"
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "Accountant",
      email: "fatima@gmail.com",
      phone: "0623456789",
      status: "Active"
    },
    {
      id: 3,
      name: "Mohamed Hassan",
      role: "Administrator",
      email: "mohamed@gmail.com",
      phone: "0634567890",
      status: "Inactive"
    }
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Active");

  function resetForm() {
    setName("");
    setRole("");
    setEmail("");
    setPhone("");
    setStatus("Active");
    setEditingId(null);
    setShowForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const staffMember = {
      id: editingId ?? Date.now(),
      name,
      role,
      email,
      phone,
      status
    };

    if (editingId !== null) {
      setStaff(staff.map(item =>
        item.id === editingId ? staffMember : item
      ));
    } else {
      setStaff([...staff, staffMember]);
    }

    resetForm();
  }

  function handleEdit(item) {
    setName(item.name);
    setRole(item.role);
    setEmail(item.email);
    setPhone(item.phone);
    setStatus(item.status);
    setEditingId(item.id);
    setShowForm(true);
  }

  function handleDelete(id) {
    setStaff(staff.filter(item => item.id !== id));
  }

  const activeStaff = staff.filter(
    item => item.status === "Active"
  ).length;

  const inactiveStaff = staff.filter(
    item => item.status === "Inactive"
  ).length;

  const filteredStaff = staff.filter(item =>
    `${item.name} ${item.role} ${item.email} ${item.phone} ${item.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="staff-page">

      <div className="staff-header">
        <div>
          <h1>Staff Management</h1>
          <p>Manage school staff members</p>
        </div>

        <button onClick={() => {
          resetForm();
          setShowForm(true);
        }}>
          + Add Staff
        </button>
      </div>

      <div className="staff-stats">

        <div className="staff-stat">
          <span>Total Staff</span>
          <h2>{staff.length}</h2>
        </div>

        <div className="staff-stat">
          <span>Active Staff</span>
          <h2 className="active-color">{activeStaff}</h2>
        </div>

        <div className="staff-stat">
          <span>Inactive Staff</span>
          <h2 className="inactive-color">{inactiveStaff}</h2>
        </div>

      </div>



      {showForm && (
        <div className="staff-form-section">

          <h3>{editingId !== null ? "Edit Staff" : "Add New Staff"}</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />

            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button type="submit">
              {editingId !== null ? "Update Staff" : "Save Staff"}
            </button>

            <button type="button" onClick={resetForm}>
              Cancel
            </button>

          </form>

        </div>
      )}

    
      <input
        className="staff-search"
        type="text"
        placeholder="Search by name, role, email, phone or status..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

    

      <div className="staff-table-section">

        <table className="staff-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredStaff.map(item => (
              <tr key={item.id}>

                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

                <td>
                  <span className={
                    item.status === "Active"
                      ? "staff-active"
                      : "staff-inactive"
                  }>
                    {item.status}
                  </span>
                </td>

                <td className="staff-actions">
                  <button onClick={() => handleEdit(item)}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>

              </tr>
            ))}

            {filteredStaff.length === 0 && (
              <tr>
                <td colSpan="6">No staff members found.</td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Staff;
