import Prism from 'prismjs';
import { useEffect } from 'react';
import * as Styled from './styles';
import { PrismWrapper } from './prism-vscode-dark';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <PrismWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />
    </PrismWrapper>
  );
};
