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
      // bibleData: null
      allVersesData: null
    };
  }

  // getAVerseInfo = async () => {
  //   const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}`);
  //   this.setState({
  //     verseData: res.data.data
  //   });
  // };

  getAllVersesInfo = async () => {
    // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/chapters/LUK.5/verses
    const res = await axiosGet(
      `/bibles/${PORTUGUESE_BIBLE_ID}/chapters/${PORTUGUESE_CHAPTER_ID}/verses`
    );
    this.setState({
      allVersesData: res.data.data
    });
  };

  componentDidMount() {
    this.getAllVersesInfo();
    // this.getAllBibleInfo();
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">Master React</header>
          <div>{JSON.stringify(this.state.allVersesData)}</div>
        </div>
      </>
    );
  }
}
