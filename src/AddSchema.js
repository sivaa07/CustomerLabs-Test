import { useState } from "react";
import "./styles.css";

export const AddSchema = () => {
  const [temp, setTemp] = useState({
    first_name: "First Name",
    last_name: "Last Name",
    gender: "Gender",
    age: "Age",
    account_name: "Account_Name",
    city: "City",
    state: "State"
  });
  const [formValues, setFormValues] = useState([
    {
      first_name: "First Name",
      last_name: "Last Name",
      gender: "Gender",
      age: "Age",
      account_name: "Account_Name",
      city: "City",
      state: "State"
    }
  ]);

  let handleChange = (event) => {
    console.log(event.target.value);
    delete temp[event.target.value];
    setTemp(temp);
  };
  let addFormFields = () => {
    console.log(formValues);
    setFormValues([...formValues, temp]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
    event.preventDefault();
    fetch(`https://webhook.site/86512e98-9676-4877-b5cc-133723f491ea`, {
      method: "POST",
      body: JSON.stringify(formValues)
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div class="dropdonw-list" key={index}>
            <span class="dot green-dot"></span>
            <select class="dropdown-segment" onChange={handleChange}>
              {Object.keys(element).map((e) => (
                <option value={e} label={element[e]}></option>
              ))}{" "}
            </select>

            {index ? (
              <img
                onClick={() => removeFormFields(index)}
                src="https://img.icons8.com/material-two-tone/24/undefined/minus--v1.png"
                class="minus"
              />
            ) : null}
          </div>
        ))}
        <a class="add-new" onClick={addFormFields}>
          + Add new schema
        </a>
      </form>
    </>
  );
};
