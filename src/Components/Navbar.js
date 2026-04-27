import React from 'react';

class Navbar extends React.Component{
    // Constructor to initialize state
    constructor(props) {
        super(props);
        // searchText stores what user types in the search box
        this.state = { searchText: '' };
    }

    // Handle search input - update state when user types
    handleSearch = (e) => {
        const searchText = e.target.value;
        // Update component state with user input
        this.setState({ searchText });
        // Send search text to parent App component
        this.props.onSearch(searchText);
    }
    
    render(){
        return (
            <div className="nav">
                <div className="search-container">
                    {/* Search input - fires handleSearch whenever user types */}
                    <input 
                        onChange={this.handleSearch} 
                        placeholder="Search movies..."
                        value={this.state.searchText}
                    />
                    <button id="search-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default Navbar;