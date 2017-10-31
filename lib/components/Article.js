import React from 'react';

function convertToStandardDate (date) {
  const convertedDate = new Date(date);
  return convertedDate.toDateString();
}

const Article = ({article, actions}) => {
  const author = actions.lookupAuthorById(article.authorId);
  return (
    <div>
      <div>{article.title}</div>
      <div>{convertToStandardDate(article.date)}</div>
      <div>
        <a href={author.website}>{author.firstName} {author.lastName}</a>
      </div>
      <div>{article.body}</div>
    </div>
  ); 
};

export default Article;
