function Book(title, author, status, dateStart, dateFin, totalPage, pageLeft, coverImg, summary) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.dateStart = dateStart;
    this.dateFin = dateFin;
    this.totalPage = totalPage;
    this.pageLeft = pageLeft;
    this.coverImg = coverImg;
    this.summary = summary;

    this.updateStatus = function (newStatus) {
        this.status = newStatus;
    }
}

let books = []; // last add, first in array


function initBookArr(books) {

    books.push(new Book(
        "Call Me By Your Name",
        "André Aciman",
        "Reading",
        "2023-06-15",
        "2023-06-20",
        248,
        134,
        "https://covers.openlibrary.org/b/isbn/9781250169440-L.jpg",
        "A summer romance unfolds between a 17-year-old boy and a visiting scholar in Italy. As their bond deepens, they grapple with desire and the fleeting nature of time..."
    ));

    books.push(new Book(
        "Red, White & Royal Blue",
        "Casey McQuiston",
        "To Read",
        "",
        "",
        421,
        421,
        "https://covers.openlibrary.org/b/isbn/9781250316776-L.jpg",
        "America's First Son and the Prince of Wales fall in love, risking political scandal. Amidst media scrutiny, they navigate a secret relationship that could change nations..."
    ));

    books.push(new Book(
        "The Song of Achilles",
        "Madeline Miller",
        "Reading",
        "2023-10-01",
        "",
        416,
        216,
        "https://covers.openlibrary.org/b/isbn/9780062060624-L.jpg",
        "A retelling of the bond between Achilles and Patroclus during the Trojan War. Their friendship and love are tested by fate and prophecy..."
    ));

    books.push(new Book(
        "Aristotle and Dante Discover the Secrets of the Universe",
        "Benjamin Alire Sáenz",
        "Read",
        "2023-05-10",
        "2023-05-15",
        359,
        0,
        "https://covers.openlibrary.org/b/isbn/9781442408937-L.jpg",
        "Two teens form an unexpected friendship that changes their lives. Together, they explore identity, family, and the mysteries of the universe..."
    ));

    books.push(new Book(
        "Giovanni's Room",
        "James Baldwin",
        "Reading",
        "",
        "",
        169,
        69,
        "https://covers.openlibrary.org/b/isbn/9780141186351-L.jpg",
        "An American in Paris grapples with his sexuality and love for an Italian bartender. The story delves into identity and societal expectations..."
    ));

    books.push(new Book(
        "Orlando",
        "Virginia Woolf",
        "Reading",
        "2023-02-01",
        "2023-02-10",
        333,
        300,
        "https://covers.openlibrary.org/b/isbn/9780156701600-L.jpg",
        "Orlando, a nobleman who transforms into a woman, lives across centuries. The novel explores gender, identity, and societal roles..."
    ));

    books.push(new Book(
        "The Price of Salt",
        "Patricia Highsmith",
        "Reading",
        "",
        "",
        292,
        22,
        "https://covers.openlibrary.org/b/isbn/9780486800295-L.jpg",
        "A young woman falls for an elegant older woman in 1950s New York. Their forbidden romance challenges societal norms..."
    ));

    books.push(new Book(
        "The Miseducation of Cameron Post",
        "Emily M. Danforth",
        "Reading",
        "2023-09-25",
        "",
        470,
        470,
        "https://covers.openlibrary.org/b/isbn/9780062020574-L.jpg",
        "Cameron Post is sent to a conversion therapy camp after her sexuality is discovered. She embarks on a journey of self-acceptance and resilience..."
    ));

    books.push(new Book(
        "Simon vs. the Homo Sapiens Agenda",
        "Becky Albertalli",
        "Read",
        "2023-03-15",
        "2023-03-20",
        303,
        0,
        "https://covers.openlibrary.org/b/isbn/9780062348678-L.jpg",
        "Sixteen-year-old Simon is blackmailed over his secret emails with an anonymous boy. He must navigate friendship, love, and coming out..."
    ));

    books.push(new Book(
        "Fun Home: A Family Tragicomic",
        "Alison Bechdel",
        "Read",
        "2023-07-01",
        "2023-07-02",
        232,
        0,
        "https://covers.openlibrary.org/b/isbn/9780618871711-L.jpg",
        "A graphic memoir exploring Alison Bechdel's relationship with her father. Through family secrets, she delves into identity and self-discovery..."
    ));

    books.push(new Book(
        "Maurice",
        "E.M. Forster",
        "To Read",
        "",
        "",
        256,
        256,
        "https://covers.openlibrary.org/b/isbn/9780393310320-L.jpg",
        "Maurice Hall struggles with his sexuality in early 20th-century England. He seeks love and acceptance against societal pressures..."
    ));

    books.push(new Book(
        "Annie on My Mind",
        "Nancy Garden",
        "Read",
        "2023-08-10",
        "2023-08-12",
        234,
        0,
        "https://covers.openlibrary.org/b/isbn/9780374400118-L.jpg",
        "Liza and Annie meet and form a deep connection, facing challenges from society. Their story is one of first love and courage..."
    ));

    books.push(new Book(
        "Boy Meets Boy",
        "David Levithan",
        "Reading",
        "2023-10-03",
        "",
        185,
        185,
        "https://covers.openlibrary.org/b/isbn/9780375832994-L.jpg",
        "In a utopian town, Paul navigates high school and falls for Noah. Amidst misunderstandings, he strives to win Noah's heart..."
    ));

    books.push(new Book(
        "Darius the Great Is Not Okay",
        "Adib Khorram",
        "To Read",
        "",
        "",
        320,
        320,
        "https://covers.openlibrary.org/b/isbn/9780525552963-L.jpg",
        "Darius visits Iran and befriends Sohrab, connecting with his heritage. Their friendship helps him navigate depression and identity..."
    ));

    books.push(new Book(
        "The Gentleman's Guide to Vice and Virtue",
        "Mackenzi Lee",
        "Read",
        "2023-04-20",
        "2023-04-25",
        513,
        0,
        "https://covers.openlibrary.org/b/isbn/9780062382818-L.jpg",
        "Monty embarks on a European tour with his friend Percy, leading to adventure and danger. Along the way, he confronts his feelings and identity..."
    ));

    books.push(new Book(
        "To Kill a Mockingbird",
        "Harper Lee",
        "Read",
        "2023-01-05",
        "2023-01-20",
        336,
        0,
        "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
        "Young Scout Finch witnesses racial injustice in her Southern town. Her father, Atticus, defends a black man wrongly accused..."
    ));

    books.push(new Book(
        "1984",
        "George Orwell",
        "Reading",
        "2023-10-01",
        "",
        328,
        150,
        "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        "Winston Smith rebels against a totalitarian regime that suppresses truth. As he seeks freedom, he risks everything under Big Brother's watch..."
    ));

    books.push(new Book(
        "Pride and Prejudice",
        "Jane Austen",
        "To Read",
        "",
        "",
        279,
        279,
        "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
        "Elizabeth Bennet navigates love and societal expectations with Mr. Darcy. Misunderstandings give way to a deeper connection..."
    ));

    books.push(new Book(
        "The Great Gatsby",
        "F. Scott Fitzgerald",
        "Read",
        "2023-02-10",
        "2023-02-15",
        180,
        0,
        "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        "Nick Carraway is drawn into the world of the enigmatic Jay Gatsby. Gatsby's pursuit of Daisy Buchanan leads to tragedy..."
    ));

    books.push(new Book(
        "The Catcher in the Rye",
        "J.D. Salinger",
        "Read",
        "2023-03-01",
        "2023-03-05",
        277,
        0,
        "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg",
        "Holden Caulfield recounts his experiences in New York after leaving prep school. He searches for meaning in a world he finds phony..."
    ));

    books.push(new Book(
        "Moby Dick",
        "Herman Melville",
        "To Read",
        "",
        "",
        635,
        635,
        "https://images.isbndb.com/covers/97/81/9780785839781.jpg",
        "Captain Ahab obsessively hunts the white whale, Moby Dick. The novel explores themes of obsession and the human condition..."
    ));

    books.push(new Book(
        "Harry Potter and the Sorcerer's Stone",
        "J.K. Rowling",
        "Read",
        "2023-04-01",
        "2023-04-10",
        309,
        0,
        "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
        "Harry Potter discovers he's a wizard and attends Hogwarts School. He uncovers a mystery involving the Sorcerer's Stone..."
    ));

    books.push(new Book(
        "The Fellowship of the Ring",
        "J.R.R. Tolkien",
        "Reading",
        "2023-09-20",
        "",
        432,
        200,
        "https://covers.openlibrary.org/b/isbn/9780547928210-L.jpg",
        "Frodo Baggins begins a quest to destroy the One Ring. The Fellowship faces perilous challenges to save Middle-earth..."
    ));

    books.push(new Book(
        "The Hobbit",
        "J.R.R. Tolkien",
        "Read",
        "2023-05-01",
        "2023-05-07",
        300,
        0,
        "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
        "Bilbo Baggins joins a group of dwarves to reclaim their homeland from a dragon. Along the way, he finds courage and a mysterious ring..."
    ));

    books.push(new Book(
        "Jane Eyre",
        "Charlotte Brontë",
        "To Read",
        "",
        "",
        507,
        507,
        "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg",
        "Orphaned Jane Eyre becomes a governess and falls for Mr. Rochester. Secrets at Thornfield Hall test her morality and love..."
    ));

    books.push(new Book(
        "The Alchemist",
        "Paulo Coelho",
        "Read",
        "2023-06-01",
        "2023-06-03",
        208,
        0,
        "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
        "Santiago dreams of finding treasure in Egypt and embarks on a journey. Along the way, he learns about life and following one's destiny..."
    ));

    books.push(new Book(
        "The Da Vinci Code",
        "Dan Brown",
        "Read",
        "2023-07-01",
        "2023-07-05",
        489,
        0,
        "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg",
        "Robert Langdon investigates a murder linked to secret societies. He uncovers hidden messages in Leonardo da Vinci's works..."
    ));

    books.push(new Book(
        "The Girl with the Dragon Tattoo",
        "Stieg Larsson",
        "To Read",
        "",
        "",
        465,
        465,
        "https://images.isbndb.com/covers/94/86/9780307949486.jpg",
        "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a disappearance. They uncover dark family secrets and corruption..."
    ));

    books.push(new Book(
        "The Hunger Games",
        "Suzanne Collins",
        "Read",
        "2023-08-01",
        "2023-08-03",
        374,
        0,
        "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg",
        "Katniss Everdeen volunteers for a televised fight to the death. She must survive against other tributes in a dystopian society..."
    ));

    books.push(new Book(
        "The Fault in Our Stars",
        "John Green",
        "Read",
        "2023-09-01",
        "2023-09-04",
        313,
        0,
        "https://covers.openlibrary.org/b/isbn/9780142424179-L.jpg",
        "Hazel and Augustus, both teenagers with cancer, fall in love. Together, they navigate love and loss with humor and honesty..."
    ));
}


