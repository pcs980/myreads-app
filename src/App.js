import React from 'react'
import './App.css'

import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf';
import SearchBar from './components/SearchBar';

const shelfs = [
  {title: 'Currently Reading', id: 'currentlyReading'},
  {title: 'Read', id: 'read'},
  {title: 'Want to Read', id: 'wantToRead'}
];

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    confirmShelfChange: true
  }

  toggleSearchBar = () => {
    this.setState((prevState) => ({
      showSearchPage: !prevState.showSearchPage
    }));
  }

  shelfChanger = (event, book) => {
    console.log('shelf changer', event.target.value);
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
          read: books.filter((book) => book.shelf === 'read'),
          currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
        }, () => console.log(this.state));
      });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <SearchBar
              toggleSearchBar={this.toggleSearchBar}/>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {
                shelfs.map((shelf) =>
                  <BookShelf
                    key={shelf.id}
                    title={shelf.title}
                    books={this.state[shelf.id]}
                    shelfChanger={this.shelfChanger}/>
                )
              }
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
