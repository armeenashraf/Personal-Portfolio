let readMore = document.getElementById('readMore');
let hiddenText = document.getElementById('hiddenText');
let contactBtn = document.getElementById("contactBtn");
let contactModal = document.getElementById("contactModal");
let closeContact = document.getElementById("closeContact");
let contactForm = document.getElementById("contactForm");

readMore.onclick = (e)=>{
    e.preventDefault()
    if(hiddenText.style.display === 'none'){
        hiddenText.style.display = 'inline' ;
        readMore.textContent = 'Read Less'
    } else{
        hiddenText.style.display = 'none';
        readMore.textContent = 'Read More'
    }
}
contactBtn.addEventListener("click", () => {
    contactModal.classList.add("active");
});
closeContact.addEventListener("click", () => {
    contactModal.classList.remove("active");
});
contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove("active");
    }
});
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! 💜");
    contactForm.reset();
    contactModal.classList.remove("active");
});