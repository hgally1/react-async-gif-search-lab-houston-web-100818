import React, { Component } from 'react'

export class GifSearch extends Component {
    constructor() {
        super();
        this.state = {
          searchValue: ""
        };
      }
    
      render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                      e.preventDefault();
                      this.props.fetchData(this.state.searchValue);
                    }}
                    >
                    <label>Enter a Search Term: </label>
                    <input
                     id="gif-search"
                     value={this.state.searchValue}
                     onChange={e => {
                      e.persist();
                      this.setState({
                        searchValue: e.target.value
                      });
                     }}
                    />
                    <button type="submit">Find GIFs</button>
                </form>
                
            </div>
        );
    }
}

export default GifSearch
