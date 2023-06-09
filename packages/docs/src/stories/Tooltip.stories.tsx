import type { StoryObj, Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipProps,
  Text,
  TooltipWrapper,
  TooltipTriggerWrapper,
  Button,
} from '@stackpaper/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>Tooltip Content</Text>,
  },
  decorators: [
    (Story) => {
      return (
        <TooltipWrapper>
          <TooltipTriggerWrapper>
            <Button>Hover me</Button>
          </TooltipTriggerWrapper>
          {Story()}
        </TooltipWrapper>
      )
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  parameters: {
    docs: {
      description: {
        story:
          'The tooltip components needs to be used along with other 2 components in order to work properly. The first necessary component is the TooltipTriggerWrapper that is used to wrap the element which will show the tooltip when hovered or focused. The last one is the TooltipWrapper which is mainly responsible for the hide/show mechanism and it needs to wrap both the tooltip trigger and the tooltip itself.',
      },
    },
  },
}
