import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

import props from './mock';

describe('<Header />', () => {
  it('should render an image, a heading, a text', () => {
    renderTheme(<Header {...props} showText={undefined} />);

    expect(
      screen.getByRole('heading', { name: props.blogName }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Daniel Vitor/i })).toHaveAttribute(
      'src',
      props.logo,
    );
    expect(screen.getByText(props.blogDescription)).toBeInTheDocument();
  });

  it('should render image only', () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(
      screen.queryByRole('heading', { name: props.blogName }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Daniel Vitor/i })).toHaveAttribute(
      'src',
      props.logo,
    );
    expect(screen.queryByText(props.blogDescription)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
