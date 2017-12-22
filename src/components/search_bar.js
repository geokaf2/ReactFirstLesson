import React, { Component } from 'react'

//class component - used to have some record keeping
class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
        return ( 
            <div className="search-bar"> 
                <input  
                    value = { this.state.term } // The value is set on rendering not on the event, allow also initialization
                    onChange = { event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }
}


export default SearchBar;