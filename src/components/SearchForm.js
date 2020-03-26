import React, {Component} from "react";
const API_KEY ='dcc9f980';

export class SearchForm extends Component{
    state = {
        inputMovie:''
    }
    _handleChange = (e)=>{
     this.setState({ inputMovie:e.target.value })
    };
    _handelSubmit = (e) =>{
      e.preventDefault()
      const { inputMovie } = this.state;
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`  )
          .then(res => res.json())
          .then(results =>{
              const { Search = [], totalResults='0' } = results;
              console.log(results ,totalResults);
              this.props.onResults(Search)
          })
    };
    render() {
        return (
            <form onSubmit={this._handelSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Movi to see"/>
                    </div>
                    <div className="control">
                        <button
                            className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}