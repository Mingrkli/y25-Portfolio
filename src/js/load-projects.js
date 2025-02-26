const projectsGrid = document.getElementById("projects-grid");

projectsData.forEach((project) => {
    let a = document.createElement("a");
    a.href = project.link;
    a.classList.add("project");
    a.classList.add("intractable");
    a.setAttribute("data-type", "link");
    a.target = "_blank";

    let div = `
    <img
        src="${project.img}"
        alt="Project Image"
    />

    <div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-subTitle">${project.subTitle}</p>
        <div class="project-skills"></div>
    </div>
    `;

    a.innerHTML += div;

    const projectSkills = a.querySelector(".project-skills");
    for (let i = 0; i < project.tags.length; i++) {
        projectSkills.innerHTML += `<img src="img/icons/${project.tags[i]}.png" alt="${project.tags[i]} Icon" />`;
    }

    projectsGrid.append(a);
});
