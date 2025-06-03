function searchCharacter() {
    let search = document.getElementById("search-field").value.trim().toLowerCase();
    console.log(search);
    if (search.length >= 2) {
        axios({method: 'GET', url: "https://swapi.info/api/people"}).then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].name.toLowerCase().includes(search)) {
                    console.log(response.data[i]);
                }
            }

        })
    }

}

document.getElementById('search-field').addEventListener('keyup', searchCharacter);
