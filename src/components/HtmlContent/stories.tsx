import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ea, aliquid commodi dignissimos maiores earum ratione nulla nam,
    ipsum velit, dicta quia accusamus aspernatur nisi architecto aut
    facilis ipsa! Asperiores, eaque.`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
