const books = [
   { title: "Blue Sisters", authorName: "Coco Mellors", releaseYear: 2024 },
   { title: "I Will Teach You to Be Rich", authorName: "Ramit Sethi", releaseYear: 2009 },
   { title: "Atmosphere", authorName: "Taylor Jenkins Reid", releaseYear: 2025 },
   { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 }
];

function sortByYear(book1, book2) {
   if (book1.releaseYear < book2.releaseYear) {
      return -1;
   } else if (book1.releaseYear > book2.releaseYear) {
      return 1;
   } else return 0;
}

const filteredBooks = books.filter((book) => book.releaseYear <= 2010);
filteredBooks.sort(sortByYear);