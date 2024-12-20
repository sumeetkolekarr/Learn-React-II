import React from "react";

const App = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    bankBalanceLevel: "",
    favColor: "",
  });
  console.log(formData);
  // function handleChange(event) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }
  // function handleCheckBoxChange(event) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       isFriendly: !formData.isFriendly,
  //     };
  //   });
  // }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        value={formData.comments}
        onChange={handleChange}
        name="comments"
      />
      <input
        type="checkbox"
        id="isFriendly"
        onChange={handleChange}
        checked={formData.isFriendly}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are You Friendly?</label>
      <fieldset>
        <legend>Current Bank Balance</legend>
        <input
          type="radio"
          onChange={handleChange}
          value="millionaire"
          id="millionaire"
          checked={formData.bankBalanceLevel === "millionaire"}
          name="bankBalanceLevel"
        />
        <label htmlFor="millionaire"> Millionaire</label>
        <br />
        <input
          type="radio"
          onChange={handleChange}
          value="billionaire"
          checked={formData.bankBalanceLevel === "billionaire"}
          id="billionaire"
          name="bankBalanceLevel"
        />
        <label htmlFor="billionaire"> Billionaire</label>
        <br />
        <input
          type="radio"
          checked={formData.bankBalanceLevel === "trillionaire"}
          onChange={handleChange}
          value="trillionaire"
          id="trillionaire"
          name="bankBalanceLevel"
        />
        <label htmlFor="trillionaire"> Trillionaire</label>
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your Favorite Color?</label>
      <br />
      <select
        id="favColor"
        onChange={handleChange}
        value={formData.favColor}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default App;
