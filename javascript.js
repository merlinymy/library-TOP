const book1 = {
    title: "The Journey of Programming",
    author: "Alice Walker",
    status: "Completed",
    dateStart: "2023-01-10",
    dateFin: "2023-02-15",
    coverImg: "https://example.com/images/journey-of-programming.jpg"
  };
  
  const book2 = {
    title: "Understanding Databases",
    author: "Bob Smith",
    status: "Reading",
    dateStart: "2023-03-01",
    dateFin: null,
    coverImg: "https://example.com/images/understanding-databases.jpg"
  };
  
  const book3 = {
    title: "Future of AI",
    author: "Cynthia Johnson",
    status: "Plan to Read",
    dateStart: null,
    dateFin: null,
    coverImg: "https://example.com/images/future-of-ai.jpg"
  };
  
  const book4 = {
    title: "Mastering CSS Variables",
    author: "David Lee",
    status: "Completed",
    dateStart: "2023-04-20",
    dateFin: "2023-05-05",
    coverImg: "https://example.com/images/mastering-css-variables.jpg"
  };
  
  const book5 = {
    title: "Introduction to Machine Learning",
    author: "Eleanor Thompson",
    status: "Dropped",
    dateStart: "2023-02-01",
    dateFin: "2023-02-15",
    coverImg: "https://example.com/images/intro-to-ml.jpg"
  };

let bookArr = [book1, book2, book3, book4, book5];

let main = document.querySelector(".main");

let classToPropertyMap = {
    "title": "title",
    "author": "author",
    "read-status": "status",
    "date-start": "dateStart",
    "date-finished": "dateFin",
    "book-cover": "coverImg",
};

function displayBooks() {
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
    bookCard.append(textInfo, coverImg);

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
let body = document.querySelector("body");

themeIcon.addEventListener("click", () => {
    let curTheme = body.className;
    let iconType = document.querySelector(".theme-mode");
    let iconName = iconType.textContent;
    body.className = curTheme === "dark-theme" ? "light-theme" : "dark-theme";
    iconType.textContent = iconName === "light_mode" ? "dark_mode" : "light_mode";
})