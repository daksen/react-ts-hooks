import { useForm } from "../hooks/useForm";

interface FormData {
  email: string,
  name: string,
  age: number,
}

export const Form = () => {

  const { values, handleChange } = useForm<FormData>({
    email: '',
    name: '',
    age: 0,
  });

  const { email, name, age } = values;

  return (
    <div className="container border bg-light text-bg-light p-3 mt-2">
      <h4>Form</h4>
      <form autoComplete="off">
        <div className="mb-2">
          <label className="form-label">Email:</label>
          <input
            name="email"
            type="email" 
            value={email}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Name:</label>
          <input
            name="name"
            type="text" 
            value={name}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Age:</label>
          <input
            name="age"
            type="number" 
            value={age}
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </form>
      <pre className="m-0">{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
