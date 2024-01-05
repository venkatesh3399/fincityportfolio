function addProject(event) {
    event.preventDefault();

    const projectName = document.getElementById("projectName").value;
    const projectLink = document.getElementById("projectLink").value;
    const projectDescription = document.getElementById("projectDescription").value;

    if (projectName && projectLink && projectDescription) {
        const projectsContainer = document.querySelector('.card-container');

        const newCard = document.createElement('div');
        newCard.classList.add('card-view');
        newCard.innerHTML = `
            <div>
                <h3>${projectName}</h3>
                <p style="color: grey;">${projectDescription}</p>
                <button class="project-view-btn">View Project</button>
            </div>
            <div>
                <img src="${projectLink}" class="card-image" />
            </div>
        `;

        projectsContainer.appendChild(newCard);

        document.getElementById("projectName").value = '';
        document.getElementById("projectLink").value = '';
        document.getElementById("projectDescription").value = '';
    }
}

function scrollToProjects() {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
        projectsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}