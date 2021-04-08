import { Meta, Story } from '@storybook/react/types-6-0';
import { PageNotFound } from '.';

export default {
  title: 'PageNotFound',
  component: PageNotFound,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <PageNotFound {...args} />
    </div>
  );
};
