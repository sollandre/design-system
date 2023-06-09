import { styled } from '../../styles'

const bgColor = '$gray900'

export const TooltipContainer = styled('div', {
  width: 'fit-content',
  padding: '$3 $4',
  backgroundColor: bgColor,
  color: '$gray100',
  borderRadius: '$xs',
})

export const MessageFormatContainer = styled('div', {
  width: 'fit-content',

  '&::after': {
    content: '',
    height: '$2',
    width: '$4',
    margin: 'auto',
    backgroundColor: bgColor,
    display: 'block',
    clipPath: 'polygon(100% 0, 0 0, 50% 100%)',
  },
})
