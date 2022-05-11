export function renderTeams(teamsToRender) {
  
    const container = document.querySelector(".product-container");
    container.innerHTML = "";

    for (let i = 0; i < json.length; i++){
        container.innerHTML += `<div class="team">
                                        <h4>${team.title}</h4>
                                    </div>`;
    };
}
