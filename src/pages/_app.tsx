import { GlobalStyles } from '../styles/global-styles';
import { AppProps } from 'next/app';
import { BlogThemeProvider } from '../contexts/BlogThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </BlogThemeProvider>
  );
}

export default MyApp;
