import { useState } from 'react';
import React from 'react';
/**
 * Custom hook for handling form input state and updates.
 *
 * @param {string|number} initialValue - The initial value of the form input.
 * @param {string} id - The identifier for the form input.
 * @param {(event: React.FormEvent<HTMLInputElement|HTMLTextAreaElement>) => void} formUpdate - The function to update the input fields into formdata.
 * @param {string} [type='text'] - The type of the form input.
 * @returns {Object} - The inputProps object containing value, onChange, name, and type for the form input.
 */

export function useFormInput(
  initialValue: string | number,
  id: string,
  formUpdate: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  type: string = 'text',
) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(event.target.value);
    formUpdate(event);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
    name: id,
    type: type,
    // style: { color: 'green', border: '5px solid blue' },
  };

  return inputProps;
}
