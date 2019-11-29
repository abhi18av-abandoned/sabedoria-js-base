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

// getABibleInfo = async () => {
// https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01
//   const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

// getAllBibleInfo = async () => {
//  https://api.scripture.api.bible/v1/bibles
//   const res = await axiosGet(`/bibles`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

// getABookInfo = async () => {
//   const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

// getAllBooksInfo = async () => {
// https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books
//   const res = await axiosGet(`/bibles`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

// getAChapterInfo = async () => {
//   const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

// getAllChaptersInfo = async () => {
// https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK/chapters
//   const res = await axiosGet(`/bibles`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

// getAPassageInfo = async () => {
// https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/passages/LUK.5.1
//   const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

// getASectionInfo = async () => {
//   const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

// getAllSectionsInfo = async () => {
// https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK/sections
//   const res = await axiosGet(`/bibles`);
//   this.setState({
//     bibleData: res.data.data
//   });
// };

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
      // bibleData: null,
      allVersesData: null,
      aVerseData: null
    };
  }

  getAVerseInfo = async () => {
    //api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/verses/LUK.5.2
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/verses/${PORTUGUESE_VERSE_ID}`
    );
    this.setState({
      aVerseData: res.data.data
    });

    console.log(this.state.aVerseData.content);

    // NOTE HTML parsing solutions for extrating or transforming fetched HTML into material design css
    let parser = new DOMParser();
    let doc = parser.parseFromString(
      this.state.aVerseData.content,
      "text/html"
    );
    console.log(doc.body);
  };

  getAllVersesInfo = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/chapters/LUK.5/verses
    const res = axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/chapters/${PORTUGUESE_CHAPTER_ID}/verses`
    );
    await this.setState(() => {
      return { allVersesData: res.data.data };
    });
  };

  componentDidMount() {
    // this.getAVerseInfo();
    // this.getAllVersesInfo();
    // this.getAllBibleInfo();
  }

  render() {
    return (
      <>
        <div className="App">
          <button onClick={() => this.getAVerseInfo()}>Verse of the day</button>
          {this.state.aVerseData ? (
            <>
              {/* <div>{JSON.stringify(this.state.aVerseData.id)}</div> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.aVerseData.content
                }}
              ></div>
            </>
          ) : null}

          {/* <div>{JSON.stringify(this.state.allVersesData)}</div> */}
        </div>
      </>
    );
  }
}
