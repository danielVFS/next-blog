import Link from 'next/link';
import { Tag } from '../../shared-types/tag';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: Tag[];
};

export const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      tags:
      {tags.map((tag) => (
        <span key={tag.id}>
          <Link href={`/tag/${tag.slug}`}>
            <a>{tag.displayName}</a>
          </Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
