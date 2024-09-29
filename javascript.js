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
}

let books = []; // last add, first in array
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
        "https://covers.openlibrary.org/b/isbn/9781250169440-L.jpg",
        "In the summer of 1983, on the Italian Riviera, a romantic bond forms between a 17-year-old boy and a visiting scholar. Their relationship unfolds amidst sun-drenched days and intellectual pursuits. As the summer ends, they grapple with the intensity of their feelings..."
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
        "When America's First Son falls in love with the Prince of Wales, their secret relationship could derail both nations. Amid political intrigue and media scrutiny, they navigate the challenges of love in the public eye. Their story unfolds with humor, heart, and hope..."
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
        "A retelling of the epic tale of Achilles and Patroclus during the Trojan War. The novel explores their deep friendship and the challenges they face amidst war and prophecy. As destiny unfolds, their bond is tested in profound ways..."
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
        "Two teenage boys, Aristotle and Dante, form an unlikely friendship that changes their lives. Through their journey, they confront issues of identity, family, and love. Together, they discover the truths of the universe and themselves..."
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
        "Set in 1950s Paris, an American man grapples with his sexuality and relationships. He becomes involved with an Italian bartender named Giovanni. The novel delves into themes of love, identity, and societal expectations..."
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
        "Orlando, a young nobleman in Elizabethan England, mysteriously transforms into a woman and lives for centuries. The story explores gender, identity, and societal roles across time. Woolf's novel is a whimsical journey through history and self-discovery..."
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
        "In 1950s New York, a young sales clerk, Therese, becomes infatuated with an elegant older woman, Carol. Their forbidden romance challenges societal norms and leads them on a cross-country journey. Facing obstacles and scrutiny, they must decide the price they're willing to pay for love..."
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
        "After her parents' death, Cameron Post is sent to live with her conservative aunt in Montana. When her sexuality is discovered, she is sent to a conversion therapy camp. The novel follows her journey of self-acceptance and resilience..."
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
        "Sixteen-year-old Simon Spier is trying to keep his sexuality a secret while corresponding with an anonymous classmate online. When his emails fall into the wrong hands, he's blackmailed into playing wingman for his classmate. Simon must find a way to step out of his comfort zone without losing his friends or his chance at happiness..."
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
        "A graphic memoir exploring Alison Bechdel's complex relationship with her father. Through themes of family, identity, and sexuality, she uncovers secrets and truths about her upbringing. The narrative weaves together past and present in a poignant reflection..."
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
        "Set in early 20th-century England, Maurice Hall struggles with his sexuality in a repressive society. He seeks love and acceptance amidst societal expectations and personal turmoil. The novel challenges norms and advocates for authenticity..."
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
        "Liza and Annie meet at the Metropolitan Museum of Art and quickly form a deep connection. As their relationship grows, they face challenges from their families and school. Their story is one of first love and the courage to be true to oneself..."
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
        "In a gay-friendly small town, Paul navigates high school life and love. He meets Noah, the boy of his dreams, but complications arise. Amidst friendships and misunderstandings, Paul strives to win Noah's heart..."
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
        "Darius Kellner, a tea-loving teenager, visits Iran for the first time to meet his grandparents. Struggling with depression and feeling out of place, he befriends Sohrab, who helps him connect with his heritage. Their friendship becomes a transformative experience for Darius..."
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
        "Monty, a young British lord, embarks on a grand tour of Europe with his sister and best friend, Percy. Expecting a year of pleasure, he becomes entangled in a manhunt across the continent. Adventures ensue as Monty confronts danger, his feelings for Percy, and his own identity..."
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
        "In the Deep South during the 1930s, young Scout Finch witnesses racial injustice in her small town. Her father, Atticus Finch, defends a black man accused of a crime he didn't commit. Through her eyes, the novel explores themes of morality, prejudice, and compassion..."
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
        "In a dystopian future, Winston Smith lives under the oppressive regime of Big Brother. He begins to question the Party's absolute control over truth and individuality. As he seeks freedom, he becomes entangled in a dangerous rebellion..."
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
        "Elizabeth Bennet navigates society, family expectations, and misunderstandings with the proud Mr. Darcy. Their initial animosity slowly transforms as they confront their own prejudices. The novel is a witty exploration of love, class, and social norms..."
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
        "Set in the Roaring Twenties, Nick Carraway becomes entangled in the lavish world of Jay Gatsby. Gatsby's obsession with the elusive Daisy Buchanan leads to tragedy. The novel examines themes of wealth, love, and the American Dream..."
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
        "Teenager Holden Caulfield recounts his experiences in New York City after being expelled from prep school. Disillusioned by adulthood, he searches for authenticity and meaning. His journey is a raw exploration of teenage angst and alienation..."
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
        "Captain Ahab obsessively hunts the white whale, Moby Dick, across the seas. Ishmael narrates this epic tale of vengeance and fate. The novel delves into themes of obsession, humanity, and the natural world..."
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
        "Harry Potter discovers he is a wizard on his eleventh birthday and attends Hogwarts School of Witchcraft and Wizardry. He makes friends and uncovers the mystery of the Sorcerer's Stone. The adventure begins as he confronts dark forces in the magical world..."
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
        "Frodo Baggins inherits the One Ring and embarks on a perilous journey to destroy it. Along with the Fellowship, he faces immense dangers to save Middle-earth from darkness. Their quest tests their courage and unity against overwhelming odds..."
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
        "Bilbo Baggins, a hobbit, is recruited by Gandalf and a group of dwarves for an unexpected adventure. They seek to reclaim the dwarves' homeland from the dragon Smaug. Along the way, Bilbo discovers courage and a mysterious ring..."
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
        "Orphaned Jane Eyre becomes a governess at Thornfield Hall, where she meets the enigmatic Mr. Rochester. Secrets and hidden truths test their relationship. Jane's journey is one of self-respect, morality, and love..."
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
        "Santiago, a shepherd boy, dreams of finding a hidden treasure in Egypt. His journey becomes a quest for personal legend and spiritual enlightenment. Along the way, he learns valuable lessons about life and destiny..."
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
        "Symbologist Robert Langdon becomes embroiled in a mysterious murder at the Louvre. He uncovers a trail of clues linked to Leonardo da Vinci's works. The novel is a fast-paced thriller involving secret societies and hidden histories..."
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
        "Journalist Mikael Blomkvist teams up with hacker Lisbeth Salander to investigate a decades-old disappearance. They uncover dark family secrets and corruption. The story is a gripping mystery with complex characters..."
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
        "In a dystopian future, Katniss Everdeen volunteers for a televised fight to the death. Representing her district, she must survive against other tributes. The novel explores themes of survival, sacrifice, and rebellion..."
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
        "Teenagers Hazel Grace Lancaster and Augustus Waters meet at a cancer support group. Their shared experiences lead to a profound and heartfelt romance. Together, they navigate love and loss with humor and honesty..."
    ));
}

