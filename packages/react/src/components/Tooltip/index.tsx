/* 
  - Code the component visual and structure
  - Make the logic to hide and only show on hover
  - How it can be coupled with any other component????
    - Maybe it needs to be inside other component????
*/

import { ComponentProps } from 'react'
import { MessageFormatContainer, TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function Tooltip({ children }: TooltipProps) {
  return (
    <MessageFormatContainer>
      <TooltipContainer>{children}</TooltipContainer>
    </MessageFormatContainer>
  )
}
