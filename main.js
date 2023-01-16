let str = `
010-1234-5678
thesecond@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

    // const h = `  the hello  world   !
    
    // `;

    console.log(str.match(/.{1,}(?=@)/gim))
    console.log(str.match(/.{1,}(?<=@)/gim))
    console.log(str.match(/(?<=@).{1,}/gim))
    // console.log(h.match(/\s/g))
    // console.log(h.replace(/\s/g, ''))
    // console.log(h.replace(/\s/g, ''))

    // console.log(str.match(/\d/g));
    // console.log(str.match(/\d{1,}/g));
    // console.log(str.match(/\s/g));
    // console.log(str.match(/\w/g));
    // console.log(str.match(/\b/g));
    // console.log(str.match(/\bf\w{1,}\b/g));
    // console.log(str.match(/[fox]/g));
    // console.log(str.match(/[0-9]/g));
    // console.log(str.match(/[0-9]{1,}/g));
    // console.log(str.match(/[가-힣]{1,}/g));
    //console.log(str.match(/\w{2,3}/g));
    //console.log(str.match(/\b\w{2,3}\b/g));
//const regexp = new RegExp('the', 'gi');

// const regexp = /fox/gi;
// console.log(str.match(regexp))
// console.log(str.replace(regexp, 'hee'))
// str = str.replace(regexp, 'hee')
// console.log(regexp.test(str))
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/the/gi))

// console.log(str.match(/./gi));
// console.log(str.match(/\./gi));
// console.log(str.match(/\.$/gi));
// console.log(str.match(/\.$/gim));

// console.log(str.match(/./g));
// console.log(str.match(/http/g));
// console.log(str.match(/h..p/g));
// console.log(str.match(/fox|dog/g));
// console.log(str.match(/https?/g));
