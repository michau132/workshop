import React from 'react';
import { shallow } from "enzyme";
import App from "../../src/components/App";
import toJson from 'enzyme-to-json';

let cmp;
describe('<App /> component', () => {
  beforeEach(() => {
    cmp = shallow(<App.WrappedComponent />);
  });
  test('should render', () => {
    
    expect(cmp).toBeDefined();
  });
  
  test('should create snapshot', () => {
    const tree = toJson(cmp);
    expect(tree).toMatchSnapshot();

  });

  test('should update App state', () => {
    cmp.find('[data-test="icon-button"]').simulate('click');
    expect(cmp.state.drawerOpen).toBeFalsy();
  });
  
});
