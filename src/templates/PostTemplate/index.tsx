import * as Styled from './styles';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../BaseTemplate';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
    </BaseTemplate>
  );
};