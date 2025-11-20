let ideas = [];

function login() {
  const username = document.getElementById("usernameInput").value;
  if (!username) return alert("Enter your name first!");

  localStorage.setItem("username", username);

  document.getElementById("loginSection").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
}

function toggleForm() {
  document.getElementById("ideaForm").classList.toggle("hidden");
}

function addIdea() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const skills = document.getElementById("skills").value;
  const status = document.getElementById("status").value;

  if (!title || !desc) return alert("Please fill all fields");

  const newIdea = {
    id: Date.now(),
    title,
    desc,
    skills,
    status,
    owner: localStorage.getItem("username")
  };

  ideas.push(newIdea);
  displayIdeas();
  toggleForm();
}

function displayIdeas() {
  const container = document.getElementById("ideasContainer");
  container.innerHTML = "";

  ideas.forEach(idea => {
    const card = document.createElement("div");
    card.className = "idea-card";
    card.innerHTML = `
      <h3>${idea.title}</h3>
      <p>${idea.desc}</p>
      <p><b>Skills Needed:</b> ${idea.skills}</p>
      <p><b>Status:</b> ${idea.status}</p>
      <p><i>Posted by: ${idea.owner}</i></p>
      <button onclick="requestJoin('${idea.title}')">Request to Join</button>
    `;
    container.appendChild(card);
  });
}

function requestJoin(projectTitle) {
  alert("Join request sent for: " + projectTitle);
}