import { useState } from 'react';
import { useFormInput } from './CustomHooks/userInputForm';

/**
 * Forms component for handling form submissions.
 *
 */
export function Forms() {
  const [formData, setFormData] = useState({});

  /**
   * Handles form updates and sets the updated data to the component state.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} updatedData - The updated form data.
   *
   */

  const formUpdate = (updatedData: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, ...{ [updatedData.target.name]: updatedData.target.value } });
  };
  const firstNameProps = useFormInput('Mary', 'fname', formUpdate);
  const lastNameProps = useFormInput('Poppins', 'lname', formUpdate);
  const emailProps = useFormInput('example@gmail.com', 'email', formUpdate);
  const maleGenderProps = useFormInput('male', 'gender', formUpdate, 'radio');
  const femaleGenderProps = useFormInput('female', 'gender', formUpdate, 'radio');
  const phoneNumberProps = useFormInput(0, 'phone', formUpdate, 'number');
  const addressProps = useFormInput('Enter your address', 'address', formUpdate, 'text');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <h1>Form submission</h1>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <label>
        Phone number
        <input {...phoneNumberProps} />
      </label>
      <label>
        Email
        <input {...emailProps} />
      </label>
      <label>
        Gender
        <label>
          <input {...maleGenderProps} />
          Male
        </label>
        <label>
          <input {...femaleGenderProps} />
          Female
        </label>
      </label>
      <label>Address</label>
      <textarea {...addressProps} cols={40} rows={10} />
      <button onClick={() => console.log(formData)} style={{ width: '15rem', borderRadius: '2rem' }}>
        Submit
      </button>
    </div>
  );
}
