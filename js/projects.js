// // --------------------------
// // GET PROJECTS ----------
// // --------------------------
//
//
//
//   var allProjects = [];
//
// $("#more-websites").on("click", function(){
//
//   console.log("we in the more websites");
//   $projectList = $('#main-content2');
//
//   $.ajax({
//     method: "GET",
//     url: 'https://dry-sierra-51475.herokuapp.com/api/projects',
//     success: handleSuccess
//   });
//
//
//   function getProjectHtml(project) {
//   return `<hr>
//           <p>
//             <h3 class="project-title">${project.title}</h3>
//             <span class="edit-input" style="display: none">
//               <input type="text" value="${project.title}" />
//               <button class="edit-project-submit-button" data-id="${project._id}">Save</button>
//             </span>
//             <button class="edit-project-button">Edit</button>
//             <br>
//             <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${project._id}>Delete</button>
//           </p>
//           `;
//   }
//
//
//   function getAllProjectsHtml(projects) {
//     console.log(projects);
//     return projects.map(el => getProjectHtml(el) ).join("");
//   }
//
//   function render () {
//
//     window.location.href = "./projects.html";
//     // empty existing posts from view
//     $projectList.empty();
//
//     // pass `allProjects` into the template function
//     var projectsHTML = getAllProjectsHtml(allProjects);
//
//     // append html to the view
//     $projectList.append(projectsHTML);
//   }
//
//
//
//   function handleSuccess(json) {
//     allProjects = json;
//     render();
//   }
//
//
// } );
