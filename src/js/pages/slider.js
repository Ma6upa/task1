import React from 'react';
import { connect } from 'react-redux';
import { changeValue } from '../redux/actions';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { variable: 'test' }
    console.log(this.state.variable)
  }

  handleChangeValue = () => {
    this.props.changeValue(this.state.variable)
    console.log(this.props.changeValue(this.state.variable).payload.variable)
  }

  render() {
    this.handleChangeValue()
    return (
      <h1>
        хд
      </h1>
    )
  }
}

export default connect(null, { changeValue })(Slider)