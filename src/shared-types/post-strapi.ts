import { PostProps } from '../components/Post';
import { Tag } from './tag';

export type PostStrapi = PostProps & {
  tags: Tag[];
  slug: string;
};