initBookArr(books);

function getReadingBooks(booksArr) {
    // returns a map, key = book name, value = book object
    // TODO: use ISBN
    let readingBookMap = new Map();
    let a = booksArr.filter(book => {
        return book.status === "Reading";
    }).reduce((acc, curr) => {
       acc.set(curr.title, curr);
       return acc;
    }, readingBookMap);
    return a;
}
let readingBooks = getReadingBooks(books);

// let readingBookLength = readingBooks.size;


let main = document.querySelector(".latest-updates");
let scrollBarWrap = document.querySelector(".scroll-bar-wrap");
let leftScrollBtn = document.querySelector(".left-scroll");
let rightScrollBtn = document.querySelector(".right-scroll");
let scrollBar = document.querySelector(".scroll-bar-wrap");
let scrollClickCount = 0;

let classToPropertyMap = {
    "title": "title",
    "author": "author",
    "read-status": "status",
    "date-start": "dateStart",
    "date-finished": "dateFin",
    "total-pages": "totalPage",
    "page-left": "pageLeft",
    "book-cover": "coverImg",
    "summary": "summary",
};

let statusToIconMap = {
    "To Read": 0,
    "Reading": 1,
    "Read" : 2,
};

displayBooks(books);

function displayBooks(bookArr) {
    // console.log("in displayBooks(), ")
    displayReadingBooks(readingBooks);
    bookArr.forEach((book, bookCounter) => {
        // console.log(bookCounter);
        main.prepend(fillBookCard(book, bookCounter));
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
    actionDiv.innerHTML = `<span class="status-toggle material-symbols-outlined" title='toggle read status'>auto_stories</span>`;
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

function displayReadingBooks(bookMap) {
    bookMap.forEach((value,_) => {
        scrollBarWrap.prepend(fillScrollBook(value));
    });
}

function generateCard(bookCounter) {
    // generate elements
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let textInfo = document.createElement("div");
    textInfo.classList.add("text-info");

    let title = document.createElement("p");
    title.classList.add("title");

    let author = document.createElement("p");
    author.classList.add("author");

    let summary = document.createElement("p");
    summary.classList.add("summary");

    let icons = document.createElement("div");
    icons.classList.add("interact-icon", `book-${bookCounter}`);
    // icons.classList.add("book-0");

    let readStatusIcon = document.createElement("div");
    readStatusIcon.classList.add("read-status-icons");
    readStatusIcon.innerHTML = `<span class="material-symbols-outlined to-read" title="status: To Read">book_2</span><span class="material-symbols-outlined reading" title='status: Reading'>auto_stories</span><span class="material-symbols-outlined check-circle" title='status: Read'>check_circle</span>`;

    let deleteIcon = document.createElement("p");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.innerHTML = `<span class="material-symbols-outlined delete" title="Delete">delete_forever</span>`;

    let coverImg = document.createElement("img");
    coverImg.classList.add("book-cover");
    coverImg.setAttribute("src", "");

    // generate elements - ends

    // Append both icons to the icons container
    icons.append(readStatusIcon, deleteIcon);
    // console.log(readStatusIcon);
    // console.log(icons);
    textInfo.append(title, author, summary, icons);
    bookCard.append(coverImg, textInfo);

    // console.log(bookCard);
    return bookCard;
}


function fillBookCard(book, bookCounter) { //returns the filled bookCard div
    // for each bookcard div, fill in info of the book
    // the book is tracked by 'bookCount' param
    let bookCard = generateCard(bookCounter);
    for(let bookInfo of bookCard.childNodes) {
        let className = bookInfo.className;

        if (className === "book-cover") {
            bookInfo.setAttribute("src", book[classToPropertyMap[className]]);
        } else {
            for(let textInfo of bookInfo.childNodes) {
                let interactIconClsName = textInfo.className.split(" ")[0];
                // console.log(textInfo.className.split(" ")[0]);
                if (interactIconClsName === "interact-icon") {
                    // add highlight class to current reading status
                    console.log(book.status);
                    textInfo.childNodes[0].childNodes[statusToIconMap[book.status]].classList.add("highlight");
                }
                if (interactIconClsName !== "interact-icon") {
                    textInfo.textContent = book[classToPropertyMap[textInfo.className]];
                }
            }   
        }
    }
    return bookCard;
}

function updateBookStatus(htmlBookNum, newStatus) {
    // param - "book-0" "book-1" ...
    htmlBookNum = htmlBookNum.split("-")[1];

    books[+htmlBookNum].updateStatus(newStatus);
    scrollBarWrap.innerHTML = '';
    main.innerHTML = '';
    // console.log(books[+htmlBookNum]);
    rerender();
}

function rerender() {
    scrollBarWrap.innerHTML = '';
    main.innerHTML = '';
    displayBooks(books);
    setStatusToggle();
    setToReadBtn();
    setReadingBtn();
    setReadBtn();
    setDeleteBtn();
}

function setToReadBtn() {
    let toReadBtm = document.querySelectorAll(".to-read");
    // console.log(toReadBtm);
    toReadBtm.forEach(btn => {
        btn.addEventListener("click", () => {
            // console.log(btn.parentNode.parentElement.classList[1]);
            let htmlBookNum = btn.parentNode.parentElement.classList[1];
            let htmlBookName = btn.parentNode.parentElement.parentElement.childNodes[0].textContent;
            readingBooks.delete(htmlBookName);
            updateBookStatus(htmlBookNum, "To Read");
        })
    });  
}

function setReadingBtn() {
    let toReadBtm = document.querySelectorAll(".reading");
    // console.log(toReadBtm);
    toReadBtm.forEach(btn => {
        btn.addEventListener("click", () => {
            
            let htmlBookNum = btn.parentNode.parentElement.classList[1];
            let htmlBookName = btn.parentNode.parentElement.parentElement.childNodes[0].textContent;
            
            // add book to the begining of the scroll bar
            scrollBar.style.setProperty('--offset',`calc(-200px * 0)`);
            scrollClickCount = 0
            
            readingBooks.set(htmlBookName, books[htmlBookNum.split("-")[1]]);
            updateBookStatus(htmlBookNum, "Reading");
        })
    });  
}

function setReadBtn() {
    let toReadBtm = document.querySelectorAll(".check-circle");
    // console.log(toReadBtm);
    toReadBtm.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(btn.parentNode.parentElement.classList[1]);
            let htmlBookNum = btn.parentNode.parentElement.classList[1];
            let htmlBookName = btn.parentNode.parentElement.parentElement.childNodes[0].textContent;
            readingBooks.delete(htmlBookName);
            updateBookStatus(htmlBookNum, "Read");
            
            // update reading book array

        })
    });  
}

