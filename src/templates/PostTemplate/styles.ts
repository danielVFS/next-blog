import styled, { css } from 'styled-components';

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} auto;
    padding: 0 ${theme.spacings.large};
    max-width: ${theme.sizes.content};
    width: 100%;
  `}
`;
