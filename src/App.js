import React from 'react'
import { Route } from 'react-router-dom';

import './App.css'
import * as BooksAPI from './BooksAPI'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Ask before shelf changing.
     */
    confirmShelfChange: true
  }

  shelfChanger = (event, bookId) => {
    const newShelf = event.target.value;
    console.log('shelf changer', newShelf, bookId);
    this.setState((prevState) => ({
      books: prevState.books.map((book) => {
        if (book.id === bookId) {
          book.shelf = newShelf
        }
        return book;
      })
    }));
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
      <div className='app'>
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
