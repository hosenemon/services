const form = document.querySelector("form");
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const messages = document.getElementById('messages');
function sendEmail() {
  const bodyMessage = `Frist Name: ${fname.value} <br> Last Name: ${lname.value} <br> Email: ${email.value} <br> Subject: ${subject.value} <br> Messages: ${messages.value}`;
    Email.send({
         SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'mhemon2018@gmail.com',
        From : 'mhemon2018@gmail.com',
        Subject : subject.value,
        Body : bodyMessage
    }).then(
    message => {
      Swal.fire({
        title: "Congratulation!",
        text: "Messages sent successfully!",
        icon: "success"
      });
    } 
    );
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
})


