window.onload = () => {
    const favoritesContainer = document.getElementById("favorites-container");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];


    renderBooks(favorites);


    document.getElementById("search-bar").addEventListener("input", () => searchBooks(favorites));
};


function renderBooks(books) {
    const favoritesContainer = document.getElementById("favorites-container");
    favoritesContainer.innerHTML = '';

    if (books.length === 0) {
        favoritesContainer.innerHTML = "<p>No favorite books yet.</p>";
    } else {
        books.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("favorite-book");
            bookDiv.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <button onclick="viewBookDetails(${book.id})">Details</button>
            `;
            favoritesContainer.appendChild(bookDiv);
        });
    }
}

function viewBookDetails(bookId) {
    const book = JSON.parse(localStorage.getItem("favorites")).find(b => b.id === bookId);

    const modal = document.getElementById("book-modal");
    const bookDetail = document.getElementById("book-detail");
    const pdfLink = document.getElementById("pdf-link");
    const pdfButton = document.getElementById("pdf-button");

    if (modal && bookDetail) {
        bookDetail.innerHTML = `
            <h2>${book.title}</h2>
            <img src="${book.image}" alt="${book.title}" width="200">
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Description:</strong> ${book.description}</p>
        `;


        pdfLink.href = book.pdf;


        modal.style.display = "block";


        const deleteButton = document.getElementById("delete-button");
        deleteButton.setAttribute("data-id", book.id);
    }
}


function deleteBook() {
    const bookId = document.getElementById("delete-button").getAttribute("data-id");

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(book => book.id !== parseInt(bookId));

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert("Book deleted from favorites.");
    closeModal();
    renderBooks(favorites);
}


function closeModal() {
    document.getElementById("book-modal").style.display = "none";
}


function searchBooks(favorites) {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredBooks = favorites.filter(book => {
        return book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.genre.toLowerCase().includes(query);
    });

    renderBooks(filteredBooks);
}
