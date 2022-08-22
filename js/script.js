/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

GEOFF MILLAR
******************************************/

/*** 
 * `quotes` array with object properties consisting of quote, source, year, and citation. 
***/
const quotes = [
  {
    quote: "I don't think people are going to talk in the future. They're going to communicate through eye contact, body language, emojis, signs.",
    source: 'Kanye West'
  },
  {
    quote: "If I'm traveling, I'll pack socks in my bag - really cute furry ones.",
    source: 'Nicki Minaj'
  },
  {
    quote: "Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it. If you aren't sure which way to do something, do it both ways and see which works better.",
    source: 'John Carmack',
    year: 2022
  },
  {
    quote: "I have no interest in going to Egypt and seeing the pyramids. I'm just not that kind of dude.",
    source: 'Gary Vaynerchuk'
  },
  {
    quote: "The team comes first.",
    source: 'Simone Biles'
  },
  {
    quote: "Showing weakness and showing fear and letting people in was a huge part of my comeback.",
    source: 'Mardy Fish',
    citation:'Untold: Breaking Point'
  },
  {
    quote: "I don't understand why people would want to get rid of pigeons. They don't bother no one.",
    source: 'Mike Tyson'
  },
  {
    quote: "The world can't tell you who you are. You've just got to figure out who you are and be there, for better or worse.",
    source: 'Dave Chapelle'
  },
  {
    quote: "I feel like, when people realize that they are the only person they need to impress, everybody's life will be a lot smoother.",
    source: 'Megan Thee Stallion'
  },
  {
    quote: "I think I'm cool. That's all that matters.",
    source: 'Tyler, The Creator'
  },
  {
    quote: "You can be gorgeous at thirty, charming at forty, and irresistible for the rest of your life.",
    source: 'Coco Chanel'
  },
  {
    quote: "There comes a time in your life when you focus solely on what you believe is right, regardless of what everybody else is doing.",
    source: 'Alexander Mcqueen'
  },
  {
    quote: "I just feel my best when I'm all glammed up.",
    source: 'Kim Kardashian'
  }
];


/***
 * `getRandomQuote` function
 * Computes a random number between 0 and 11.
***/
const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * 11);

  //returns a random object.property from the quotes array  
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/

const printQuote = () => {
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

  //Conditional if statement in cases of citation or year being defined in retrieved quote.
    if ( randomQuote.citation ) {
      html += `<span class="source"> ${randomQuote.citation} </span>`;
    } 
    if ( randomQuote.year ) {
      html += `<span class="source"> ${randomQuote.year} </span>`;
    }
    `</p>`

  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);