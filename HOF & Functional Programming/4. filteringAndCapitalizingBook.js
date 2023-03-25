const booksDetails=[
    {title:'A Better India A Better World', author:'Narayana Murthy', year:2011},
    {title:'A Passage to India', author:'E.M. Foster', year:1924},
    {title:'Letting Go', author:'Philip Roth', year:1997},
    {title:'Fear of Flying', author:'Erica Jong', year:1973},
    {title:'What a Dog Knows', author:'Susan Wilson', year:2022},
    {title:'An Island at War', author:'Deborah Carr', year:2021}
]

console.log(
    booksDetails.filter((book)=>book.year<=2010).map((book)=>{
       return {title:book.title,
        author:book.author.toUpperCase(),
        year:book.year}

    })
)