import { useState } from "react";
import "./App.styles.css"
import { Formik } from "formik";

export interface Name {
  name: string;
}
export interface Instrument {
  instrument: string;
}

export function App() {
  const errorMessage = "People and Istruments not equal";
  const [instruments, setInstruments] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const arraysEqual = instruments.length === names.length;

  const handleNameSubmit = (values: Name) => {
    setNames([...names, values.name]);
  };

  const handleInstrumentSubmit = (values: Instrument) => {
    setInstruments([...instruments, values.instrument]);
  };
  return (
    <div className="App">
      <header className="App-header">
      <h1>Band Assignment</h1>
      </header>
      {!arraysEqual && <p>{errorMessage}</p>}
      <div>
      <h2>Names</h2>
      <Formik initialValues={{ name: "" }} onSubmit={handleNameSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label>
              Name:
              <input
                id="name"
                type="text"
                {...formik.getFieldProps("name")}
                onChange={formik.handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      {names.map((name, i) => (
        <p key={i}>{name}</p>
      ))}
    </div>
      <div>
      <h2>Instruments</h2>
      <Formik initialValues={{ instrument: "" }} onSubmit={handleInstrumentSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label>
              Instrument:
              <input
                id="instrument"
                type="text"
                {...formik.getFieldProps("instrument")}
                onChange={formik.handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      {instruments.map((instrument, i) => (
        <p key={i}>{instrument}</p>
      ))}
    </div>
      <button onClick={() => console.log('clicked')}>
        Give me assignments!
      </button>
    </div>
  )
}
