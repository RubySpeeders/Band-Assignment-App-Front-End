import { ComponentStory } from "@storybook/react"
import { FormInput } from "./FormInput"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "FormInput",
  parameters: {
    layout: "centered",
  },
}

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
)

export const Example = Template.bind({})

Example.args = {
  title: "FormInput",
}
