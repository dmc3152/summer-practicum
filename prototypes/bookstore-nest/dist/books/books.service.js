"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const books_mock_1 = require("../mocks/books.mock");
const books_repository_1 = require("./books.repository");
let BooksService = (() => {
    let BooksService = class BooksService {
        constructor(booksRepository) {
            this.booksRepository = booksRepository;
            this.books = books_mock_1.BOOKS;
        }
        getBooks() {
            return this.booksRepository.getBooks();
        }
        getBook(bookID) {
            const id = Number(bookID);
            return new Promise(resolve => {
                const book = this.books.find(book => book.id === id);
                if (!book) {
                    throw new common_1.HttpException('Book does not exist!', 404);
                }
                resolve(book);
            });
        }
        addBook(book) {
            return new Promise(resolve => {
                this.books.push(book);
                resolve(this.books);
            });
        }
        deleteBook(bookID) {
            const id = Number(bookID);
            return new Promise(resolve => {
                const index = this.books.findIndex(book => book.id === id);
                if (index === -1) {
                    throw new common_1.HttpException('Book does not exist!', 404);
                }
                this.books.splice(index, 1);
                resolve(this.books);
            });
        }
    };
    BooksService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [books_repository_1.BooksRepository])
    ], BooksService);
    return BooksService;
})();
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map