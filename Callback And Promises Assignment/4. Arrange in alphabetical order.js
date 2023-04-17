const Books = [
    { title: "Vladimir", author: "Julia May Jonas", year: 2022 },
    { title: "Young Mungo", author: "Douglas Stuart", year: 2022 },
    { title: "Broken Glass", author: "Alain Mabanckou", year: 2005 },
    { title: "The Candy House", author: "Jennifer Egan", year: 2022 }
];

function extractBooksTitle(books, arrangeTitle){
    let myTitle = books.map(titles=>titles.title);
    arrangeTitle(myTitle);
};

function arrangeTitle(myTitle){
    // myTitle.sort();
    console.log(myTitle);
};

extractBooksTitle(Books, arrangeTitle);