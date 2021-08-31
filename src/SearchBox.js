import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <input type='search' placeholder='Search Robots' onChange={this.props.searchChange}/> 
        );
    }
}

export default SearchBox;