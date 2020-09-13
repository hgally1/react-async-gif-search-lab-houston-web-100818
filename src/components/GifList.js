import React, { Component } from 'react'

export class GifList extends Component {
    render() {
        console.log(this.props.gifs);
        return (
          <div>
            <ul>
              {this.props.gifs.map(gif => {
                return (
                  <li>
                    <img src={gif.images.original.url} alt="gif " />
                  </li>
                );
              })}
            </ul>
          </div>
        );
    }
}

export default GifList
