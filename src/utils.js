export const parseHtml = HTMLContent => {
  // NOTE HTML parsing solutions for extrating or transforming fetched HTML into material design css
  let parser = new DOMParser();
  let doc = parser.parseFromString(HTMLContent, "text/html");
  console.log(doc.body);
};
