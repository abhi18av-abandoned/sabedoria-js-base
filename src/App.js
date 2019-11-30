import React from "react";
import { AllBibles } from "./components/AllBibles";

//=============================
// App
//=============================

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allBiblesData: null,
      aBibleData: null,
      allBooksData: null,
      aBookData: null,
      allChaptersData: null,
      aChapterData: null,
      allPassagesData: null,
      aPassageData: null,
      aSectionData: null,
      allSectionsData: null,
      allVersesData: null,
      aVerseData: null
    };
  }

  render() {
    return (
      <>
        <div className="App"></div>
        <AllBibles allBiblesData={this.state.allBiblesData} />
      </>
    );
  }
}
