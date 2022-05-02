// write js code here corresponding to index.html
// You should add submit event on the form
form = document.querySelector("form").addEventListener("submit", function submit() {
    event.preventDefault();
    var schedule = JSON.parse(localStorage.getItem("schedule")) || []
    var obj = {
        MatchNumber: document.querySelector("#matchNum").value,
        TeamA: document.querySelector("#teamA").value,
        TeamB: document.querySelector("#teamB").value,
        Date: document.querySelector("#date").value,
        Venue: document.querySelector("#venue").value
    }
    schedule.push(obj)
    localStorage.setItem("schedule", JSON.stringify(schedule))
})