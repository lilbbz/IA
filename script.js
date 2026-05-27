function gotopage(){
    window.location.href="contact.html";
}
function handleForm(){
    alert("✅ Submitted successfully!");
    return false;
}

window.addEventListener('wheel', function(event) {
  if (event.ctrlKey) {
    // Prevent the default browser zoom behavior
    event.preventDefault();
 }
}, { passive: false }); // 'passive: false' is required to use preventDefault()