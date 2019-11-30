import React from "react";
import { ASection } from "./components/ASection";
import {
  axiosGet,
  PORTUGUESE_BIBLE_ID,
  PORTUGUESE_BOOK_ID,
  PORTUGUESE_SECTION_ID
} from "./bibleApi";

//=============================
// App
//=============================

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // BIBLES
      allBiblesData: null,
      aBibleData: null,
      // BOOKS
      allBooksData: null,
      aBookData: null,
      // CHAPTERS
      allChaptersData: null,
      aChapterData: null,
      // PASSAGES
      allPassagesData: null,
      aPassageData: null,
      // SECTIONS
      aSectionData: null,
      allSectionsData: null,
      allSectionsId: null,
      currentSectionId: null,
      // VERSES
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

  getAllSectionsIds = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK/sections
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/books/${PORTUGUESE_BOOK_ID}/sections`
    );
    this.setState({
      allSectionsId: res.data.data.map(data => data.id)
    });
  };

  setRandomCurrentSectionId = async () => {
    await this.setState(
      {
        currentSectionId: this.state.allSectionsId[
          Math.floor(Math.random() * this.state.allSectionsId.length)
        ]
      },
      () => this.getASectionData(this.state.currentSectionId)
    );
  };

  componentDidMount() {
    this.getAllSectionsIds();
  }

  render() {
    return (
      <>
        <div className="App"></div>
        <ASection
          initialSectionId={"LUK.S9"}
          currentSectionId={this.state.currentSectionId}
          allSectionsId={this.state.allSectionsId}
          getASectionData={this.getASectionData}
          aSectionData={this.state.aSectionData}
          setRandomCurrentSectionId={this.setRandomCurrentSectionId}
        />
      </>
    );
  }
}
