import styled, { css } from 'styled-components';

import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: ${theme.sizes.max};
    width: 100%;
    margin: 0 auto;
    padding-bottom: ${theme.spacings.xhuge};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};

    ${HeadingStyles} {
      margin: 0 0 calc(${theme.spacings.small} - 1rem);
    }

    @media ${theme.media.lteSmall} {
      display: flex;
      flex-flow: column wrap;
      padding-bottom: 25px;

      & > ${HeadingStyles} {
        margin: 0 0 ${theme.spacings.medium} 0;
      }
    }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;

    @media ${theme.media.lteSmall} {
      margin-left: 0;
    }
  `}
`;
