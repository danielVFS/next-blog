import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;

    /* Only for centralize */
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0.5rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }

    &::after {
      width: 6rem;
      height: 6rem;
      border-left: 0.5rem solid ${theme.colors.secondary};
      border-top: 0.5rem solid ${theme.colors.secondary};
      animation: ${rotate()} 600ms linear infinite;
    }
    &::before {
      width: 2.5rem;
      height: 2.5rem;
      border-left: 0.5rem solid ${theme.colors.secondary};
      border-top: 0.5rem solid ${theme.colors.secondary};
      animation: ${rotate()} 1s linear reverse infinite;
    }
  `}
`;
