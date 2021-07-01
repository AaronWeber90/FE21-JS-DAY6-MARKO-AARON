// var sandwiches = `
// { "sandwich": "hamburger", "calories": "260" }`;
// var sandwichesObj = JSON.parse(sandwiches);


// var fries = `
// { "fries_size": "Large French Fries", "calories": "570" }`;
// var friesObj = JSON.parse(fries);


// // console.log(sandwiches);
// // console.log(sandwichesObj);
// // console.log(friesObj);

// document.write("My favortite sandwich is " + sandwichesObj.sandwich + " which has approximately " + sandwichesObj.calories + " calories, along with it I enjoy eating " + friesObj.fries_size + " which have about " + friesObj.calories + " calories.")



// EXERCISE 2


// let employees = `[{
//       "id": "01",
//       "first_name": "serri",
//       "last_name": "giath",
//       "email": "serri.giath@gmx.at",
//       "job_title": "Javasript Programmer",
//       "salary": "2000"
//     }, {
//       "id": "02",
//       "first_name": "Irati",
//       "last_name": "Lerreina",
//       "email": "irati.larreina@gmx.at",
//       "job_title": "Python Programmer",
//       "salary": "1900"
//     }, {
//         "id": "03",
//         "first_name": "Acilio",
//         "last_name": "Carraro",
//         "email": "acilio.carraro@gmx.at",
//         "job_title": "C++ Programmer",
//         "salary": "2100"
//       }
// ]`

// let employeesObj = JSON.parse(employees);

// var x = "";

// for (i = 0; i < employeesObj.length; i++) {
//     x += `<tr>
//     <td id="">${employeesObj[i].id}</td>
//     <td id="">${employeesObj[i].first_name}</td>
//     <td id="">${employeesObj[i].last_name}</td>
//     <td id="">${employeesObj[i].email}</td>
//     <td id="">${employeesObj[i].job_title}</td>
//     <td id="">${employeesObj[i].salary}</td></tr>`;
// }

// employeesObj.forEach((val, i) => {
//     x += `<tr><th scope="row" id=""></th>
//     <td id="">${employeesObj[i].id}</td>
//     <td id="">${employeesObj[i].first_name}</td>
//     <td id="">${employeesObj[i].last_name}</td>
//     <td id="">${employeesObj[i].email}</td>
//     <td id="">${employeesObj[i].salary}</td></tr>`;

//     x += `<tr><th scope="row" id=""></th>
//         <td id="">${val.id}</td>
//         <td id="">${val.first_name}</td>
//         <td id="">${val.last_name}</td>
//         <td id="">${val.email}</td>
//         <td id="">${val.salary}</td></tr>`;
// });

// for (let i in employeesObj){
//     x += `<tr><th scope="row" id=""></th>
//     <td id="">${employeesObj[i].id}</td>
//     <td id="">${employeesObj[i].first_name}</td>
//     <td id="">${employeesObj[i].last_name}</td>
//     <td id="">${employeesObj[i].email}</td>
//     <td id="">${employeesObj[i].salary}</td></tr>`;
// }

// for ( let val of employeesObj){
//     x += `<tr><th scope="row" id=""></th>
//     <td id="">${val.id}</td>
//     <td id="">${val.first_name}</td>
//     <td id="">${val.last_name}</td>
//     <td id="">${val.email}</td>
//     <td id="">${val.salary}</td></tr>`;
// }


// document.getElementById("tbody-person").innerHTML = x;


// EXERCISE 3 

console.log(books);

let booksObj = JSON.parse(books);

console.log(booksObj)

let a = "";


for (let i=0; i < booksObj.length; i++) {
    document.getElementById("book-div").innerHTML += `<p class="book-paragraph">${booksObj[i].title} by ${booksObj[i].author}</p><br><img src="${booksObj[i].img}"><br><br>`

    if (booksObj[i].read == false) {
        document.getElementsByClassName("book-paragraph")[i].style.background = "#c75f5f";
    } else {
        document.getElementsByClassName("book-paragraph")[i].style.background = "rgb(95, 199, 95)";
    }
}

