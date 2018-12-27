import React from 'react';
import { Link } from 'react-router-dom';

import BookShelf from '../components/BookShelf';

const shelfs = [
  {title: 'Currently Reading', id: 'currentlyReading'},
  {title: 'Read', id: 'read'},
  {title: 'Want to Read', id: 'wantToRead'}
];

const HomePage = props => {

  const getBooksByShelf = (shelf) => (
    props.books ? props.books.filter((book) => book.shelf === shelf) : []
  )

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        {
          shelfs.map((shelf) =>
            <BookShelf
              key={shelf.id}
              title={shelf.title}
              books={getBooksByShelf(shelf.id)}
              shelfChanger={props.shelfChanger}/>
          )
        }
      </div>
      <div className='open-search'>
        <Link to='/search' className='open-search-link'>Add a book</Link>
      </div>
    </div>
  );

}
export default HomePage;