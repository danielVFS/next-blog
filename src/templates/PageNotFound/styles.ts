import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 120rem;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 50px;

    img {
      width: 100%;
      height: 50%;
    }

    p {
      width: 100%;
      text-align: center;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.slateBlue};
      font-weight: bold;
    }

    a {
      background-color: ${theme.colors.tomato};
      color: ${theme.colors.white};
      width: 180px;
      border-radius: 50px;
      text-decoration: none;
      margin-top: 20px;
      padding: 10px 20px;
      text-align: center;
      font-size: ${theme.font.sizes.small};
      font-weight: 500;
    }

    @media ${theme.media.lteSmall} {
      padding: 0 10px;

      p {
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;
