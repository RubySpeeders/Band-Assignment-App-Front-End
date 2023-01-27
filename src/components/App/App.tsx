import { useState } from "react"
import "./App.styles.css"
// import { assign } from "../../utilities/assign"
import { shuffle } from "lodash"
import { Card, CardContent, Typography } from "@material-ui/core"

export interface Name {
  name: string
  selected: boolean
}
export interface Instrument {
  instrument: string
  selected: boolean
}

export interface Assignment {
  name: string
  instrument: string
}

export function App() {
  const errorMessage = "People and Istruments not equal"
  const [instruments, setInstruments] = useState<Instrument[]>([
    { instrument: "bass drum", selected: false },
    { instrument: "snare", selected: false },
    { instrument: "triangle", selected: false },
  ])
  const [names, setNames] = useState<Name[]>([
    { name: "Chad", selected: true },
    { name: "Nick", selected: false },
    { name: "Brad", selected: false },
  ])
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const arraysEqual = instruments.length === names.length

  const handleNameSubmit = (values: Name) => {
    setNames([...names, values])
  }

  const handleInstrumentSubmit = (values: Instrument) => {
    setInstruments([...instruments, values])
  }

  const handleAssignment = (assignment: Assignment) => {
    setAssignments([...assignments, assignment])
  }

  const handleClick = (item: Name | Instrument) => {
    item.selected = !item.selected
    console.log(item)
  }

  const assign = (array1: Name[], array2: Instrument[]) => {
    const assignment: Assignment = { name: "", instrument: "" }
    const shuffledNames = shuffle(array1)
    const shuffledInstruments = shuffle(array2)

    // shuffledNames.forEach((name, i) => {
    //   assignment.name = name.name
    //   assignment.instrument = shuffledInstruments[i]
    //   console.log({ assignment }, i)
    handleAssignment(assignment)
    //   console.log(assignments.length)
    // })

    console.log(shuffledNames, shuffledInstruments, assignment, assignments)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Band Assignment</h1>
      </header>
      {!arraysEqual && <p>{errorMessage}</p>}
      <h2>Names</h2>
      {names
        .filter((name) => !name.selected)
        .map((name) => (
          <Card
            style={{ border: "solid blue", margin: ".25em", width: "50em" }}
            key={name.name}
            onClick={() => handleClick(name)}
          >
            <CardContent>
              <Typography>{name.name}</Typography>
            </CardContent>
          </Card>
        ))}
      <div>
        <Typography>Selected Names</Typography>
        {names
          .filter((name) => name.selected)
          .map((name) => (
            <Card
              style={{ border: "solid blue", margin: ".25em", width: "50em" }}
              key={name.name}
              onClick={() => handleClick(name)}
            >
              <CardContent>
                <Typography>{name.name}</Typography>
              </CardContent>
            </Card>
          ))}
      </div>
      <div>
        <button
          onClick={() =>
            handleNameSubmit({ name: "some name", selected: false })
          }
        >
          click me for a good time
        </button>
      </div>
      <div>
        <h2>Instruments</h2>
        {instruments.map((instrument) => (
          <Card
            style={{ border: "solid red", margin: ".25em", width: "50em" }}
            key={instrument.instrument}
            onClick={() => handleClick(instrument)}
          >
            <CardContent>
              <Typography>{instrument.instrument}</Typography>
            </CardContent>
          </Card>
        ))}
        <button
          onClick={() =>
            handleInstrumentSubmit({
              instrument: "some instrument",
              selected: false,
            })
          }
        >
          click me for another good time
        </button>
      </div>
      <button
        onClick={() => assign(names, instruments)}
        disabled={!arraysEqual}
      >
        Give me assignments!
      </button>
    </div>
  )
}
