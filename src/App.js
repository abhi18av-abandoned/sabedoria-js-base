import React from "react";
import { ASection } from "./components/ASection";
import {
  axiosGet,
  PORTUGUESE_BIBLE_ID,
  PORTUGUESE_SECTION_ID
} from "./bibleApi";

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

  getASectionData = async sectionId => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/sections/LUK.S9
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/sections/${sectionId}`
    );
    this.setState({
      aSectionData: res.data.data
    });
  };

  render() {
    return (
      <>
        <div className="App"></div>
        <ASection
          sectionId={"LUK.S9"}
          getASectionData={this.getASectionData}
          aSectionData={this.state.aSectionData}
        />
      </>
    );
  }
}
