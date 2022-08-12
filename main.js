function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead;
    this.info = function() {
        let readStatus
        isRead ? readStatus = 'done reading' : readStatus = 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`;
    };
};

const book = new Book('Harry Potter', 'Lady', 700, true);
console.log(book.info()); 