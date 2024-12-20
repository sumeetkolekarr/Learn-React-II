import React from "react";

const Form = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    cpassword: "",
    joinedNew: false,
  });
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.cpassword) {
      console.log("Sign Up Successful");
    } else {
      console.log("Passwords Do Not Match");
      return
    }

    if(formData.joinedNew){
        console.log('You have Joined!')
    }
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Password"
        />
        <input
          type="password"
          name="cpassword"
          onChange={handleChange}
          value={formData.cpassword}
          placeholder="Confirm Password"
        />
        <input
          type="checkbox"
          name="joinedNew"
          onChange={handleChange}
          checked={formData.joinedNew}
        />
        <label htmlFor="joinedNew">I want to join</label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
