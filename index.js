let books = [];

let booktitle = document.querySelector('#book.title');
let bookauthor = document.querySelector('#book.author');
let booksubject = document.querySelector('#book.subject');
let booklang = document.querySelector('#book.lang');
let listOfBooks = document.querySelector('#list-of-bk');

let key = 'key'
let counter = 0

class Bookshelf {
    constructor(title, author, subject, lang, id) {
        this.title = booktitle.value;
        this.author = bookauthor.value;
        this.subject = booksubject.value;
        this.lang = booklang.value;
        this.id = key + ++counter
    }
}

let addButton = document.querySelector('#add-book-button');
let remove = document.createElement('button')

addButton.addEventListener('click', () => {
    listOfBooks.innerText = '';
    let instance = new Bookshelf

    books.push(instance)
    books.map((arr) => {
        let bk = document.createElement('a');
        let span = document.createElement('span');
        span.id = 'row' + counter;
        bk.innerText = arr.name;
        span.append(bk);
        listOfBooks.append(span);
    })
    console.log(books)
    booktitle.value = '';
    bookauthor.value = '';
    booksubject.value = '';
    booklang.value = '';
});
