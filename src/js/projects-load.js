// const projectsGrid = document.querySelector("#projectsGrid");

// // For each project in the data, we'll create an element which can be clicked for a cool animation expand :D
// projectsData.forEach((project) => {
//     let div = document.createElement("div");
//     div.classList.add("project");
//     div.classList.add("intractable");
//     div.setAttribute("data-type", "expand");

//     let inner = `
//         <div>${project.title}</div>
//         <img src="${project.img}" />
//     `;

//     div.innerHTML = inner;

//     projectsGrid.append(div);

//     div.addEventListener("click", (e) => {
//         // Gets the amount of the tags
//         let tags = "";

//         // Checks to see if there is any tags
//         if (project && project.tags && project.tags.length !== 0) {
//             project.tags.forEach((tag) => {
//                 tags += `<h4>${tag}</h4>`;
//             });
//         }

//         // Change the information in the projectsPopup
//         projectInfo.innerHTML = `
//         <a href="${project.popup.link}" id="projectsImg" target="_blank">
//             <img
//                 src="${project.img}"
//                 class="intractable"
//                 data-type="link"
//             />
//         </a>
//         <div>
//             <div id="projectTags">
//                 ${tags}
//             </div>
//             <h4 id="projectMates">${project.client}</h4>
//         </div>
//         <p id="projectDescription">
//             ${project.popup.subDesc}
//         </p>
//         `;
//         projectName.innerHTML = project.title;

//         // Changing the size
//         const targetRect = e.target.getBoundingClientRect();
//         projectsPopup.style.width = `${targetRect.width}px`;
//         projectsPopup.style.height = `${targetRect.height}px`;
//         projectsPopup.style.top = `${targetRect.top}px`; // Position from the top of the viewport
//         projectsPopup.style.left = `${targetRect.left}px`; // Position from the left of the viewport

//         // after a bit, expand the screen
//         setTimeout(() => {
//             projectsPopup.style.width = `100%`;
//             projectsPopup.style.height = `100%`;
//             projectsPopup.style.top = 0;
//             projectsPopup.style.left = 0;
//             projectsPopup.style.borderRadius = 0;
//             projectsPopup.style.padding = "1rem";
//         }, 500); // delays .5 sec
//     });
// });
