function Quote() {
    fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    const quoteFormat = `<span class="quote mr-2"><i class="fa fa-quote-left"> </i></span>${data.content}`;
    $("#text").html(quoteFormat);
    $("#author").text(`-${data.author}`);
  });
};

function buttonPress() {
    $("#text").fadeOut(250)
    Quote();
    $("#text").fadeIn(1500)
}

$( document ).ready(function() {
    console.log( "ready!" );
    Quote();
    $("#new-quote").click(buttonPress);
});