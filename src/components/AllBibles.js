import React from "react";
import { axiosGet } from "../bibleApi";

export class AllBibles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allBiblesData: this.props.allBiblesData
    };
  }

  getAllBiblesData = async () => {
    // https://api.scripture.api.bible/v1/bibles
    const res = await axiosGet(`/bibles`);
    this.setState({
      allBiblesData: res.data.data
    });
  };

  render() {
    return (
      <>
        <button onClick={() => this.getAllBiblesData()}>All bibles</button>
        {/* <div>{JSON.stringify(this.state.allBiblesData)}</div> */}
        {this.state.allBiblesData
          ? this.state.allBiblesData.map(_aBible => (
              <div key={_aBible.id}>{_aBible.name}</div>
            ))
          : null}
      </>
    );
  }
}
