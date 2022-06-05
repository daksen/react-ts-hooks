import { useState, ChangeEvent } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  
  const [values, setValues] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>):void => {

    const { name, value } = target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return {
    values,
    handleChange,
  }
}
