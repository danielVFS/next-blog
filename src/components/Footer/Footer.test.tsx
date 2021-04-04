import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render Footer', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Hello</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
        font-size: 1.6rem;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
      }

      .c1 {
        font-size: 2.4rem;
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1"
          >
            <h1>
              Hello
            </h1>
          </div>
        </div>
      </div>
    `);
  });
});
