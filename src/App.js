import React from "react";
import axios from "axios";
import { AUTH_TOKEN } from "./secrets";

//=============================
// constants
//=============================

//=============================
// utils
//=============================

//=============================
// hooks
//=============================

//=============================
// styles
//=============================

//=============================
// services
//=============================

const axiosGet = axios.create({
  baseURL: "https://api.scripture.api.bible/v1",
  headers: {
    "api-key": AUTH_TOKEN
  }
});

//=============================
// components
//=============================

//=============================
// containers
//=============================

//=============================
// App
//=============================

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bibleData: null
    };
  }

  getPortugueseBibleInfo = async () => {
    const res = await axiosGet("/bibles/90799bb5b996fddc-01");
    this.setState({
      bibleData: res.data.data
    });
  };

  componentDidMount() {
    this.getPortugueseBibleInfo();
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">Master React</header>
          <div>{JSON.stringify(this.state.bibleData)}</div>
        </div>
      </>
    );
  }
}
