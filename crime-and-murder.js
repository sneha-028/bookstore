// Get elements
// const searchBar = document.getElementById('searchBar');
// const bookCards = document.getElementById('bookCards');
// const cards = bookCards.getElementsByClassName('book-card');

// // Event listener for search
// searchBar.addEventListener('keyup', function () {
//   const query = searchBar.value.toLowerCase().trim(); // user input

//   // Loop through all book cards
//   for (let i = 0; i < cards.length; i++) {
//     const title = cards[i].querySelector('.book-title').innerText.toLowerCase();

//     // If book title matches search query → show it
//     if (title.includes(query)) {
//       cards[i].style.display = 'block';
//     } else {
//       cards[i].style.display = 'none';
//     }
//   }

//   // If search bar is empty → show all books
//   if (query === '') {
//     for (let i = 0; i < cards.length; i++) {
//       cards[i].style.display = 'block';
//     }
//   }
// });

const searchBar = document.getElementById('searchBar');
const bookCards = document.querySelector('.book-cards'); // class selector fix
const cards = bookCards.getElementsByClassName('book-card');

// Event listener for search
searchBar.addEventListener('keyup', function () {
  const query = searchBar.value.toLowerCase().trim(); // user input

  // Loop through all book cards
  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector('.book-title').innerText.toLowerCase();

    // If book title matches search query → show it
    if (title.includes(query)) {
      cards[i].style.display = 'block';
    } else {
      cards[i].style.display = 'none';
    }
  }

  // If search bar is empty → show all books
  if (query === '') {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = 'block';
    }
  }
});
