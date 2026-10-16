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

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "1d2106eb-04d9-4642-a82d-314ad3f689cc");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
