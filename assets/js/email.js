const PUBLIC_KEY=""
const SERVICE_ID=""
const TEMPLATE_ID=""

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init(PUBLIC_KEY);
})();
const submitBtn = document.getElementById("submit-btn");
window.onload = function () {
  const contactForm = document.getElementById("contact-form");
  contactForm &&
    contactForm.addEventListener("submit", function (event) {
      submitBtn.innerText = "Please Wait";
      event.preventDefault();
      if(SERVICE_ID == "" || TEMPLATE_ID == "") {
        console.log("Please enter your service ID and template ID");
        return;
      }
      // these IDs from the previous steps
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this).then(
        function () {
          console.log("SUCCESS!");
          contactForm.reset();
          submitBtn.innerText = "Thank You For Contacting with Us!";
          setTimeout(function () {
            submitBtn.innerHTML = `Send Message <i
          class="ph ph-arrow-up-right"></i>`;
          }, 3000);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
