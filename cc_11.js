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
