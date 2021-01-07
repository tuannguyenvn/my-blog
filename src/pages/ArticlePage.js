import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';


const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(articles => articles.name === name);
    const otherArticles = articleContent.filter(article => article.name !== name);

    if (!article) return <NotFoundPage />

    return(
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}

        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />         
        </>
    );
}
export default ArticlePage;