function setDeleteBtn() {
    let toReadBtm = document.querySelectorAll(".delete");
    toReadBtm.forEach(btn => {
        btn.addEventListener("click", () => {
            let htmlBookNum = btn.parentNode.parentElement.classList[1].split("-")[1];
            let htmlBookName = btn.parentNode.parentElement.parentElement.childNodes[0].textContent;
            readingBooks.delete(htmlBookName);
            books.splice(htmlBookNum, 1);
            scrollBarWrap.innerHTML = '';
            main.innerHTML = '';
            // console.log(books[+htmlBookNum]);
            rerender();
        })
    });  
}



setToReadBtn();
setReadingBtn();
setReadBtn();
setDeleteBtn();
setStatusToggle();

// theme toggle start

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

// theme toggle ends

// scroll bar start

leftScrollBtn.addEventListener("click", (event) => {
    let readingBookLength = readingBooks.size;
    event.preventDefault();
    // console.log(readingBookLength - 6);
    scrollClickCount--;
    // console.log(x);
    if (scrollClickCount < 0) {
        scrollClickCount = readingBookLength - 6;
    }
    scrollBar.style.setProperty('--offset',`calc(-200px * ${scrollClickCount})`);


})

rightScrollBtn.addEventListener("click", (event) => {
    let readingBookLength = readingBooks.size;
    event.preventDefault();
    // console.log(readingBookLength);
    scrollClickCount++;
    // console.log(x);
    if (scrollClickCount > readingBookLength - 6) {
        scrollClickCount = 0;
    }
    scrollBar.style.setProperty('--offset',`calc(-200px * ${scrollClickCount})`);
})

