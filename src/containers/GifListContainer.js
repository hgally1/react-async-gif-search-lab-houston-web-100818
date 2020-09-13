import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export class GifListContainer extends Component {

    constructor() {
        super()
    
        this.state = {
             gifs: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    //fetch data and store first 3 gifs from response in component (setState) 
    //pass this data down to GifList as a prop
    fetchData = searchTerm => {
        fetch(
          `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
        )
          .then(response => response.json())
          
          .then(gifs => {
            this.setState({
              gifs: gifs.data.slice(0, 3)
            })
          })
    }


    
    render() {
        return (
            <div>
                {/* render a `<GifSearch />` component that renders the form. pass down a submit handler function to `<GifSearch />` as a prop. */}
                <GifSearch fetchData={this.fetchData} />
                {/* pass fetch data down to GifList as a prop */}
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default GifListContainer
