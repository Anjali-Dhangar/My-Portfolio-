window.onload = function () {
  alert("Welcome to My Portfolio Website !")
};
const links = 
  Document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", function (e)
                        
