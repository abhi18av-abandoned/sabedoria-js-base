import React from "react";
import axios from "axios";
import { AUTH_TOKEN } from "./secrets";

//=============================
// constants
//=============================

const PORTUGUESE_BIBLE_ID = "90799bb5b996fddc-01";
const PORTUGUESE_BOOK_ID = "LUK";
const PORTUGUESE_CHAPTER_ID = "LUK.5";
const PORTUGUESE_PASSAGE_ID = "LUK.5.1";
const PORTUGUESE_SECTION_ID = "LUK.S9";
const PORTUGUESE_VERSE_ID = "LUK.5.3";

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

  parseHtml = HTMLContent => {
    // NOTE HTML parsing solutions for extrating or transforming fetched HTML into material design css
    let parser = new DOMParser();
    let doc = parser.parseFromString(HTMLContent, "text/html");
    console.log(doc.body);
  };

  getABibleData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01
    const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}`);
    this.setState({
      aBibleData: res.data.data
    });
  };

  getAllBiblesData = async () => {
    // https://api.scripture.api.bible/v1/bibles
    const res = await axiosGet(`/bibles`);
    this.setState({
      allBiblesData: res.data.data
    });
  };

  getABookData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/books/${PORTUGUESE_BOOK_ID}`
    );
    this.setState({
      aBookData: res.data.data
    });
  };

  getAllBooksData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books
    const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}/books`);
    this.setState({
      allBooksData: res.data.data
    });
  };

  getAChapterData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/chapters/LUK.5
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/chapters/${PORTUGUESE_CHAPTER_ID}`
    );
    this.setState({
      aChapterData: res.data.data
    });
  };

  getAllChaptersData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK/chapters
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/books/${PORTUGUESE_BOOK_ID}/chapters`
    );
    this.setState({
      allChaptersData: res.data.data
    });
  };

  getAPassageData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/passages/LUK.5.1
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/passages/${PORTUGUESE_PASSAGE_ID}`
    );
    this.setState({
      aPassageData: res.data.data
    });
  };

  getASectionData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/sections/LUK.S9
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/sections/${PORTUGUESE_SECTION_ID}`
    );
    this.setState({
      aSectionData: res.data.data
    });
  };

  getAllSectionsData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK/sections
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/books/${PORTUGUESE_BOOK_ID}/sections`
    );
    this.setState({
      allSectionsData: res.data.data
    });
  };

  getAVerseData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/verses/LUK.5.3
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/verses/${PORTUGUESE_VERSE_ID}`
    );
    this.setState({
      aVerseData: res.data.data
    });

    // this.parseHtml(this.state.aVerseData.content);
  };

  getAllVersesData = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/chapters/LUK.5/verses
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/chapters/${PORTUGUESE_CHAPTER_ID}/verses`
    );
    this.setState({ allVersesData: res.data.data });
  };

  componentDidMount() {
    // this.getAVerseData();
    // this.getAllVersesData();
    // this.getAllBibleData();
  }

  render() {
    return (
      <>
        <div className="App">
          <button onClick={() => this.getAllBiblesData()}>All bibles</button>
          <div>{JSON.stringify(this.state.allBiblesData)}</div>

          <button onClick={() => this.getABibleData()}>A bible</button>
          <div>{JSON.stringify(this.state.aBibleData)}</div>

          <button onClick={() => this.getAllBooksData()}>All books</button>
          <div>{JSON.stringify(this.state.allBooksData)}</div>

          <button onClick={() => this.getABookData()}>A book</button>
          <div>{JSON.stringify(this.state.aBookData)}</div>

          <button onClick={() => this.getAllChaptersData()}>
            All chapters
          </button>
          <div>{JSON.stringify(this.state.allChaptersData)}</div>

          <button onClick={() => this.getAChapterData()}>A chapter</button>
          <div>{JSON.stringify(this.state.aChapterData)}</div>

          <button onClick={() => this.getAllChaptersData()}>
            All chapters
          </button>
          <div>{JSON.stringify(this.state.allChaptersData)}</div>

          <button onClick={() => this.getAPassageData()}>A passage</button>
          <div>{JSON.stringify(this.state.aPassageData)}</div>

          <button onClick={() => this.getASectionData()}>A section</button>
          <div>{JSON.stringify(this.state.aSectionData)}</div>

          <button onClick={() => this.getAllSectionsData()}>
            All sections
          </button>
          <div>{JSON.stringify(this.state.allSectionsData)}</div>

          <button onClick={() => this.getAllVersesData()}>All verses</button>
          <div>{JSON.stringify(this.state.allVersesData)}</div>

          <button onClick={() => this.getAVerseData()}>A verse</button>
          <div>{JSON.stringify(this.state.aVerseData)}</div>

          {/* {this.state.aVerseData ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.aVerseData.content
                }}
              ></div>
            </>
          ) : null} */}
        </div>
      </>
    );
  }
}
