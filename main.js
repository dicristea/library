let myLibrary = [
    new Book('Harry Potter', 'J.K. Rowling', '3,417', 'true'),
    new Book('Title', 'Author', '900', 'true')
];

const cardContainer = document.querySelector('.card-container');
const addBookCard = document.querySelector('.add');
const readButton = document.querySelector('.read-button');
const submitButton = document.querySelector('.submit-button');

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (isRead === 'true');
    // remember to delete this after the submit button works, this is just for manual array input testing
};

Book.prototype = {
    // read = 
}

submitButton.addEventListener('click', getBookFromInput);

const getBookFromInput = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = (document.querySelector("input[name=isRead]:checked").value === 'true');
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    createBookCards();
};

function createBookCards() {
    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
    };
};

function createBookCard(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const btnGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
  
    bookCard.classList.add('card');
    title.classList.add('card-title');
    author.classList.add('card-author');
    pages.classList.add('card-pages');
    btnGroup.classList.add('card-btns');
    readBtn.classList.add('read-button');
    removeBtn.classList.add('remove-button');

    readBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('type', 'button');

    removeBtn.onclick = removeBook;
    // readBtn.onclick = changeReadStatus;

    title.textContent = `"${book.title}"`;
    author.textContent = `${book.author}`;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = 'Remove';
  
    if (book.isRead) {
      readBtn.textContent = 'Read';
    } else {
      readBtn.textContent = 'Unread';
    };
  
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    btnGroup.appendChild(readBtn);
    btnGroup.appendChild(removeBtn);
    bookCard.appendChild(btnGroup);
    cardContainer.insertBefore(bookCard, addBookCard);
};


function openForm() {
    document.getElementById("bookFormPopup").style.display = "block";
};

function closeForm() {
    document.getElementById("bookFormPopup").style.display = "none";
};

const removeBook = (e) => {
    e.target.indexOf
    // updateDisplay();
};

// function changeReadStatus() {
//     //changes data index book read status to true or false;
//     if (readButton.textContent === 'Read') {
//         readButton.textContent = 'Unread';
//     } else {
//         readButton.textContent = 'Read'
//     };
// };