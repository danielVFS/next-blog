import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate, BaseTemplateProps } from '.';
import mock from './mock';

const props: BaseTemplateProps = mock;
describe('<BaseTemplate />', () => {
  it('should render base elements', () => {
    renderTheme(<BaseTemplate {...props} />);

    expect(
      screen.getByRole('img', {
        name: 'Daniel Vitor - Uma descrição sobre o blog',
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(screen.getByText('O texto da footer')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);
    expect(container).toMatchSnapshot();
  });
});
