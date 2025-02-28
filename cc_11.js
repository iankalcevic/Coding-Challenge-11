// Task 1 - Creating a book class

class Book {
    constructor(title, author, isbn, copies) {
    this.title = title; //Title of book
    this.author = author; //Book author
    this.isbn = isbn; //ISBN of book
    this.copies = copies; //Copies available
    }; //Creating a book class

    getDetails() {
    return 'Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}';
    }; //Return book details

    updateCopies(quantity) {
        this.copies += quantity;
    }; //Update number of available copies

}; 

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2 - Creating a borrower class 

class Borrower {
    constructor(name, borrowerId) {
        this.name = name; //Name
        this.borrowerID = borrowerId; //Borrower Id
        this.borrowedBooks = []; //Borrowed books array
    }; //Borrowers in the book system

    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle);
    }; //Add borrowed book

    returnBook(bookTitle) {
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);
    }; //Removes returned books from borrowed books
};

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []
