// @flow
import React from 'react';
import BusinessCard from './BusinessCard.jsx';

const baseUrl = 'https://northeurope.api.cognitive.microsoft.com/face/v1.0/'
const largeFaceListId = 11;

type State = {
  userData: {}
}

type Props = {

}

class App extends React.Component<Props, State>{

  state = {
    userData: {}
  }

  async componentDidMount() {

    const res = await fetch(`${baseUrl}largefacelists/${largeFaceListId}/persistedfaces/00dd16a2-76f5-4596-9368-0c2ab47b0781`, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': '91c9316d38044714b15eb630c1b6738a'
      }
    });
    const json = await res.json();
    const userData = JSON.parse(json.userData);
    this.setState({
      userData: userData
    });

  }

  render() {
    return (
      <BusinessCard data={this.state.userData} />
    )
  }

}

export default App;
