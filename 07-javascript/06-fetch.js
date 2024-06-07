const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

  const createBookElement = (book) => {
    let bookContainer = document.createElement("div");
    let bookTitle = document.createElement("h3");
    let bookAuthor = document.createElement("p");
    let bookReleased = document.createElement("p");
    let bookPages = document.createElement("p");
  
    bookTitle.textContent = book.name;
    bookAuthor.textContent = book.authors[0];
    bookReleased.textContent = book.released.substr(0, 4);
    bookPages.textContent = `${book.numberOfPages} pages`;
  
    bookContainer.append(bookTitle);
    bookContainer.append(bookAuthor);
    bookContainer.append(bookReleased);
    bookContainer.append(bookPages);
  
    bookContainer.style.display = "flex";
    bookContainer.style.flexDirection = "column";
    bookContainer.style.alignItems = "center";
    bookContainer.style.marginTop = "20px";
  
    app.append(bookContainer);
  };
  

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        data.forEach((book) => {
          createBookElement(book);
        });
      })
    )
    .catch((error) => {
      let element = document.createElement("div");
      element.textContent = "An error occured. Please reload the page.";
      app.append(element);
    })
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    });

};
fetchData(url);