const section = document.getElementById("third");
const links = section.querySelectorAll("a");

links.forEach(link => {
  link.setAttribute("target", "_blank");
});