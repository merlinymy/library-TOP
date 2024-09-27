function Book(title, author, status, dateStart, dateFin, totalPage, pageLeft, coverImg) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.dateStart = dateStart;
    this.dateFin = dateFin;
    this.totalPage = totalPage;
    this.pageLeft = pageLeft;
    this.coverImg = coverImg;
}

let books = []; // last add, first in array
let readingBooks = [];
let readBooks = [];
let toReadBooks = [];

function initBookArr(books) {

    books.push(new Book(
        "Call Me By Your Name",
        "André Aciman",
        "Reading",
        "2023-06-15",
        "2023-06-20",
        248,
        134,
        "https://covers.openlibrary.org/b/isbn/9781250169440-L.jpg"
    ));

    books.push(new Book(
        "Red, White & Royal Blue",
        "Casey McQuiston",
        "To Read",
        "",
        "",
        421,
        421,
        "https://covers.openlibrary.org/b/isbn/9781250316776-L.jpg"
    ));

    books.push(new Book(
        "The Song of Achilles",
        "Madeline Miller",
        "Reading",
        "2023-10-01",
        "",
        416,
        216,
        "https://covers.openlibrary.org/b/isbn/9780062060624-L.jpg"
    ));

    books.push(new Book(
        "Aristotle and Dante Discover the Secrets of the Universe",
        "Benjamin Alire Sáenz",
        "Read",
        "2023-05-10",
        "2023-05-15",
        359,
        0,
        "https://covers.openlibrary.org/b/isbn/9781442408937-L.jpg"
    ));

    books.push(new Book(
        "Giovanni's Room",
        "James Baldwin",
        "Reading",
        "",
        "",
        169,
        69,
        "https://covers.openlibrary.org/b/isbn/9780141186351-L.jpg"
    ));

    books.push(new Book(
        "Orlando",
        "Virginia Woolf",
        "Reading",
        "2023-02-01",
        "2023-02-10",
        333,
        300,
        "https://covers.openlibrary.org/b/isbn/9780156701600-L.jpg"
    ));

    books.push(new Book(
        "The Price of Salt",
        "Patricia Highsmith",
        "Reading",
        "",
        "",
        292,
        22,
        "https://covers.openlibrary.org/b/isbn/9780486800295-L.jpg"
    ));

    books.push(new Book(
        "The Miseducation of Cameron Post",
        "Emily M. Danforth",
        "Reading",
        "2023-09-25",
        "",
        470,
        470,
        "https://covers.openlibrary.org/b/isbn/9780062020574-L.jpg"
    ));

    books.push(new Book(
        "Simon vs. the Homo Sapiens Agenda",
        "Becky Albertalli",
        "Read",
        "2023-03-15",
        "2023-03-20",
        303,
        0,
        "https://covers.openlibrary.org/b/isbn/9780062348678-L.jpg"
    ));

    books.push(new Book(
        "Fun Home: A Family Tragicomic",
        "Alison Bechdel",
        "Read",
        "2023-07-01",
        "2023-07-02",
        232,
        0,
        "https://covers.openlibrary.org/b/isbn/9780618871711-L.jpg"
    ));

    books.push(new Book(
        "Maurice",
        "E.M. Forster",
        "To Read",
        "",
        "",
        256,
        256,
        "https://covers.openlibrary.org/b/isbn/9780393310320-L.jpg"
    ));

    books.push(new Book(
        "Annie on My Mind",
        "Nancy Garden",
        "Read",
        "2023-08-10",
        "2023-08-12",
        234,
        0,
        "https://covers.openlibrary.org/b/isbn/9780374400118-L.jpg"
    ));

    books.push(new Book(
        "Boy Meets Boy",
        "David Levithan",
        "Reading",
        "2023-10-03",
        "",
        185,
        185,
        "https://covers.openlibrary.org/b/isbn/9780375832994-L.jpg"
    ));

    books.push(new Book(
        "Darius the Great Is Not Okay",
        "Adib Khorram",
        "To Read",
        "",
        "",
        320,
        320,
        "https://covers.openlibrary.org/b/isbn/9780525552963-L.jpg"
    ));

    books.push(new Book(
        "The Gentleman's Guide to Vice and Virtue",
        "Mackenzi Lee",
        "Read",
        "2023-04-20",
        "2023-04-25",
        513,
        0,
        "https://covers.openlibrary.org/b/isbn/9780062382818-L.jpg"
    ));


    books.push(new Book(
        "To Kill a Mockingbird",
        "Harper Lee",
        "Read",
        "2023-01-05",
        "2023-01-20",
        336,
        0,
        "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
    ));

    books.push(new Book(
        "1984",
        "George Orwell",
        "Reading",
        "2023-10-01",
        "",
        328,
        150,
        "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
    ));

    books.push(new Book(
        "Pride and Prejudice",
        "Jane Austen",
        "To Read",
        "",
        "",
        279,
        279,
        "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
    ));

    books.push(new Book(
        "The Great Gatsby",
        "F. Scott Fitzgerald",
        "Read",
        "2023-02-10",
        "2023-02-15",
        180,
        0,
        "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
    ));

    books.push(new Book(
        "The Catcher in the Rye",
        "J.D. Salinger",
        "Read",
        "2023-03-01",
        "2023-03-05",
        277,
        0,
        "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg"
    ));

    books.push(new Book(
        "Moby Dick",
        "Herman Melville",
        "To Read",
        "",
        "",
        635,
        635,
        "https://images.isbndb.com/covers/97/81/9780785839781.jpg"
    ));

    books.push(new Book(
        "Harry Potter and the Sorcerer's Stone",
        "J.K. Rowling",
        "Read",
        "2023-04-01",
        "2023-04-10",
        309,
        0,
        "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg"
    ));

    books.push(new Book(
        "The Fellowship of the Ring",
        "J.R.R. Tolkien",
        "Reading",
        "2023-09-20",
        "",
        432,
        200,
        "https://covers.openlibrary.org/b/isbn/9780547928210-L.jpg"
    ));

    books.push(new Book(
        "The Hobbit",
        "J.R.R. Tolkien",
        "Read",
        "2023-05-01",
        "2023-05-07",
        300,
        0,
        "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg"
    ));

    books.push(new Book(
        "Jane Eyre",
        "Charlotte Brontë",
        "To Read",
        "",
        "",
        507,
        507,
        "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg"
    ));

    books.push(new Book(
        "The Alchemist",
        "Paulo Coelho",
        "Read",
        "2023-06-01",
        "2023-06-03",
        208,
        0,
        "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
    ));

    books.push(new Book(
        "The Da Vinci Code",
        "Dan Brown",
        "Read",
        "2023-07-01",
        "2023-07-05",
        489,
        0,
        "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg"
    ));

    books.push(new Book(
        "The Girl with the Dragon Tattoo",
        "Stieg Larsson",
        "To Read",
        "",
        "",
        465,
        465,
        "https://images.isbndb.com/covers/94/86/9780307949486.jpg"
    ));

    books.push(new Book(
        "The Hunger Games",
        "Suzanne Collins",
        "Read",
        "2023-08-01",
        "2023-08-03",
        374,
        0,
        "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg"
    ));

    books.push(new Book(
        "The Fault in Our Stars",
        "John Green",
        "Read",
        "2023-09-01",
        "2023-09-04",
        313,
        0,
        "https://covers.openlibrary.org/b/isbn/9780142424179-L.jpg"
    ));
}

