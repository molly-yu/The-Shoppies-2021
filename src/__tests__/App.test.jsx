import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Home from '../pages/home';

it("renders without crashing", () => {
    shallow(<App />);
  });

it("renders home page", () => {
    const wrapper = shallow(<App />);
    const welcome = <Home/>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });