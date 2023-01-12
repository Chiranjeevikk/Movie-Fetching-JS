async function getMovies()
{   
    let search =document.querySelector(".search")
    console.log(search.value);
    let omdbmovies=await fetch(`https://www.omdbapi.com/?s=${search.value}&apikey=e13eac`)
    let{Search:movies}=await omdbmovies.json();
    
    console.log(movies);

    let section=document.getElementById("movie")

    for(let {Poster,Title,Year} of movies)
    {
        let div=document.createElement("div");
        div.className="card";

        let h2=document.createElement("h2");
        h2.innerText=Title

        let img=document.createElement("img");
        img.src=Poster;
        //img.alt="No Image"

        let h3=document.createElement("h3")
        h3.innerText=Year;

        div.append(h2)
        div.append(img)
        div.append(h3)
        section.append(div)
    }
}