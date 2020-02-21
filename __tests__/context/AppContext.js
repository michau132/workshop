import { shallow } from "enzyme";
import AppService from "../../src/context/AppContext";
import React from 'react';
import apiService from '../../src/services/api';

//const apiService = jest.genMockFromModule('../../src/services/api').default;
//apiService.getUsers = Promise.resolve([ { id: 1, }, ]);
// jest.mock('../../src/services/api', () => ({
//   getRandomUsers: Promise.resolve([ { id: 1, }, ]),
//   getUsers: Promise.resolve([]),
// }));
let wrapper;
describe('Testing AppContext',  () => {
  beforeEach(() => {
    wrapper = shallow(<AppService />);
  });
  test('should get users from db', async () => {
    
    const spy = jest.spyOn(apiService, 'getUsers').mockImplementation(() => Promise.resolve({ data: [ { id: 2, }, ], }));
    await wrapper.instance().componentDidMount();
    expect(wrapper.state().users.length).toBeGreaterThan(0);
    expect(spy).toHaveBeenCalled();
  });
});