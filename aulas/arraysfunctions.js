const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//////////////////////////////////////////////ForEach
//Passando por todo array usando for:
//   for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
//   }

// Passando por todo array usando forEach
//   companies.forEach(function(company) {
//       console.log(company)
//   })

//////////////////////////////////////////////Filter
//Usando filtro com for 
//   let canDrinnk = [];
//   for(let i = 0; i<ages.length; i++) {
//       if(ages[i] >= 21){
//           canDrinnk.push(ages[i]);
//       }
//   }
//     console.log(canDrinnk)
  
//Usando metodo filter
//   const canDrinnk = ages.filter(function(age){
//       if(age >= 21){
//           return true;
//       }
//   })
// sem function
//   const canDrinnk = ages.filter(age => age >=21) 
//   console.log(canDrinnk)

// // filter retail companies
// const retailCompanies = companies.filter (company => company.category === 'Retail')
// console.log(retailCompanies)

// filter 80s companies
// const eigthsCompanies = companies.filter (company => company.start >=1980 && company.start <= 1989)
// console.log(eigthsCompanies)

// que durou mais de 10 anos
// const tenYearsCompanies = companies.filter (company => company.end - company.start >= 10)
// console.log(tenYearsCompanies)

//////////////////////////////////////////////Map

//create array of company names
// const companyNames = companies.map (names => names.name)
// console.log(companyNames)

//raiz quadrada das idades
// const agesSquare = ages.map(age => Math.sqrt(age))
// console.log(agesSquare)

////////////////////////////Sort
//ordenando por data de inicio
// const sortedCompanies = companies.sort(function(a,b) {
//     if(a.start > b.start) {
//         return 1
//     } else {
//         return -1
//     }
// })

// const sortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1)
// console.log(sortedCompanies)

//odernar idade
// const sortAges = ages.sort((a,b) => a - b);
// console.log(sortAges)

////////////////////////////////////////////Reduce

//com for
// let ageSum = 0
// for( let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum)
//com reduce
// const ageSum = ages.reduce((total, age)=> total + age, 0)
// console.log(ageSum)

//total das companhias
const totalYears = companies.reduce((total, company) => total +  (company.end- company.start), 0)
console.log(totalYears)
