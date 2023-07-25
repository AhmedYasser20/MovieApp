const apiKey = "api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc&";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const apiUrl = url + path + apiKey;

var x;
const mainOfpage = document.getElementById("MainClass");
const mainofDetails=document.getElementById("MainClassDetails");
function getMovie(URLL) {
    fetch(URLL)
    .then((res) => res.json())
    .then((data) => {
        x = data.results;
        console.log(x);
        showMovie(x);
    });
}

function showMovie(MovieTable){
    MovieTable.forEach(element => {
        const {title,poster_path,id} = element;
        const movieElement=document.createElement('div');
        movieElement.classList.add("poster");
        movieElement.innerHTML=`
            <a href="details.html?id=${id}">
            <div class="moviePoster"><img
                    src="${imgUrl+poster_path}"
                    alt="${title}" width="300" height="350">
            </div>
            </a>
            <div class="MoiveTitle">
                
                <h3>${title}</h3>
            </div>
            
        `;
        mainOfpage.appendChild(movieElement);
    });
}
if(mainOfpage!=null)
getMovie(apiUrl);

var movieId=location.search.split('=')[1];
function ShowDetails(URLL){
    fetch(URLL)
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach(element => {
            if(element.id==movieId){
                const {title,poster_path,overview} = element;
                const movieElement=document.createElement('div');
                movieElement.classList.add("MakeItFlex");
                movieElement.innerHTML=`
                <div class="moviePoster"><img
                    src="${imgUrl+poster_path}"
                    alt="${title}" width="300" height="350">
                   
                 </div>
                 <div>
                 <h2 style="color: white">${title}</h2>
                 <h3 style="color: white">${overview}</h3>
                 </div>
                `;
                mainofDetails.appendChild(movieElement);
            }
        });
        
    });
}

ShowDetails(apiUrl);
