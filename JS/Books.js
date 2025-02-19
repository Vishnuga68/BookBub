const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", image: "../Image/To Kill a Mockingbird.jpg", pdf: "../PDF/To Kill A Mockingbird - Full Text PDF.pdf", description: "A gripping, heart-wrenching tale of coming-of-age in the South." },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", image: "../Image/1984.png", pdf: "../PDF/George Orwell - 1984.pdf", description: "A story about totalitarianism and a surveillance state." },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", image: "../Image/The Great gatsby.jpg", pdf: "https://books.google.com/books?id=3aLXmgEACAAJ&dq=The+Great+Gatsby&hl=en&sa=X&ved=0ahUKEwj9nJz9y8LzAhW7i9gFHRI5DsQQ6AEIKTAA", description: "A novel set in the Jazz Age, examining the decay of the American Dream." },
    { id: 4, title: "Moby Dick", author: "Herman Melville", genre: "Adventure", image: "../Image/Mock Dick.jpg", pdf: "../PDF/the-great-gatsby.pdf", description: "The epic tale of Captain Ahab's obsessive quest for revenge on the white whale." },
    { id: 5, title: "War and Peace", author: "Leo Tolstoy", genre: "Historical Fiction", image: "../Image/War.jpg", pdf: "../PDF/War and Peace (Leo Tolstoy).pdf", description: "A historical novel that intertwines personal lives with global conflicts." },
    { id: 6, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", image: "../Image/Pride.jpg", pdf: "../PDF/pride-and-prejudice.pdf", description: "A romantic novel set in the early 19th century about love and marriage." },
    { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", image: "../Image/The Catcher.jpg", pdf: "../PDF/Salinger - The Catcher in the Rye.pdf", description: "A story of alienation and the struggles of a troubled teenager." },
    { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", image: "../Image/Hobbit.jpg", pdf: "../PDF/The Hobbit byJ  RR Tolkien EBOOK.pdf", description: "A fantasy novel about the adventures of Bilbo Baggins in Middle-Earth." },
    { id: 9, title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Psychological Fiction", image: "../Image/Crime.jpg", pdf: "../PDF/Crime and Punishment.pdf", description: "A novel that explores the moral dilemmas of a young man who commits murder." },
    { id: 10, title: "Frankenstein", author: "Mary Shelley", genre: "Horror", image: "../Image/Frankenstein.jpg", pdf: "../PDF/Frankenstein-Large-Print-Complete-And-Unabridged-Classic-Edition.pdf", description: "The classic Gothic novel about the creation of the monster, Frankenstein." }
];


let favorites = JSON.parse(localStorage.getItem('favorites')) || [];



function renderBooks(booksList) {
    const booksContainer = document.getElementById("books-container");
    const noBooksFound = document.getElementById("no-books-found");
    booksContainer.innerHTML = "";
    if (booksList.length === 0) {
        noBooksFound.style.display = 'block';
    } else {
        noBooksFound.style.display = 'none';
        booksList.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <button onclick="viewBookDetails(${book.id})">Details</button>
            `;
            booksContainer.appendChild(bookCard);
        });
    }
}


function viewBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    const modal = document.getElementById("book-modal");
    const bookDetail = document.getElementById("book-detail");

    bookDetail.innerHTML = `
        <h2>${book.title}</h2>
        <img src="${book.image}" alt="${book.title}" width="300" height="300">
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Description:</strong> ${book.description}</p>
    `;
    document.getElementById("book-pdf").setAttribute("href", book.pdf);
    modal.style.display = "block";
    localStorage.setItem("currentBook", JSON.stringify(book));
}


function closeModal() {
    document.getElementById("book-modal").style.display = "none";
}


function addToFavorites() {
    const currentBook = JSON.parse(localStorage.getItem("currentBook"));
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.some(fav => fav.id === currentBook.id)) {
        favorites.push(currentBook);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Book added to favorites!");
    } else {
        alert("This book is already in your favorites.");
    }
}


function filterBooks() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery) ||
        book.genre.toLowerCase().includes(searchQuery)
    );
    renderBooks(filteredBooks);
}


renderBooks(books);
