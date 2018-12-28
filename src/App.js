import React from 'react'
import { Route } from 'react-router-dom';

import './App.css'
import * as BooksAPI from './apis/BooksAPI';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  shelfChanger = (event, book) => {
    const newShelf = event.target.value;
    const id = book.id;

    BooksAPI.update(book, newShelf)
      .then((res) => {
        this.setState((prevState) => ({
          books: prevState.books.map((book) => {
            if (book.id === id) {
              book.shelf = newShelf
            }
            return book;
          })
        }), () => this.getBooks());
      });
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books
        });
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
          <SearchPage
            books={this.state.books}
            shelfChanger={this.shelfChanger}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
