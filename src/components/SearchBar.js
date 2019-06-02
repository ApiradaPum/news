import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.hunndleSearchClick = this.hunndleSearchClick.bind(this);
    }
    
    handleSubmitForm(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    hunndleSearchClick(){
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <i onClick={this.hunndleSearchClick} className="fa fa-search" />
                    <input value={this.state.term} onChange={this.handleTermChange} className="search-bar" placeholder="search" />
                </form>
            </div>
        );        
    }
}

export default SearchBar;