// status toggle functions for scrolling part only
function setStatusToggle() {
    let readStatusToggle = document.querySelectorAll('.status-toggle');
    readStatusToggle.forEach(toggle => {
        toggle.addEventListener('click', () => {
        let symbol = toggle.textContent;
        let bookName = toggle.parentElement.parentElement.childNodes[2].textContent;
        // console.log(toggleParent);
        // find the book from reading array
        updateBookScroll(bookName, 'Read');
        // console.log(readingBookLength);
        toggle.textContent = symbol == 'auto_stories' ? 'check_circle' : 'auto_stories';
    })});
}


function updateBookScroll(title, status) {
    readingBooks.delete(title);
    let book = books.filter(book => {
        return book.title === title;
    })[0];
    book.status = status;
    scrollBarWrap.innerHTML = '';
    main.innerHTML = '';
    rerender();
}

// scroll bar ends



// add new book start

let addNewBook = document.querySelector('.add-new-book');
let addBookDialog = document.querySelector('.add-book');
addNewBook.addEventListener("click", () => {
    addBookDialog.showModal();
});

let submitBtn = document.querySelector(".submit-wrapper");
let cancelBtn = document.querySelector(".cancel-wrapper");
let resetBtn = document.querySelector(".reset-wrapper");

resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let form = document.querySelector(".book-form");
    form.reset();
})

cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookDialog.close();
    let errorMsgDiv = document.querySelector(".error-msg");
    errorMsgDiv.classList.remove("msg-show");
    errorMsgDiv.classList.add("msg-hidden");

});

let title = {ele: document.querySelector("#title"),
    isValid: false,
};
let author = {ele: document.querySelector("#author"),
    isValid: false,
};
let totalPage = {ele: document.querySelector("#totalPage"),
    isValid: false,
};
let pageLeft = {ele: document.querySelector("#pageLeft"),
    isValid: false,
};
let coverUrl = {ele: document.querySelector("#coverImgUrl"),
    isValid: false,
};
let summary = {ele: document.querySelector("#summary"),
    isValid: false,
};
let bookStatus = {ele: document.querySelector("#status"),
    isValid: false,
};

let formElements = [title, author, totalPage, pageLeft, coverUrl, summary, bookStatus];
let isFormValid = false;

formElements.forEach((input) => {
    let ele = input.ele;

    ele.addEventListener("blur", (event) => {
        event.preventDefault();
        if (ele.value === "") {
            ele.setAttribute("style", "border: 2px solid var(--color-error);");
            // ele.classList.add("input-error");
            input.isValid = false;
        } else {
            ele.toggleAttribute("style");
            input.isValid = true;
        }

        if (ele.id === "coverImgUrl") {
            if (!isValidUrl(ele.value)) {
                ele.setAttribute("style", "border: 2px solid var(--color-error);");
                input.isValid = false;
            } else {
                ele.toggleAttribute("style");
                input.isValid = true;
            }
        }        
    })
});

