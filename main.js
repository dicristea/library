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

function addBookToLibrary() {
    const book = Object.create(Book);
    
    
};

const getBookFromInput = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.querySelector("input[name=isRead]:checked").value;
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    createBookCard();
};

function createBookCards() {
    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
    }
};


function createBookCard(book) {
    const bookCard = document.createElement('div');
    const cardHeader = document.createElement('div');
    const title = document.createElement('h3');
    const removeBtn = document.createElement('button');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const btnGroup = document.createElement('div');
    const readBtn = document.createElement('button');
  
    bookCard.classList.add('card');
    cardHeader.classList.add('card-header');
    title.classList.add('card-title');
    removeBtn.classList.add('remove-button');
    author.classList.add('card-author');
    pages.classList.add('card-pages');
    btnGroup.classList.add('card-btns');
    readBtn.classList.add('read-button');


    removeBtn.setAttribute('type', 'button');

    removeBtn.onclick = removeBook();
    readBtn.onclick = changeReadStatus();


  
    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'
  
    if (book.isRead) {
      readBtn.textContent = 'Read'
      readBtn.classList.add('btn-light-green')
    } else {
      readBtn.textContent = 'Not read'
      readBtn.classList.add('btn-light-red')
    }
  
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    booksGrid.appendChild(bookCard)
};


function openForm() {
    document.getElementById("bookFormPopup").style.display = "block";
};

function closeForm() {
    document.getElementById("bookFormPopup").style.display = "none";
};

function removeBook() {
    // use data attribute linked to each card somehow and delete indexed book
    // updateDisplay();
};

function changeReadStatus() {
    //changes data index book read status to true or false;
    if (readButton.textContent === 'Read') {
        readButton.textContent = 'Unread';
    } else {
        readButton.textContent = 'Read'
    };
};