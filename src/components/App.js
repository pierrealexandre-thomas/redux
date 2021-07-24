import React from 'react';
import Form from './Form';
import ItemList from './ItemList';

class App extends React.Component {

    state = {
        articles: []
    };

    addArticle = (article) => {
        let oldArticles = this.state.articles;
        article.id = Date.now();
        let newArticles = [...oldArticles, article];
        this.setState({ articles: newArticles});
    }
    render() {
        return (
            <div>
                <h1>Liste de courses</h1>
                <Form formTitle="Ajouter des articles" addArticle={this.addArticle} />
                <ItemList articles={this.state.articles} />
            </div>
        );
    }
}

export default App;