// url check from: https://freecodecamp.org/news/check-if-a-javascript-string-is-a-url/

const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let errorMsgDiv = document.querySelector(".error-msg");
    let successMsgDiv = document.querySelector(".success-msg");
    let isFormGood = checkInputs(formElements);
    if (isFormGood.length > 0) {
        console.log("is not good")
        errorMsgDiv.classList.remove("msg-hidden");
        errorMsgDiv.classList.add("msg-show");
    } else {
        console.log("in success")
        successMsgDiv.classList.remove("msg-hidden");
        successMsgDiv.classList.add("success-msg-show");
        console.log(title.value);
        addBook();
        
        addBookDialog.close();

        setTimeout(() => {
            successMsgDiv.classList.add("msg-hidden");
            successMsgDiv.classList.remove("success-msg-show");
        }, 1250);
    }

});


function addBook() {
    let newBook = new Book(title.ele.value, author.ele.value, 
                            bookStatus.ele.value, null, null, 
                            totalPage.ele.value, pageLeft.ele.value, 
                            coverUrl.ele.value, summary.ele.value);
    console.log(newBook);
    books.push(newBook);
    console.log(books);
    if (bookStatus.ele.value === "Reading") {
        readingBooks = getReadingBooks(books);
    }
    rerender();
}

function checkInputs(eleArray) {
    let res = eleArray.filter(ele => {
        return ele.isValid === false;
    });
    return res;
}

// add new book ends
