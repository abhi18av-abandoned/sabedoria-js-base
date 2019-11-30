import React from "react";

export class ASection extends React.Component {
  render() {
    const { getASectionData, sectionId } = this.props;
    return (
      <>
        <button onClick={() => getASectionData(sectionId)}>A section</button>
        {/* <div>{JSON.stringify(this.state.aSectionData)}</div> */}
        {this.props.aSectionData ? (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.aSectionData.content
              }}
            ></div>
          </>
        ) : null}
      </>
    );
  }
}
