import { renderTeams } from "./renderTeams.js";

export function searchTeams(teams) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        // console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredTeams = teams.filter(function (team) {
            if (team.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderTeams(filteredTeams);
    };
}
