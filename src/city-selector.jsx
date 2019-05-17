import React from 'react';

export class CitySelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {city: ''};
    }

    handleChange = (event) => {
        this.setState({city: event.target.value});
    }

    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitCity(this.state.city)
    }

render(){
    console.log(this.state)
    return(
        <form onSubmit={this.handleSubmit}>
        <label>
          City:
          <input type="text" value={this.state.city} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}
}

