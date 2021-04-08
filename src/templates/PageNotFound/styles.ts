import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    img {
      width: 50%;
      height: 50%;
    }

    p {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.slateBlue};
      font-weight: bold;
    }

    a {
      background-color: ${theme.colors.tomato};
      color: ${theme.colors.white};
      width: 210px;
      border-radius: 20px;
      text-decoration: none;
      margin-top: 20px;
      padding: 10px 20px;
      text-align: center;
      font-size: ${theme.font.sizes.small};
      font-weight: 500;
    }
  `}
`;