function getReadingBooks() {
    return books.filter(book => {
        book.status = book.status.toUpperCase();
        return book.status === 'READING';
    });
}

readingBooks = getReadingBooks();
let readingBookLength = readingBooks.length;

initBookArr(books);

let main = document.querySelector(".latest-updates");
let scrollBarWrap = document.querySelector(".scroll-bar-wrap");
let leftScrollBtn = document.querySelector(".left-scroll");
let rightScrollBtn = document.querySelector(".right-scroll");
let scrollBar = document.querySelector(".scroll-bar-wrap");
let x = 0;

let classToPropertyMap = {
    "title": "title",
    "author": "author",
    "read-status": "status",
    "date-start": "dateStart",
    "date-finished": "dateFin",
    "total-pages": "totalPage",
    "page-left": "pageLeft",
    "book-cover": "coverImg",
};

function displayBooks(bookArr) {
    displayReadingBooks(bookArr);
    bookArr.forEach((book) => {
        main.appendChild(fillBookCard(book));
    });
}

function generateScrollBook() {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    let bookCover = document.createElement("img");
    bookCover.classList.add("book-cover");
    let infoDiv = document.createElement("div");
    infoDiv.classList.add('book-info');
    let pageLeft = document.createElement("p");
    pageLeft.classList.add("page-left");
    let actionDiv = document.createElement("div");
    actionDiv.classList.add("actions");
    actionDiv.innerHTML = `<span class="status-toggle material-symbols-outlined" title='toggle read status'>auto_stories</span>
                            <span class="delete-book material-symbols-outlined" title="remove book">delete</span>`;
    let bookName = document.createElement("p");
    bookName.setAttribute("style", "display: none");
    infoDiv.append(pageLeft, actionDiv, bookName);
    bookDiv.append(bookCover, infoDiv);
    return bookDiv;
}

