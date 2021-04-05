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

      .c1 p {
        margin: 4.0rem 0;
      }

      .c1 a,
      .c1 a:visited,
      .c1 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c1 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c1 pre {
        background: #000000;
        padding: 2.4rem;
        font-family: monospace;
        font-size: 2.0rem;
        color: #FFFFFF;
        margin: 4.0rem 0;
        width: 100%;
        overflow-x: auto;
      }

      .c1 img {
        max-width: 100%;
      }

      .c1 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 4.0rem 0;
      }

      .c1 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c1 .image-style-side {
        float: right;
        max-width: 50%;
        margin: 2.4rem;
      }

      .c1 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c1 ul,
      .c1 ol {
        margin: 4.0rem;
      }

      .c1 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c1 table {
        width: 100%;
        border-collapse: collapse;
      }

      .c1 table td,
      .c1 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 2.0rem;
        }

        .c1 .image-style-side {
          float: none;
          max-width: 100%;
          margin: 0;
        }
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
