import React, { useState } from "react";

function ChildComp({ isLoggedIn, setIsLoginIn }) {
  const [inputField, setInputField] = useState({
    user: "",
    pass: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setInputField((pre) => {
      return { ...inputField, [name]: value };
    });
  }

  const handleSubmit = () => {
    setIsLoginIn(true);
  };
  return (
    <div className="container">
      {isLoggedIn ? (
        "You Are Logged In!"
      ) : (
        <>
          <div className="wrapper">
            <label>UserName</label>
            <input
              type="text"
              name="user"
              value={inputField.user}
              onChange={handleChange}
            />
          </div>
          <div className="wrapper">
            <label>Password</label>
            <input
              type="password"
              name="pass"
              value={inputField.pass}
              onChange={handleChange}
            />
          </div>

          <button
            disabled={inputField.user === "" || inputField.pass === ""}
            className="btn"
            onClick={handleSubmit}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default ChildComp;
