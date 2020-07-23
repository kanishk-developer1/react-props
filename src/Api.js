import React, { Component } from 'react';

class Api extends Component {
  state = {
    apiData: [],
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const apiPath =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

    // api call to fetch the data
    fetch(apiPath)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ apiData: result });
      });
  }

  render() {
    const { apiData } = this.state;
    const result = apiData.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return <ul>{result}</ul>;
  }
}

export default Api;
