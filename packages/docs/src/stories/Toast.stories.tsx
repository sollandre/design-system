import { Button, Toast, ToastProps, ToastTrigger } from '@stackpaper/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    // children: <Button>Click me!</Button>,
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 26 de Outubro de 2023',
  },
  decorators: [
    (Story) => {
      return (
        <ToastTrigger ToastElement={<Story></Story>}>
          <Button>Click me!</Button>
        </ToastTrigger>
      )
    },
  ],
  argTypes: {
    // children: {
    //   control: {
    //     type: null,
    //   },
    // },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
