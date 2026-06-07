const savedName = localStorage.getItem("friendsUserName");

if (!savedName) {
  const name = prompt("¿Cómo es tu nombre?");

  if (name && name.trim() !== "") {
    localStorage.setItem("friendsUserName", name.trim());
  }
}

const userName = localStorage.getItem("friendsUserName");

if (userName) {
  const welcomeMessage = document.createElement("p");
  welcomeMessage.className = "welcome-message";
  welcomeMessage.textContent = `Hola ${userName}, bienvenida a la página tributo de Friends 💛`;

  const heroText = document.querySelector(".hero-text");

  if (heroText) {
    heroText.insertAdjacentElement("afterend", welcomeMessage);
  }
}