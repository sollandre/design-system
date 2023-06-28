import { ToastContainer } from 'react-toastify'
import { keyframes, styled } from '../../styles'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
/*
Container{
  set position [X]
}
Toast
Animation {
  animation-in [X]
  animation-out [X]
}
Close Button [X]
*/

const bounceInRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translate3d(100%,0,0)',
  },
  '60%': {
    opacity: 1,
    transform: 'translate3d(-25px, 0, 0)',
  },
  '75%': {
    transform: 'translate3d(10px, 0, 0)',
  },
  '90%': {
    transform: 'translate3d(-5px, 0, 0)',
  },
  to: {
    transform: 'none',
  },
})

const bounceInLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translate3d(-100%,0,0)',
  },
  '60%': {
    opacity: 1,
    transform: 'translate3d(25px, 0, 0)',
  },
  '75%': {
    transform: 'translate3d(-10px, 0, 0)',
  },
  '90%': {
    transform: 'translate3d(5px, 0, 0)',
  },
  to: {
    transform: 'none',
  },
})

const fadeOut = keyframes({
  '20%': {
    opacity: '1',
  },
  to: {
    opacity: '0',
  },
})

const shorten = keyframes({
  from: {
    width: '100%',
  },
  to: {
    width: 0,
  },
})

export const StyledToastContainer = styled(ToastContainer, {
  variants: {
    position: {
      topRight: {
        top: '$5',
        right: '$5',
        '& .enter': {
          animation: `${bounceInRight} 500ms ease-in-out`,
        },
      },
      topLeft: {
        top: '$5',
        left: '$5',
        '& .enter': {
          animation: `${bounceInLeft} 500ms ease-in-out`,
        },
      },
      bottomRight: {
        bottom: '$5',
        right: '$5',
        '& .enter': {
          animation: `${bounceInRight} 500ms ease-in-out`,
        },
      },
      bottomLeft: {
        bottom: '$5',
        left: '$5',
        '& .enter': {
          animation: `${bounceInLeft} 500ms ease-in-out`,
        },
      },
    },
  },

  '&.Toastify__toast-container': {
    borderRadius: '$sm',
    padding: 0,
    width: 'fit-content',
    maxWidth: '45vw',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
  },

  '& .Toastify__toast': {
    width: 'fit-content',
    padding: 0,
    borderRadius: '$sm',
    backgroundColor: '$gray800',
    position: 'relative',
    zIndex: 0,
  },

  '& .Toastify__progress-bar': {
    width: '100%',
    height: '$1',
    background: '$ignite500',
    position: 'absolute',
    bottom: '1px',
    borderBottomLeftRadius: '$xs',
    animation: `${shorten} linear forwards`,
  },

  '& .exit': {
    animation: `${fadeOut} 400ms`,
    animationFillMode: 'forwards',
  },

  defaultVariants: {
    position: 'topRight',
  },
})
export interface StyledToastContainerProps
  extends ComponentProps<typeof StyledToastContainer> {}

export const ToastWrapper = styled('div', {
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$12',
  padding: '$3 $5',
  border: 'solid 1px $gray600',
  borderRadius: '$sm',
  backgroundColor: '$gray800',
})

export const CloseButton = styled(X, {
  cursor: 'pointer',
  color: '$gray200',
  height: '$5',
  width: '$5',
})
