import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = await fetch("http://localhost:3400");
    const data = await result.json();
    console.log(data);
    setData(data);
  }

  async function collectData() {
    alert(`${name} your registration is successful !!!`);
    const result = await fetch("http://localhost:3400", {
      method: "POST",
      body: JSON.stringify({
        name,
        mobNo,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();
    getData();
    console.log(data);
  }

  return (
    <div className="App">
      <div className="formStyle">
        <form>
          <h1>LOGIN FORM</h1>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Name"
            required
          />
          <br /> <br />
          <input
            type="number"
            name="MobNo"
            onChange={(e) => {
              setMobNo(e.target.value);
            }}
            placeholder="Enter Mobile No."
            required
          />{" "}
          <br /> <br />
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            required
          />{" "}
          <br /> <br />
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Password"
            required
          />{" "}
          <br /> <br />
          <span>
            <input
              type="checkbox"
              name="termsConditions"
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
              required
            />
          </span>
          <span> Agree to all terms & conditions.</span>
          <span style={{ color: "red", fontSize: "20px" }}>*</span>
          <br /> <br />
          {accept ? (
            <button type="submit" onClick={collectData}>
              Submit
            </button>
          ) : (
            <button>Submit</button>
          )}
        </form>
      </div>

      <h2>USERS</h2>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>FullName</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Password</td>
          </tr>
          {data.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobNo}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
