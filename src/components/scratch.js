<button onClick={() => this.getABibleData()}>A bible</button>
{/* <div>{JSON.stringify(this.state.aBibleData)}</div> */}
{/* {this.state.allBiblesData
  ? this.state.allBiblesData.map(_aBible => <div>{_aBible.name}</div>)
  : null} */}
<button onClick={() => this.getAllBooksData()}>All books</button>
{/* <div>{JSON.stringify(this.state.allBooksData)}</div> */}
{this.state.allBooksData
  ? this.state.allBooksData.map(_aBook => (
      <div key={_aBook.id}>{_aBook.name}</div>
    ))
  : null}
<button onClick={() => this.getABookData()}>A book</button>
{/* <div>{JSON.stringify(this.state.aBookData)}</div> */}
{/* {this.state.allBiblesData
  ? this.state.allBiblesData.map(_aBible => <div>{_aBible.name}</div>)
  : null} */}
<button onClick={() => this.getAllChaptersData()}>
  All chapters
</button>
{/* <div>{JSON.stringify(this.state.allChaptersData)}</div> */}
{this.state.allChaptersData
  ? this.state.allChaptersData.map(_aChapter => (
      <div key={_aChapter.id}>{_aChapter.reference}</div>
    ))
  : null}
<button onClick={() => this.getAChapterData()}>A chapter</button>
{/* <div>{JSON.stringify(this.state.aChapterData)}</div> */}
{/* {this.state.allBiblesData
  ? this.state.allBiblesData.map(_aBible => <div>{_aBible.name}</div>)
  : null} */}
<button onClick={() => this.getAPassageData()}>A passage</button>
{/* <div>{JSON.stringify(this.state.aPassageData)}</div> */}
{/* {this.state.allBiblesData
  ? this.state.allBiblesData.map(_aBible => <div>{_aBible.name}</div>)
  : null} */}
{this.state.allSectionsData
  ? this.state.allSectionsData.map(_aSection => (
      <div key={_aSection.id}>{_aSection.title}</div>
    ))
  : null}

<button onClick={() => this.getAllSectionsData()}>
  All sections
</button>
{/* <div>{JSON.stringify(this.state.allSectionsData)}</div> */}
{this.state.allSectionsData
  ? this.state.allSectionsData.map(_aSection => (
      <div key={_aSection.id}>{_aSection.title}</div>
    ))
  : null}

<button onClick={() => this.getAllVersesData()}>All verses</button>
{/* <div>{JSON.stringify(this.state.allVersesData)}</div> */}
{this.state.allVersesData
  ? this.state.allVersesData.map(_aVerse => (
      <div key={_aVerse.id}>{_aVerse.reference}</div>
    ))
  : null}
<button onClick={() => this.getAVerseData()}>A verse</button>
{/* <div>{JSON.stringify(this.state.aVerseData)}</div> */}
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