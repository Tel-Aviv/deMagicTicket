// @flow
import React from 'react';
import ReactQueryParams from 'react-query-params';
import BusinessCard from './BusinessCard.jsx';

const baseUrl = 'https://northeurope.api.cognitive.microsoft.com/face/v1.0/'
const largeFaceListId = 11;

type State = {
  userData: {}
}

type Props = {

}

class App extends ReactQueryParams<Props, State>{

  state = {
    userData: {}
  }

  async componentDidMount() {

    const faceId = this.queryParams.faceId;

    const res = await fetch(`${baseUrl}largefacelists/${largeFaceListId}/persistedfaces/${faceId}`, {
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
