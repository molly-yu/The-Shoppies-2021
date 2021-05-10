import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

import SearchBar from '../components/searchbar';
import InputBar from '../components/inputbar';

describe('SearchBar', () => {
  it("render searchbar without crashing", () => {
    const props = {
      keyword:"test",
      setKeyword: jest.fn(),
      searchEnter: jest.fn()
    }
    const wrapper = shallow(<SearchBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it("should call onChange Function", () => {
    const setKeyword = jest.fn();
    const props = {
      keyword:"test",
      setKeyword: setKeyword,
      searchEnter: jest.fn()
    }
    // mock onChange
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(InputBar).simulate('change', {target: { value:'new' }});
    expect(setKeyword).toBeCalledWith('new');
  })

  it("should call searchEnter", () => {
    const setKeyword = jest.fn();
    const searchEnter = jest.fn();
    const event = { key: 'Enter', preventDefault: () => {} }
    const props = {
      keyword:"test",
      setKeyword: setKeyword,
      searchEnter: searchEnter
    }
    // mocks for this function
    jest.spyOn(event, 'preventDefault');

    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(InputBar).simulate('keypress', event);
    expect(event.preventDefault).toBeCalled();
    expect(searchEnter).toBeCalled();
  })

  it("should not call searchEnter", () => {
    const setKeyword = jest.fn();
    const searchEnter = jest.fn();
    const event = { key: 'a', preventDefault: () => {} }
    const props = {
      keyword:"test",
      setKeyword: setKeyword,
      searchEnter: searchEnter
      
    }
    // mocks for this function
    jest.spyOn(event, 'preventDefault');
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(InputBar).simulate('keypress', event);
    expect(searchEnter).not.toBeCalled();
  })

})
