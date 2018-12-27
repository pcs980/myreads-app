import React from 'react'
import { Route } from 'react-router-dom';

import './App.css'
import * as BooksAPI from './BooksAPI'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    confirmShelfChange: true
  }

  shelfChanger = (event, book) => {
    console.log('shelf changer', event.target.value, book);
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books
        }, () => console.log(this.state));
      });
  }

  render() {
    return (
      <div className="app">
        <Route path='/' exact render={() => (
          <HomePage
            shelfChanger={this.shelfChanger}
            books={this.state.books} />
        )} />
        <Route path='/search' render={() => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp
