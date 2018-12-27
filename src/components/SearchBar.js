import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  inputHandler = (event) => {
    this.setState({
      query: event.target.value
    }, () => this.searchBooks());
  }

  searchBooks = () => {
    this.props.onSearchBooks(this.state.query);
  }

  render() {
    return (
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>Close</Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            value={this.state.query}
            onChange={this.inputHandler} />
        </div>
      </div>
    );
  }
}

export default SearchBar;