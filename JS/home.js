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


function getGenresCount() {
    const genres = new Set();
    books.forEach(book => genres.add(book.genre));
    return genres.size;
}


function getAuthorsCount() {
    const authors = new Set();
    books.forEach(book => authors.add(book.author));
    return authors.size;
}


function getBooksAvailable() {
    return books.length;
}


function getPersonalizedSuggestions() {
    return "100%";
}


function updateHeroSection() {

    document.getElementById("genres-count").textContent = `${getGenresCount()}`;
    document.getElementById("personalized-suggestions").textContent = getPersonalizedSuggestions();
    document.getElementById("books-available").textContent = `${getBooksAvailable()}`;
    document.getElementById("authors-count").textContent = `${getAuthorsCount()}`;
}


updateHeroSection();