const text = document.getElementById('text');
const author = document.getElementById('author');
const twitter = document.getElementById('tweet-quote');
const newQuoteBtn = document.getElementById('new-quote');

function updateQuote() {
    fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    text.innerHTML = `
        <span class="quote"><i class="fa fa-quote-left"> </i></span>${data.content}
    `;
    author.innerText = `-${data.author}`;
  });
}

// Initial call
updateQuote();

// Event Listners
newQuoteBtn.addEventListener('click', updateQuote);