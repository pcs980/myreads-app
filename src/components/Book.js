import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import BookShelfChanger from './BookShelfChanger';

const Book = props => {
  const { title, authors, shelf, averageRating, ratingsCount, imageLinks } = props.book;

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
        {imageLinks &&
          <img className='book-cover' src={imageLinks.thumbnail} alt={title}/>
        }
          <BookShelfChanger
            shelfChanger={props.shelfChanger}
            book={props.book}
            shelf={shelf}/>
        </div>
        <div className='book-title'>{title}</div>
        {authors &&
          authors.map((author) => <div key={author} className='book-authors'>{author}</div>)
        }
        {averageRating &&
          <div className='book-rating'>
            <StarRatings
              rating={averageRating}
              starRatedColor='black'
              starDimension='12px'
              starSpacing='1px'
              numberOfStars={5}
              name='rating'/>({ratingsCount})
          </div>
        }
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfChanger: PropTypes.func.isRequired
}

export default Book;

/*
Example of book item

allowAnonLogging: true
authors: Array[1]
  0: 'William E. Shotts, Jr.'
averageRating: 4
canonicalVolumeLink: 'https://market.android.com/details?id=book-nggnmAEACAAJ'
categories: Array[1]
  0: 'COMPUTERS'
contentVersion: '1.2.2.0.preview.2'
description: 'You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very f…'
id: 'nggnmAEACAAJ'
imageLinks: {…}
  smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
  thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
industryIdentifiers: Array[2]
  0: {…}
    identifier: '9781593273897'
    type: 'ISBN_13'
  1: {…}
    identifier: '1593273894'
    type: 'ISBN_10'
infoLink: 'https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api'
language: 'en'
maturityRating: 'NOT_MATURE'
pageCount: 480
panelizationSummary: {…}
  containsEpubBubbles: false
  containsImageBubbles: false
previewLink: 'http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api'
printType: 'BOOK'
publishedDate: '2012'
publisher: 'No Starch Press'
ratingsCount: 2
readingModes: {…}
  image: false
  text: true
shelf: 'currentlyReading'
subtitle: 'A Complete Introduction'
title: 'The Linux Command Line'
*/