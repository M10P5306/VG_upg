let data;

function searchCharacter() {

    let search = document.getElementById("search-field").value.trim().toLowerCase();
    document.getElementById("search-results").innerHTML = "";

    if (search.length >= 2) {
        axios({method: 'GET', url: "https://swapi.info/api/people"}).then((response) => {
            data = response.data;

            console.log(data);
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].name.toLowerCase().includes(search)) {
                    const dropdown = document.getElementById("search-results");
                    const li = document.createElement("li");
                    li.textContent = response.data[i].name;
                    li.addEventListener("click", addCharacter)
                    dropdown.appendChild(li);
                }
            }

        })
    }

}

function addCharacter(e) {
    let chosenCharacter;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() == e.target.textContent.toLowerCase()) {
            chosenCharacter = data[i];
            break;}
    }
    document.getElementById("search-results").innerHTML = "";
    document.getElementById("search-field").value = "";

    const container = document.getElementById("card-container");
    const card = document.createElement("div");
    const name = document.createElement("h3");
    name.textContent = chosenCharacter.name;
    const description = document.createElement("p");
    description.textContent = "Gender:"+chosenCharacter.gender+"\nHairColor:"+chosenCharacter.hair_color+"\nHeight:"+chosenCharacter.height;
    card.appendChild(name);
    card.appendChild(description);
    card.addEventListener("click", () => {console.log("dickfart")});
    container.appendChild(card);
}

document.getElementById('search-field').addEventListener('keyup', searchCharacter);
