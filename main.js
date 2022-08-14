let myLibrary = [];


const readButton = document.querySelector('.read-button');



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

function openForm() {
    document.getElementById("bookFormPopup").style.display = "block";
};

function closeForm() {
    document.getElementById("bookFormPopup").style.display = "none";
};

function removeBook() {
    // use data attribute linked to each card somehow and delete indexed book
    updateDisplay();
};

function changeReadStatus() {
    //changes data index book read status to true or false;

    if (readButton.textContent === 'Read') {
        readButton.textContent = 'Unread';
    } else {
        readButton.textContent = 'Read'
    };
};

function addBookToLibrary() {
    const book = new Book('Harry Potter', 'Lady', 700, true);
    console.log(book.info());
    
};

function updateDisplay() {
        // loop thru array and make cards for every object in array
};