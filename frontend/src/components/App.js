import React, { Component } from 'react';
import GuestList from './GuestsList'
import CustomLayout from './Layout'

class App extends Component {
  render() {
    return (
      <div>
        <CustomLayout>
          <GuestList />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
