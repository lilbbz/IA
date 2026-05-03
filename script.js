function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function handleForm(event, type) {
  event.preventDefault();
  alert(type + " form submitted successfully!");
}
Add Sound effect
