const getHtml = (url) => {
	console.log(JSON.stringify({url}))
  	const parser = new DOMParser();
  	return fetch("http://localhost:3001/",{
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({url}),
	})
	.then(res => res.json())
	.then(res => res.res)
    .then(res=>parser.parseFromString(res, 'text/html'))
    .then(console.log);
};
export default getHtml
