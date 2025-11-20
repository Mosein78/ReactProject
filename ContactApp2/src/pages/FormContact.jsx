import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

function FormContact() {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    job: "",
    email: "",
  });
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setValue((prev) => ({ ...prev, [name]: value }));
    {
      value.length < 5
        ? setError((perv) => ({ ...perv, [name]: "حداقل 5 کارکتر" }))
        : setError((perv) => ({ ...perv, [name]: "" }));
    }



  };
  return (
    <div>
      <form >
        <label>Name :</label>
        <input
          name="name"
          type="text"
          placeholder="Type your Name"
          value={value.name}
          onChange={changeHandler}
        />
        {error.name && <p style={{ color: "red" }}> {error.name}</p>}

        <label>Email :</label>
        <input
          name="email"
          type="email"
          placeholder="Type your email"
          value={value.email}
          onChange={changeHandler}
        />
        {error.email && <p style={{ color: "red" }}> {error.email}</p>}

        <label>Phone :</label>
        <input
          name="phone"
          type="number"
          placeholder="Type your Phone"
          value={value.phone}
          onChange={changeHandler}
        />
        {error.phone && <p style={{ color: "red" }}> {error.phone}</p>}

        <label>Job :</label>
        <input
          name="job"
          type="text"
          placeholder="Type your Job"
          value={value.job}
          onChange={changeHandler}
        />
        {error.job && <p style={{ color: "red" }}> {error.job}</p>}
      </form>
      <button type="submit">Add</button>
      <div>
        <button>
          <Link to="/realPage">
            <FaChevronLeft />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FormContact;
