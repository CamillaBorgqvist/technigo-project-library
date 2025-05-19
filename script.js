
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'science fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/the-catcher-in-the-rye.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer.jpg"
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'fystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/the-da-vinci-code.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/the-alchemist.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'science fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/the-hunger-games-hunger-games.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/the-girl-with-the-dragon-tattoo.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/the-road.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'science fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/the-hitchhikers-guide-to-the-galaxy.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/giver.jpg'
  }
]

//function to show items from the array
const renderBooks = (bookArray) => {
  libraryContainer.innerHTML = '';

bookArray.forEach(book => {
  const item = document.createElement('section'); //creates a section element to add content to from the array (titel, author, img a.s.o)
  item.classList.add('library-item'); //adds a css class to the new section element

  //created the function in JS for a dynamic structure if changes to the array would be done. 
  // This way I dont need to duplicate the array values to the html 
  item.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <h2>${book.title}</h2>
    <div class="sub-headers-to-library-item">
      <h3>Author:</h3>
      <h4>${book.author}</h4>
    </div>
    <div class="sub-headers-to-library-item">
      <h3>Genre:</h3>
      <h4>${book.genre}</h4>
    </div>
    <div class="sub-headers-to-library-item">
      <h3>Rating:</h3>
      <h4>${book.rating}</h4>  
    </div>
    <h3>Description:</h3>
    <p>${book.description}</p>
  `;

  libraryContainer.appendChild(item); //adds the new item element as a child to the element with id="library" created in html
});
};

//show all the array objects when the page is loaded
const libraryContainer = document.getElementById('library');
renderBooks(books);

//function to combine the selection of genre and sorting
const updateView = () => {
  const selectedGenre = document.querySelector('input[name="genre"]:checked')?.value;
  const selectedSort = document.querySelector('input[name="rating"]:checked')?.id;

  let filteredBooks;
  if (selectedGenre === 'all') {
    filteredBooks = [...books];
  } else {
    filteredBooks = books.filter(book => book.genre.toLowerCase() === selectedGenre.toLowerCase());
  }

  if (selectedSort === 'highrate-button') {
    filteredBooks.sort((a, b) => b.rating - a.rating);
  } else if (selectedSort === 'lowrate-button') {
    filteredBooks.sort((a, b) => a.rating - b.rating);
  }

  renderBooks(filteredBooks);
}

//Pick random book
const randomButton = document.getElementById('random-button');

randomButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * books.length); //gets random index value
  const randomBook = books[randomIndex]; //gets the element at that index
  renderBooks([randomBook]);

  //remove selected genre/rating if random button is selected
  document.querySelectorAll('input[name="genre"]').forEach(r => r.checked = false); 
  document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
});

//Filter section - Filter genre
const genreOption = document.querySelectorAll('input[name="genre"]'); //gets the radio button with name=genre

genreOption.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedGenre = document.querySelector('input[name="genre"]:checked').value; //gets the selected radio option

    if (selectedGenre === 'all') {
      renderBooks(books);
    } else {
      const filteredBooks = books.filter(book => book.genre === selectedGenre);
      renderBooks(filteredBooks);
    }
  });
});

// Sort section - Sort rating
const ratingOption = document.querySelectorAll('input[name="rating"]');

ratingOption.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedId = document.querySelector('input[name="rating"]:checked').id; //checks which button that's selected

    let sortedBooks;
    if (selectedId === 'highrate-button') {
      sortedBooks = [...books].sort((a, b) => b.rating - a.rating); //creates a copy of books and sorts it high to low
    } else {
      sortedBooks = [...books].sort((a, b) => a.rating - b.rating);
    }
    renderBooks(sortedBooks);
  });
});

// event listeners to listen if a selection is changed, uses function updateView
const genreRadios = document.querySelectorAll('input[name="genre"]');

genreRadios.forEach(radio => {
  radio.addEventListener('change', updateView);
});

const ratingRadios = document.querySelectorAll('input[name="rating"]');

ratingRadios.forEach(radio => {
  radio.addEventListener('change', updateView);
});
