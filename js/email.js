// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_u6a4ugp";
//   const templateID = "template_1z20tzb";
//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("subject").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("your message was send successfully");
//     })
//     .catch((err) => console.log(err));
// }

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz_0smGkjuCXnVgti-fi3EdCJo78SNqZrORsgsaMuo6v0Ic4RjHHPs302cew7Ylrp5N/exec";

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Success!", response);
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
      submitButton.disabled = false;
    });
});
