import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';

describe('<HtmlContent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlContent html={'<h1>Children</h1>'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <HtmlContent html={'<h1>Children</h1>'} />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      .c0 p {
        margin: 4.0rem 0;
      }

      .c0 a,
      .c0 a:visited,
      .c0 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c0 pre {
        background: #000000;
        padding: 2.4rem;
        font-family: monospace;
        font-size: 2.0rem;
        color: #FFFFFF;
        margin: 4.0rem 0;
        width: 100%;
        overflow-x: auto;
      }

      .c0 img {
        max-width: 100%;
      }

      .c0 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 4.0rem 0;
      }

      .c0 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c0 .image-style-side {
        float: right;
        max-width: 50%;
        margin: 2.4rem;
      }

      .c0 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c0 ul,
      .c0 ol {
        margin: 4.0rem;
      }

      .c0 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c0 table {
        width: 100%;
        border-collapse: collapse;
      }

      .c0 table td,
      .c0 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 2.0rem;
        }

        .c0 .image-style-side {
          float: none;
          max-width: 100%;
          margin: 0;
        }
      }

      <div
        class="c0"
      >
        <h1>
          Children
        </h1>
      </div>
    `);
  });
});
