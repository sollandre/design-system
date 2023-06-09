/* 
  - Code the component visual and structure
  - Integrate with Radix
  OLD
  - Make the logic to hide and only show on hover
  - How it can be coupled with any other component????
    - Maybe it needs to be inside other component????
*/

import { ComponentProps } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Arrow, TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Portal>
      <TooltipContainer {...props}>
        {children}
        <Arrow />
      </TooltipContainer>
    </RadixTooltip.Portal>
  )
}

export interface TooltipTriggerWrapperProps
  extends ComponentProps<typeof RadixTooltip.Trigger> {}

export function TooltipTriggerWrapper({
  children,
  ...props
}: TooltipTriggerWrapperProps) {
  return (
    <RadixTooltip.Trigger {...props} asChild>
      {children}
    </RadixTooltip.Trigger>
  )
}

export interface TooltipWrapperProps
  extends ComponentProps<typeof RadixTooltip.Root> {}

export function TooltipWrapper({
  children,
  ...props
}: TooltipTriggerWrapperProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...props}>{children}</RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
