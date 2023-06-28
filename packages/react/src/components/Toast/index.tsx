import { cssTransition, toast } from 'react-toastify'
import {
  CloseButton,
  StyledToastContainer,
  StyledToastContainerProps,
  ToastWrapper,
} from './styles'
import { PropsWithChildren, ReactElement, useId } from 'react'
import { Text, Heading } from '../../index'

export type ToastProps = {
  title: string
  description: string
}

export const Toast = (props: ToastProps) => {
  const { title, description } = props
  return (
    <div>
      <Heading size="sm" css={{ lineHeight: '$base' }}>
        {title}
      </Heading>
      <Text size="xs" css={{ color: '$gray200' }}>
        {description}
      </Text>
    </div>
  )
}

const defaultAnim = cssTransition({
  enter: 'enter',
  exit: 'exit',
})

const options: StyledToastContainerProps = {
  closeButton: false,
  autoClose: 2000,
  transition: defaultAnim,
  bodyClassName: '',
}
interface ToastTriggerProps extends PropsWithChildren {
  ToastElement: ReactElement
}

export function ToastTrigger({ children, ToastElement }: ToastTriggerProps) {
  const containerId = useId()

  const trigger = () =>
    toast(
      ({ closeToast }) => {
        return (
          <ToastWrapper>
            {ToastElement}
            <CloseButton onClick={closeToast} />
          </ToastWrapper>
        )
      },
      {
        containerId,
      },
    )

  return (
    <>
      <div onClick={trigger}>{children}</div>
      <StyledToastContainer {...options} containerId={containerId} />
    </>
  )
}
