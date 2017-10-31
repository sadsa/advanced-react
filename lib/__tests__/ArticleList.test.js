import React from 'react';
import ArticleList from '../components/ArticleList';
import { data } from '../testData';
import ReactTestRenderer from 'react-test-renderer';

const testProps = {
  articles: [
    { id: 'a' },
    { id: 'b' }
  ],
  actions: {
    lookupAuthorById: jest.fn(() => data.authors[0] )
  }
};

describe('Article List Component', () => {
  it('should render correctly', () => {
    const domTree = ReactTestRenderer.create(
      <ArticleList {...testProps} />
    ).toJSON();

    expect(domTree).toMatchSnapshot();
    expect(domTree.children.length).toBeGreaterThan(0);
  });
});