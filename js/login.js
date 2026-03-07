const frame = document.getElementById("contentFrame")

function loadPage(page,btn)
{
frame.src = page

document.querySelectorAll(".navbar button")
.forEach(b => b.classList.remove("active"))

btn.classList.add("active")
}