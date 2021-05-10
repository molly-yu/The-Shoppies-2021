import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

import Nominations from '../components/nominations';
import Button from '../components/button';
import Icon from '../components/icon';

const movie1 = { imdbID: "1", Title: "title1", Year: "2000" };

describe('Nominations', () => {
  it("render nominations without crashing", () => {
    const props = {
        nominations: [movie1], 
        remove: jest.fn(),
        open: jest.fn()
    }
    const wrapper = shallow(<Nominations {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it("should remove nominee", () => {
    const remove = jest.fn();
    const props = {
        nominations: [movie1], 
        remove: remove,
        open: jest.fn()
    }
    const wrapper = shallow(<Nominations {...props} />);
    const button = wrapper.findWhere(b => b.is(Button) && b.prop('round') === true).first();
    button.simulate('click', {});
    expect(remove).toBeCalled();
  })

  it("should open modal", () => {
    const open = jest.fn();
    const props = {
        nominations: [movie1], 
        remove: jest.fn(),
        open: open
    }
    const wrapper = shallow(<Nominations {...props} />);
    const icon = wrapper.find(Icon).first();
    icon.simulate('click', {});
    expect(open).toBeCalled();
  })

 })