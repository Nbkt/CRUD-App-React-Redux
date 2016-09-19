import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value});
    this.props.onSearchTermChange(event.target.value);
  }

  render() {
    return (

      <div>
        <form className="form-inline">
          <div className="form-group">
            <div className="search-bar">
              <input
              value={this.state.term}
              placeholder="Search"
              className="form-control"
              onChange={this.onInputChange} />
            </div>
          </div>
        </form>

      </div>

    );
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired
};

export default SearchBar;