function fillScrollBook(book) {
    let bookDiv = generateScrollBook();
    bookDiv.childNodes[0].setAttribute("src", book.coverImg);
    // console.log(bookDiv.childNodes[0]);

    bookDiv.childNodes[1].childNodes[0].textContent = 
    `${book.pageLeft} pages left`;

    bookDiv.childNodes[1].childNodes[2].textContent = book.title;

    return bookDiv;
}

function displayReadingBooks(bookArr) {
    bookArr.forEach(book => {
        scrollBarWrap.append(fillScrollBook(book));
    });
}

function generateCard() { //returns the empty bookCard div
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let textInfo = document.createElement("div");
    textInfo.classList.add("text-info");

    let title = document.createElement("p");
    title.classList.add("title");

    let author = document.createElement("p");
    author.classList.add("author");

    let status = document.createElement("p");
    status.classList.add("read-status");

    // let dateStart = document.createElement("p");
    // dateStart.classList.add("date-start");

    // let dateFin = document.createElement("p");
    // dateFin.classList.add("date-finished");

    let coverImg = document.createElement("img");
    coverImg.classList.add("book-cover");
    coverImg.setAttribute("src", "");

    textInfo.append(title, author, status);
    bookCard.append(coverImg, textInfo);

    return bookCard;
}

function fillBookCard(book) { //returns the filled bookCard div
    let bookCard = generateCard();
    
    for(let bookInfo of bookCard.childNodes) {
        let className = bookInfo.className;
        if (className === "book-cover") {
            bookInfo.setAttribute("src", book[classToPropertyMap[className]]);
        } else {
            for(let textInfo of bookInfo.childNodes) {
                textInfo.textContent = book[classToPropertyMap[textInfo.className]];
            }
            
        }
    }
    return bookCard;
}

function addBook() {

}

displayBooks(books);

let themeIcon = document.querySelector(".theme-icon");
let body = document.documentElement;
let siteLogo = document.querySelector(".header>a>span>svg");
// console.log(siteLogo);
body.className = "dark";

themeIcon.addEventListener("click", () => {
    let curTheme = body.className;
    let iconType = document.querySelector(".theme-mode");
    let iconName = iconType.textContent;
    let siteLogoClass = siteLogo.className;
    // console.log(siteLogoClass);
    siteLogo.className.baseVal = siteLogoClass.baseVal === "invert" ? "" : "invert";
    body.className = curTheme === "dark" ? "light" : "dark";
    iconType.textContent = iconName === "light_mode" ? "dark_mode" : "light_mode";
})



leftScrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(readingBookLength - 6);
    x--;
    console.log(x);
    if (x < 0) {
        x = readingBookLength - 6;
    }
    scrollBar.style.setProperty('--offset',`calc(-200px * ${x})`);
    console.log(scrollBar.style);

})

rightScrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(readingBookLength);
    x++;
    console.log(x);
    if (x > readingBookLength - 6) {
        x = 0;
    }
    scrollBar.style.setProperty('--offset',`calc(-200px * ${x})`);
})

let addNewBook = document.querySelector('.add-new-book');
let addBookDialog = document.querySelector('.add-book');
addNewBook.addEventListener("click", () => {
    addBookDialog.showModal();
});

function setStatusToggle() {
    let readStatusToggle = document.querySelectorAll('.status-toggle');
    readStatusToggle.forEach(toggle => {
        toggle.addEventListener('click', () => {
        console.log('status toggled');
        let symbol = toggle.textContent;
        let bookName = toggle.parentElement.parentElement.childNodes[2].textContent;
        // console.log(toggleParent);
        // find the book from reading array
        updateBook(bookName, 'Read');
        // console.log(symbol);
        toggle.textContent = symbol == 'auto_stories' ? 'check_circle' : 'auto_stories';
    })});
}


function updateBook(title, status) {
    // TODO: use book id instead of name (potential duplicates)
    let book = books.filter(book => {
        return book.title === title;
    })[0];

    if (status === 'Read') {
        book.status = 'Read';
    } else if (status === 'Reading') {
        book.status = 'Reading';
    } else {
        book.status = 'Dropped';
    }

    scrollBarWrap.innerHTML = '';
    main.innerHTML = '';
    displayBooks(books);
    setStatusToggle();
}

setStatusToggle();