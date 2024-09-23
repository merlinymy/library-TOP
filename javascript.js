const book1 = {
    title: "The Journey of Programming",
    author: "Alice Walker",
    status: "Completed",
    dateStart: "2023-01-10",
    dateFin: "2023-02-15",
    totalPage: 123,
    pageLeft: 0,
    coverImg: "https://images.isbndb.com/covers/04/86/9781781100486.jpg"
  };
  
  const book2 = {
    title: "Understanding Databases",
    author: "Bob Smith",
    status: "Reading",
    dateStart: "2023-03-01",
    dateFin: null,
    totalPage: 454,
    pageLeft: 234,
    coverImg: "https://images.isbndb.com/covers/04/86/9781781100486.jpg"
  };
  
  const book3 = {
    title: "Future of AI",
    author: "Cynthia Johnson",
    status: "Reading",
    dateStart: null,
    dateFin: null,
    totalPage: 765,
    pageLeft: 123,
    coverImg: "https://images.isbndb.com/covers/04/86/9781781100486.jpg"
  };
  
  const book4 = {
    title: "Mastering CSS Variables",
    author: "David Lee",
    status: "Completed",
    dateStart: "2023-04-20",
    dateFin: "2023-05-05",
    totalPage: 456,
    pageLeft: 0,
    coverImg: "https://images.isbndb.com/covers/04/86/9781781100486.jpg"
  };
  
  const book5 = {
    title: "Introduction to Machine Learning",
    author: "Eleanor Thompson",
    status: "Dropped",
    dateStart: "2023-02-01",
    dateFin: "2023-02-15",
    totalPage: 909,
    pageLeft: 345,
    coverImg: "https://images.isbndb.com/covers/04/86/9781781100486.jpg"
  };

let bookArr = [book1, book2, book3, book4, book5];

let main = document.querySelector(".latest-updates");
let scrollBarWrap = document.querySelector(".scroll-bar-wrap");
let leftScrollBtn = document.querySelector(".left-scroll");
let rightScrollBtn = document.querySelector(".right-scroll");
let scrollBar = document.querySelector(".scroll-bar-wrap");
let x = 0;
let readingBook;

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

function displayBooks() {
    displayReadingBooks()
    bookArr.forEach((book) => {
        main.appendChild(fillBookCard(book));
    });
}

function Book(title, author, status, dateStart, dateFin, coverImg) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.dateStart = dateStart;
    this.dateFin = dateFin;
    this.coverImg = coverImg;
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
    
    infoDiv.append(pageLeft, actionDiv);
    bookDiv.append(bookCover, infoDiv);
    return bookDiv;
}

function fillScrollBook(book) {
    let bookDiv = generateScrollBook();
    bookDiv.childNodes[0].setAttribute("src", book.coverImg);
    // console.log(bookDiv.childNodes[0]);

    bookDiv.childNodes[1].childNodes[0].textContent = 
    `${book.pageLeft} pages left`

    return bookDiv;
}

function displayReadingBooks() {
    let readingBooks = bookArr.filter(book => {
        return book.status === "Reading";
    });
    readingBook = readingBooks;
    console.log(readingBook);
    readingBooks.forEach(book => {
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

    let dateStart = document.createElement("p");
    dateStart.classList.add("date-start");

    let dateFin = document.createElement("p");
    dateFin.classList.add("date-finished");

    let coverImg = document.createElement("img");
    coverImg.classList.add("book-cover");
    coverImg.setAttribute("src", "");

    textInfo.append(title, author, status, dateStart, dateFin);
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

displayBooks();

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
    x--;
    if (x < 0) {
        x = readingBookLength;
    }
    scrollBar.style.setProperty('--offset',`calc(-200px * ${x})`);
    console.log(scrollBar.style);

})

rightScrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    x++;
    if (x > readingBookLength) {
        x = 0;
    }
    scrollBar.style.setProperty('--offset',`calc(-200px * ${x})`);
})

let addNewBook = document.querySelector('.add-new-book');
let addBookDialog = document.querySelector('.add-book');
addNewBook.addEventListener("click", () => {
    addBookDialog.showModal();
});

let readStatusToggle = document.querySelectorAll('.status-toggle');
readStatusToggle.forEach(toggle => {toggle.addEventListener('click', () => {
    let symbol = toggle.textContent;
    console.log(symbol);
    toggle.textContent = symbol == 'auto_stories' ? 'check_circle' : 'auto_stories';

})});