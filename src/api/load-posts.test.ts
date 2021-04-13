import request from 'graphql-request';
import config from '../config';
import { defaultLoadPostsVariables, loadPosts } from './load-posts';

jest.mock('graphql-request');

jest.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'GET_POSTS',
  };
});

describe('<load-posts/>', () => {
  it('should render request with default variables', async () => {
    await loadPosts();

    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'GET_POSTS',
      defaultLoadPostsVariables,
    );
  });

  it('should render request with custom variables', async () => {
    await loadPosts({
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });

    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'GET_POSTS', {
      ...defaultLoadPostsVariables,
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });
  });
});
