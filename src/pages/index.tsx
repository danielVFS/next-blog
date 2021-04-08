import { useEffect } from 'react';
import { loadPosts } from '../api/load-posts';

export default function Index() {
  useEffect(() => {
    loadPosts({
      authorSlug: 'daniel-vitor',
    }).then((r) => console.log(r));
  }, []);

  return <h1>Hello World</h1>;
}
