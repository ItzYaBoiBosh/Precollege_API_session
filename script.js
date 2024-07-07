async function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
  
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchInput}`);
      const data = await response.json();
  
      const books = data.docs;
  
      if (books.length > 0) {
        books.forEach(book => {
          const bookCard = document.createElement('div');
          bookCard.className = 'book-card';
  
          const bookTitle = document.createElement('h2');
          bookTitle.className = 'book-title';
          bookTitle.textContent = book.title;
  
          const bookAuthor = document.createElement('p');
          bookAuthor.className = 'book-author';
          bookAuthor.textContent = `by ${book.author_name ? book.author_name.join(', ') : 'Unknown author'}`;
  
          bookCard.appendChild(bookTitle);
          bookCard.appendChild(bookAuthor);
  
          bookList.appendChild(bookCard);
        });
      } else {
        const noResults = document.createElement('p');
        noResults.textContent = 'No books found.';
        bookList.appendChild(noResults);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'An error occurred while fetching books.';
      bookList.appendChild(errorMessage);
    }
  }
  