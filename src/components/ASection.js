import React from "react";

export class ASection extends React.Component {
  render() {
    const {
      getASectionData,
      currentSectionId,
      initialSectionId,
      setRandomCurrentSectionId
    } = this.props;
    return (
      <>
        <button onClick={() => setRandomCurrentSectionId()}>
          Random Section
        </button>
        <button onClick={() => getASectionData(initialSectionId)}>
          Initial section
        </button>
        {/* <div>{JSON.stringify(this.state.aSectionData)}</div> */}
        {currentSectionId ? (
          this.props.aSectionData ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.aSectionData.content
                }}
              ></div>
            </>
          ) : null
        ) : this.props.aSectionData ? (
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
