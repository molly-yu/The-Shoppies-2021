import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

import SearchResults from '../components/searchresults';
import Button from '../components/button';
import Icon from '../components/icon';

const movie1 = { imdbID: "1", Title: "title1", Year: "2000" };
const movie2 = { imdbID: "2", Title: "title2", Year: "2001" };
const movie3 = { imdbID: "3", Title: "title3", Year: "2002" };
const movie4 = { imdbID: "4", Title: "title4", Year: "2003" };
const movie5 = { imdbID: "5", Title: "title5", Year: "2004" };

describe('SearchResults', () => {
  it("render searchresults without crashing", () => {
    const props = {
        results: [movie1,movie2,movie3,movie4,movie5], 
        nominated: [],
        add: jest.fn(),
        open: jest.fn()
    }
    const wrapper = shallow(<SearchResults {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it("disable all nominate buttons", () => {
    const props = {
        results: [movie1,movie2,movie3,movie4,movie5], 
        nominated: [movie1,movie2,movie3,movie4,movie5],
        add: jest.fn(),
        open: jest.fn()
    }
    const wrapper = shallow(<SearchResults {...props} />);
    const button = wrapper.findWhere(b => b.is(Button) && b.prop('disabled') === true);
    expect(button.length).toEqual(5);
  })

  it("disable a nominate button", () => {
    const props = {
        results: [movie1,movie2,movie3,movie4,movie5], 
        nominated: [movie1],
        add: jest.fn(),
        open: jest.fn()
    }
    const wrapper = shallow(<SearchResults {...props} />);
    const disabledButton = wrapper.findWhere(b => b.is(Button) && b.prop('disabled') === true);
    const enabledButton = wrapper.findWhere(b => b.is(Button) && b.prop('disabled') === false);
    expect(disabledButton.length).toEqual(1);
    expect(enabledButton.length).toEqual(4);
    
  })

  it("should add nominee", () => {
    const add = jest.fn();
    const props = {
        results: [movie1,movie2,movie3,movie4,movie5], 
        nominated: [movie1],
        add: add,
        open: jest.fn()
    }
    const wrapper = shallow(<SearchResults {...props} />);
    const button = wrapper.findWhere(b => b.is(Button) && b.prop('round') === true).first();
    button.simulate('click', {});
    expect(add).toBeCalled();
  })

  it("should open modal", () => {
    const open = jest.fn();
    const props = {
        results: [movie1,movie2,movie3,movie4,movie5], 
        nominated: [movie1],
        add: jest.fn(),
        open: open
    }
    const wrapper = shallow(<SearchResults {...props} />);
    const icon = wrapper.find(Icon).first();
    icon.simulate('click', {});
    expect(open).toBeCalled();
  })

 })