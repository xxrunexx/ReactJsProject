import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi`)
      .then(res => {
        const isiData = res.data;
        console.log("isiData : ", res.data)
        this.setState({ isiData });
      })
  }

  render() {
    return (
      <ul>
        {/* { this.state.isiData.map(isiData => <li>{isiData}</li>)} */}
      </ul>
    )
  }
}