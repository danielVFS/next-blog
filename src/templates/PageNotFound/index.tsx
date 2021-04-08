import * as Styled from './styles';

export const PageNotFound = () => {
  return (
    <Styled.Wrapper>
      <img src="/assets/images/404.svg" alt="404 " />
      <p>Uh-oh, página não encontrada...</p>
      <a href="/">Voltar para a tela inicial</a>
    </Styled.Wrapper>
  );
};
