import React, { Component, createContext } from 'react';
import apiService from '../services/api';

const AppContext = createContext();

export const  AppConsumer = AppContext.Consumer;

export default class AppService extends Component {
  constructor() {
    super();
    this.state = {
      users: 0,
      isFetchingUsers: false,
      error: false,
    };
  }

  async componentDidMount() {
    try {
      this.setState({ isFetchingUsers: true, });
      const users = await apiService.getUsers();
      if(users.data.length) {
        this.setState({ isFetchingUsers: false, users: users.data, });
        return;
      }
      const response = await apiService.getRandomUsers();
      response.data.results.forEach(({ id, ...rest }) => {
        apiService.sendUsers(rest);
      });
      
      this.setState({ isFetchingUsers: false, users: response.data, });
    } catch {
      this.setState({ error: true, });
    }
    
  }
  render() {
    return (
      <AppContext.Provider value={{ ...this.state, }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

