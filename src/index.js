fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(moviesData => {
        // console.log(moviesData)
        moviesData.forEach(movie => {
            createMovieListNav(movie)
        })
        buildMovieInfoDiv(moviesData[0])
        hookupWatchedButton()
        hookupBloodForm()
    })

const movieList = document.getElementById('movie-list')
function createMovieListNav(movie){
    const pic = document.createElement('img')
    pic.src = movie.image
    movieList.appendChild(pic)

    pic.addEventListener('click', (e)=>{
        // console.log('click')
        buildMovieInfoDiv(movie)
    })
}

const detailImage = document.getElementById('detail-image')
const title = document.getElementById('title')
const yearReleased = document.getElementById('year-released')
const description = document.getElementById('description')
const watched = document.getElementById('watched')
const amount = document.getElementById('amount')
// console.log(detailImage, title, yearReleased, description, watched, amount)
let currentMovie;
function buildMovieInfoDiv(movie){
    currentMovie = movie
    detailImage.src = movie.image
    title.textContent = movie.title
    yearReleased.textContent = movie.release_year
    description.textContent = movie.description
    watched.textContent = movie.watched ? 'Watched' : 'Unwatched'
    amount.textContent = movie.blood_amount
}

let watchedButton = document.getElementById('watched')
function hookupWatchedButton(){
    watchedButton.addEventListener('click', (e)=>{
        // console.log('click')
        if(currentMovie.watched === true){
            currentMovie.watched = false
        }else{
            currentMovie.watched = true
        }
        if(currentMovie.watched === true){
            watchedButton.textContent = 'Watched'
        }else{
            watchedButton.textContent = 'Unwatched'
        }
    })
}

let bloodForm = document.getElementById('blood-form')

function hookupBloodForm(){
    bloodForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        // console.log('submit')
        let addBlood = e.target['blood-amount'].value
        currentMovie.blood_amount += parseInt(addBlood)
        amount.textContent = currentMovie.blood_amount
        e.target.reset()
    })
}






//Instructions #1:
//1. fetch content using forEach statement.
//2. include function(s) within fetch.
//3. create function for movie list and add to fetch (per step 2).
//4. grab 'movie-list' id; create variable for 'img'; connect image to pic variable; appendChild to 'movie-list'.
//Instructions #2:
//1. create function for side movie info that grabs index 0, and include in fetch.
//Instructions #3:
//1. create function; grab id's for 'detail-image', 'title', 'year-released', 'description', 'watched', and 'blood-amount'.
//1. connect img and textContent to each new variable.
//3. create empty variable 'currentMovie' globally; add value 'movie'(item) to variable within this function.  <--solution.
//Instructions #4:
//1. create watched button function and place in fetch.
//2. grab 'watched' id and addEventListener ('click').
//3. use 'currentMovie' variable in if/else statement to toggle between watched/unwatched(if condition === true, condition = false, else condition is true).
//4. set textContent(if currentMovie.watched === true, textContent = 'watched', else textContent = 'unwatched).
//Instructions #5:
//1. create form function and add to fetch.
//2. grab 'blood-form' and place in variable; create eventListener for submit.
//3. use event.preventDefault() (to prevent form from defaulting to empty).
//4. create amount to add variable = event.target['#blood-amount].value
//5. create equation: currentMovie.blood_amount += parseInt(amountToAdd).
//6. chain 'amount' from movie-info section to textContent and equal it to currentMovie.blood_amount.
//7. add: event.target.reset(); (to reset form).

// let currentMovie;

// fetch('http://localhost:3000/movies')
//     .then(response => response.json())
//     .then(moviesData => {
//         // console.log(moviesData)
//         moviesData.forEach(movie => {
//             createMovieListNav(movie)
//         })
//         createSideMovieInfo(moviesData[0])
//         hookupWatchedButton()
//         createBloodForm()
//     })

// let movieList = document.getElementById('movie-list')
// // console.log(movieList)
// function createMovieListNav(movie){
//     let pic = document.createElement('img')
//     pic.src = movie.image
//     movieList.appendChild(pic)

//     pic.addEventListener('click', (e) => {
//         createSideMovieInfo(movie)
//     })
// }


// function createSideMovieInfo(movie){
//     currentMovie = movie

//     let pic = document.getElementById('detail-image')
//     pic.src = movie.image

//     let title = document.getElementById('title')
//     title.textContent = movie.title

//     let yearReleased = document.getElementById('year-released')
//     yearReleased.textContent = movie.release_year

//     let description = document.getElementById('description')
//     description.textContent = movie.description

//     let watched = document.getElementById('watched')
//     watched.textContent = movie.watched ? 'Watched' : 'Unwatched'

//     let bloodAmount = document.getElementById('amount')
//     bloodAmount.textContent = movie.blood_amount
    
//     // console.log(pic, title, yearReleased, description, watched, bloodAmount)
// }

// function hookupWatchedButton(){
//     let watchedButton = document.getElementById('watched')
//     watchedButton.addEventListener('click', (e)=>{
//         if(currentMovie.watched === true){
//             currentMovie.watched = false
//         }else{
//             currentMovie.watched = true
//         }
//         if(currentMovie.watched === true){
//             watchedButton.textContent = 'Watched'
//         }else{
//             watchedButton.textContent = 'Unwatched'
//         }
//     })
// }

// function createBloodForm(){
//     let amount = document.getElementById('amount')
//     let input = document.getElementById('blood-amount')
//     let button = document.getElementById('button')
//     button.addEventListener('click', (e)=> {
//         const addAmount = input.value
//         currentMovie.blood_amount += parseInt(addAmount)
//         amount.textContent = currentMovie.blood_amount
//         e.target.reset()
//     })
// }


// version with Mohamed:
// function createBloodForm(){
//     const amount = document.getElementById('amount');
//     const input = document.getElementById('blood-amount');
//     const button = document.getElementById('button');
//     button.addEventListener('click', (e) => {
//         const addAmount = input.value; 
//         currentMovie.blood_amount += parseInt(addAmount);
//         amount.textContent = currentMovie.blood_amount;
//     })
// }

//version with Brandon:
// function createBloodForm(){
//     const bloodForm = document.getElementById('blood-form')
//     const amount = document.getElementById('amount')
//     bloodForm.addEventListener('submit', (e) => {
//         e.preventDefault()
//         const addAmount = e.target['blood-amount'].value
//         currentMovie.blood_amount += parseInt(addAmount)
//         amount.textContent = currentMovie.blood_amount
//         e.target.reset()
//     })
// }



// worked on below with Brandon.

// function createWatchedButton(){
//     let watched = document.getElementById('watched')
//     watched.addEventListener('click', (e) => {
//         if(currentMovie.watched === true){  //set value to what we want; toggle.
//             currentMovie.watched = false
//         }else{
//             currentMovie.watched = true
//         }
//         if(currentMovie.watched === true){  //change text to what it should say.
//             watched.textContent = 'Watched'
//         }else{
//             watched.textContent = 'Unwatched'
//         }
//     })
// }


// function createBloodForm() {
//     const bloodForm = document.querySelector("#blood-form");
//     bloodForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const amountToAdd = event.target["blood-amount"].value;
//         currentMovie.blood_amount += parseInt(amountToAdd);

//         document.querySelector("#amount").textContent = currentMovie.blood_amount;

//         event.target.reset();
//     })
// } 

//worked on above with Brandon.

