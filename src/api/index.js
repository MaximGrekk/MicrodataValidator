const getHtml = (url) => {
	console.log(url)
  const parser = new DOMParser();
  return fetch("http://localhost:3001/",{
		method: "POST",
		// headers: {"Content-Type": "application/json"},
		body: url,
})
    .then((res) => {
      res.text();
    })
    .then((res) => parser.parseFromString(res, "text/html"))
    .then(console.log);
};
export default getHtml