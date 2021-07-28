import { createStore } from "redux";
import { Provider } from 'react-redux';
import Slider from '../pages/slider';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from "./reducers";

const store = createStore(reducer);

const SliderWithStore = () => (
  <Provider store={store}>
    <Slider />
  </Provider>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<SliderWithStore />, rootElement)

export default SliderWithStore