const fetchQuotes = () => {
  axios.get('https://simpsons-quotes-api.herokuapp.com/quotes').then((res) => {
    console.log(res.data);
    const showQuotes = document.getElementById('simpsons-quotes');
    showQuotes.innerHTML = `<h3>${res.data[0].character}</h3>
        <img src="${res.data[0].image}"} />
        <p>${res.data[0].quote}</p>
        `;
  });
};
