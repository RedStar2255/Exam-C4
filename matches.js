// write js code here corresponding to matches.html
schedule = JSON.parse(localStorage.getItem("schedule"))

displayData(schedule)
tbody = document.querySelector("#tbody")


function displayData(schedule) {
    schedule.forEach(function elem() {
        console.log(elem.MatchNumber)
        tr = document.createElement("tr")

        td1 = document.createElement("td")
        td1.innerText = elem.MatchNumber
        td1.setAttribute("class", "num")

        td2 = document.createElement("td")
        td2.innerText = elem.TeamA
        td2.setAttribute("class", "A")

        td3 = document.createElement("td")
        td3.innerText = elem.TeamB
        td3.setAttribute("class", "B")

        td4 = document.createElement("td")
        td4.innerText = elem.Date
        td4.setAttribute("class", "date")

        td5 = document.createElement("td")
        td5.innerText = elem.Venue
        td5.setAttribute("class", "venue")

        td6 = document.createElement("td")
        td6.innerText = "Favourites"
        td6.setAttribute("class", "fav")
        td6.addEventListener("click", click)

        tr.append(td1, td2, td3, td4, td5, td6)

        tbody.append(tr)
    })

}

function click() {
    value = event.target.parentNode
    var favourites = JSON.parse(localStorage.getItem(favourites)) || []
    var obj = {
        MatchNumber: value.querySelector(".num").value,
        TeamA: value.querySelector(".A").value,
        TeamB: value.querySelector(".B").value,
        Date: value.querySelector(".date").value,
        Venue: value.querySelector(".venue").value
    }
    favourites.push(obj)
    localStorage.setItem("favourites", JSON.stringify(favourites))
}