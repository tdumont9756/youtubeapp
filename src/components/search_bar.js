import React, {Component} from 'react';  //this is es6 syntax.  you are taking the react class and creating a variable of Component to extend from

class Searchbar extends Component{

  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  render(){
    return(
      <div className="search-bar">
         <input
         value= {this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term:term});
    this.props.onSearchTermChange(term);
  }
}

export default Searchbar;
