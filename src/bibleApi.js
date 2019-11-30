import axios from "axios";
import { AUTH_TOKEN } from "./secrets";

export const PORTUGUESE_BIBLE_ID = "90799bb5b996fddc-01";
export const PORTUGUESE_BOOK_ID = "LUK";
export const PORTUGUESE_CHAPTER_ID = "LUK.5";
export const PORTUGUESE_PASSAGE_ID = "LUK.5.1";
export const PORTUGUESE_SECTION_ID = "LUK.S9";
export const PORTUGUESE_VERSE_ID = "LUK.5.3";

export const axiosGet = axios.create({
  baseURL: "https://api.scripture.api.bible/v1",
  headers: {
    "api-key": AUTH_TOKEN
  }
});

export const getABibleData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01
  const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}`);
  this.setState({
    aBibleData: res.data.data
  });
};

export const getAllBiblesData = async () => {
  // https://api.scripture.api.bible/v1/bibles
  const res = await axiosGet(`/bibles`);
  this.setState({
    allBiblesData: res.data.data
  });
};

export const getABookData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK
  const res = await axiosGet(
    `/bibles/${PORTUGUESE_BIBLE_ID}/books/${PORTUGUESE_BOOK_ID}`
  );
  this.setState({
    aBookData: res.data.data
  });
};

export const getAllBooksData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books
  const res = await axiosGet(`/bibles/${PORTUGUESE_BIBLE_ID}/books`);
  this.setState({
    allBooksData: res.data.data
  });
};

export const getAChapterData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/chapters/LUK.5
  const res = await axiosGet(
    `/bibles/${PORTUGUESE_BIBLE_ID}/chapters/${PORTUGUESE_CHAPTER_ID}`
  );
  this.setState({
    aChapterData: res.data.data
  });
};

export const getAllChaptersData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK/chapters
  const res = await axiosGet(
    `/bibles/${PORTUGUESE_BIBLE_ID}/books/${PORTUGUESE_BOOK_ID}/chapters`
  );
  this.setState({
    allChaptersData: res.data.data
  });
};

export const getAPassageData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/passages/LUK.5.1
  const res = await axiosGet(
    `/bibles/${PORTUGUESE_BIBLE_ID}/passages/${PORTUGUESE_PASSAGE_ID}`
  );
  this.setState({
    aPassageData: res.data.data
  });
};

export const getASectionData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/sections/LUK.S9
  const res = await axiosGet(
    `/bibles/${PORTUGUESE_BIBLE_ID}/sections/${PORTUGUESE_SECTION_ID}`
  );
  this.setState({
    aSectionData: res.data.data
  });
};

export const getAllSectionsData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/books/LUK/sections
  const res = await axiosGet(
    `/bibles/${PORTUGUESE_BIBLE_ID}/books/${PORTUGUESE_BOOK_ID}/sections`
  );
  this.setState({
    allSectionsData: res.data.data
  });
};

export const getAVerseData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/verses/LUK.5.3
  const res = await axiosGet(
    `/bibles/${PORTUGUESE_BIBLE_ID}/verses/${PORTUGUESE_VERSE_ID}`
  );
  this.setState({
    aVerseData: res.data.data
  });
};

export const getAllVersesData = async () => {
  // https://api.scripture.api.bible/v1/bibles/90799bb5b996fddc-01/chapters/LUK.5/verses
  const res = await axiosGet(
    `/bibles/${PORTUGUESE_BIBLE_ID}/chapters/${PORTUGUESE_CHAPTER_ID}/verses`
  );
  this.setState({ allVersesData: res.data.data });
};
