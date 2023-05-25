const jokebutton = document.getElementById("jokebutton");
jokebutton.addEventListener("click", getJoke)

const p_joke = document.getElementById("pJoke")

function getJoke(e) {
    fetch(
        `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,explicit&type=single`,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {

            //console.log(`${response.joke}`)
            let joke = response.joke
            p_joke.innerHTML = joke;


        })
        .catch(error => console.log(error));
}

