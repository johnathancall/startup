import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  let imgEl = '';

  if (imageUrl) {
    imgEl = <img src={imageUrl} alt='stock background' />;
  }
  /*return(
    <main>
      <div id="picture" className="picture-box"></div>
      <p>
        Bookmarker++ is a utility that allows the user to add directories and bookmarks of whatever websites they choose. Websites can be added and removed as the user wishes, and the most recent webpage added from any user is also displayed.
      </p>

      <div id="quote" className="quote-box bg-light text-dark"></div>
    </main>
  );*/

  return (
	

    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'>
          {imgEl}
        </div>
	<p>
	  Bookmarker++ is a utility that allows the user to ad directories and bookmarks of whatever websites they choose. Websites can be added and removed as the user wishes, and the most recent webpage added from any user is also displayed.
	</p>
        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}
