import { Meta, Story } from '@storybook/react/types-6-0';
import { PostGrid, PostGridProps } from '.';
import mock from './mock';

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostGridProps>;

export const WithPosts: Story<PostGridProps> = (args) => {
  return (
    <div>
      <PostGrid {...args} />
    </div>
  );
};

export const WithoutPosts: Story<PostGridProps> = () => {
  return (
    <div>
      <PostGrid />
    </div>
  );
};
