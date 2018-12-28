import React from 'react'
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        }), () => {
          console.log('toasting???');
          this.notify();
          this.getBooks();
        });
      });
  }

  componentDidMount() {
    this.getBooks();
  }

  notify = () => toast.info('Book moved sucessfully!', {
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnHover: false
  });

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
        <ToastContainer />
      </div>
    )
  }
}

export default BooksApp
