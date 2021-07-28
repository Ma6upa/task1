import React from 'react';
import { Redirect } from 'react-router';



class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isButtonPressed: false,
    }
  }

  slider = () => {
    this.setState({ isButtonPressed: true })
  }

  render() {
    return (
      <div>
        {this.state.isButtonPressed ? <Redirect to="/slider"></Redirect> :
          <div>
            HELLO
            <button onClick={this.slider}>Слайдер</button>
          </div>
        }
      </div>
    )
  }
}

export default Main