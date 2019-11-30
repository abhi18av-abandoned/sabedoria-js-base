import React from "react";
import { axiosGet } from "../bibleApi";

export class ASection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aSectionData: this.props.aSectionData
    };
  }

  getaSectionData = async () => {
    // https://api.scripture.api.bible/v1/bibles
    const res = await axiosGet(`/bibles`);
    this.setState({
      aSectionData: res.data.data
    });
  };

  render() {
    return (
      <>
        <button onClick={() => this.getaSectionData()}>All bibles</button>
        {/* <div>{JSON.stringify(this.state.aSectionData)}</div> */}
        {this.state.aSectionData
          ? this.state.aSectionData.map(_aBible => (
              <div key={_aBible.id}>{_aBible.name}</div>
            ))
          : null}
      </>
    );
  }
}
