import { shuffle } from "lodash"

export const assign = (array1: string[], array2: string[]) => {
  const assignment = { name: "", instrument: "" }
  const shuffledNames = shuffle(array1)
  const shuffledInstruments = shuffle(array2)
  console.log(shuffledNames, shuffledInstruments)
  for (let i = 0; i < array1.length; i++) {
    console.log("first", shuffledNames[i])
    assignment.name = shuffledNames[i]
    console.log("after", assignment.name)
    assignment.instrument = shuffledInstruments[i]
    console.log({ assignment })
  }
}
