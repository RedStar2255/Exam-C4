// write js code here corresponding to favourites.html
favourites = JSON.parse(localStorage.getItem("favourites"))
console.log(favourites)
displayData(favourites)

function displayData(favourites) {
    favourites.forEach(function elem() {
        tr = document.createElement("tr")

        td1 = document.createElement("td")
        td1.innerText = elem.MatchNumber

        td2 = document.createElement("td")
        td2.innerText = elem.TeamA

        td3 = document.createElement("td")
        td3.innerText = elem.TeamB

        td4 = document.createElement("td")
        td4.innerText = elem.Date

        td5 = document.createElement("td")
        td5.innerText = elem.Venue

        td6 = document.createElement("td")
        td6.innerText = "Delete"
        td6.setAttribute("class", "delete")
        td6.addEventListener("click", click)

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("#tbody").append(tr)

    })

    function click() {
        favourites.splice(index, 1)
        localStorage.setItem("favourites", JSON.stringify(favourites));
        window.location.reload
    }
}