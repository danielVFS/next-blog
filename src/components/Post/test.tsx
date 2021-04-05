import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import { Post, PostProps } from '.';
import mock from './mock';
import { formatDate } from '../../utils/format-date';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: props.cover.alternativeText }),
    ).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
  });
});
