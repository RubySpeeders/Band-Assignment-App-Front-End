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
    { name: "Chad", selected: false },
    { name: "Nick", selected: false },
    { name: "Brad", selected: false },
  ])
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const selectedEqual =
    instruments.filter((instrument) => instrument.selected).length ===
    names.filter((name) => name.selected).length

  const handleClickName = (item: Name) => {
    const nextName = names.map((name) => {
      if (name.name === item.name) {
        return { name: item.name, selected: !item.selected }
      } else {
        return name
      }
    })
    setNames(nextName)
  }

  const handleClickInstrument = (item: Instrument) => {
    const nextInstrument = instruments.map((instrument) => {
      if (instrument.instrument === item.instrument) {
        return { instrument: item.instrument, selected: !item.selected }
      } else {
        return instrument
      }
    })
    setInstruments(nextInstrument)
  }

  const assign = (names: Name[], instruments: Instrument[]) => {
    // const assignment: Assignment = { name: "", instrument: "" }
    const shuffledNames = shuffle(names.filter((name) => name.selected))
    const shuffledInstruments = shuffle(
      instruments.filter((instrument) => instrument.selected),
    )
    const nextAssignment = shuffledNames.map((name, i) => {
      return { name: name.name, instrument: shuffledInstruments[i].instrument }
    })
    setAssignments(nextAssignment)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Band Assignment</h1>
      </header>
      {!selectedEqual && <p>{errorMessage}</p>}
      <h2>Names</h2>
      {names
        .filter((name) => !name.selected)
        .map((name) => (
          <Card
            style={{ border: "solid blue", margin: ".25em", width: "50em" }}
            key={name.name}
            onClick={() => handleClickName(name)}
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
              onClick={() => handleClickName(name)}
            >
              <CardContent>
                <Typography>{name.name}</Typography>
              </CardContent>
            </Card>
          ))}
      </div>
      <div></div>
      <div>
        <h2>Instruments</h2>
        {instruments
          .filter((instrument) => !instrument.selected)
          .map((instrument) => (
            <Card
              style={{ border: "solid red", margin: ".25em", width: "50em" }}
              key={instrument.instrument}
              onClick={() => handleClickInstrument(instrument)}
            >
              <CardContent>
                <Typography>{instrument.instrument}</Typography>
              </CardContent>
            </Card>
          ))}
      </div>
      <Typography>Selected Instruments</Typography>
      {instruments
        .filter((instrument) => instrument.selected)
        .map((instrument) => (
          <Card
            style={{ border: "solid red", margin: ".25em", width: "50em" }}
            key={instrument.instrument}
            onClick={() => handleClickInstrument(instrument)}
          >
            <CardContent>
              <Typography>{instrument.instrument}</Typography>
            </CardContent>
          </Card>
        ))}
      <button
        onClick={() => assign(names, instruments)}
        disabled={!selectedEqual}
      >
        Give me assignments!
      </button>
      {assignments.map((assignment) => {
        return (
          <Card
            style={{ border: "solid pink", margin: ".25em", width: "50em" }}
            key={assignment.name}
          >
            <CardContent>
              <Typography>Name: {assignment.name}</Typography>
              <Typography>Instrument: {assignment.instrument}</Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