initBookArr(books);

function getReadingBooks() {
    return books.filter((book) => {
        return book.status === 'Reading';
    });
    // console.log(reading);
}

let readingBooks = getReadingBooks();

// console.log(readingBooks);
let readingBookLength = readingBooks.length;



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
    "summary": "summary",
};

let statusToIconMap = {
    "To Read": 0,
    "Reading": 1,
    "Read" : 2,
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

function generateCard() {
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

    // Icons - status (expand on hover) | delete
    let icons = document.createElement("div");
    icons.classList.add("interact-icon");

    let readStatusIcon = document.createElement("div");
    readStatusIcon.classList.add("read-status-icons");
    readStatusIcon.innerHTML = `<span class="material-symbols-outlined to-read">book_2</span><span class="material-symbols-outlined reading">auto_stories</span><span class="material-symbols-outlined check-circle">check_circle</span>`;
    // console.log(readStatusIcon);
    let deleteIcon = document.createElement("p");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.innerHTML = `<span class="material-symbols-outlined delete">delete_forever</span>`;

    let coverImg = document.createElement("img");
    coverImg.classList.add("book-cover");
    coverImg.setAttribute("src", "");

    // Append both icons to the icons container
    icons.append(readStatusIcon, deleteIcon);
    // icons.textContent = "123";
    // console.log(icons);
    // textInfo.append(readStatusIcon);
    // console.log(icons);
    // console.log(textInfo);
    // Build the card structure
    textInfo.append(title, author, summary, icons);
    bookCard.append(coverImg, textInfo);

    // console.log(bookCard);
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
                if (textInfo.className === "interact-icon") {
                    // add highlight class to current reading status
                    textInfo.childNodes[0].childNodes[statusToIconMap[book.status]].classList.add("highlight");
                }
                if (textInfo.className !== "interact-icon") {
                    textInfo.textContent = book[classToPropertyMap[textInfo.className]];
                }
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
        // TODO: the order in this array should be the same as readingBooks[]
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