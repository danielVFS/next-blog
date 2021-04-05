import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        srcImg={logo}
        link="/"
        text={`${blogName} - ${blogDescription}`}
      />

      {showText && (
        <Styled.Content>
          <Heading as="h2" size="small" colorDark={true}>
            {blogName}
          </Heading>

          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
