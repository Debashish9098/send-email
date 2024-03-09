function sendOTP() {
  const email = document.getElementById('email');
  const otpverify = document.querySelector('.otpverify'); // Changed to querySelector


  let otp_val = Math.floor(Math.random() * 10000);
  let emailbody = `<h2>Your OTP is </h2>${otp_val}`;

  Email.send({
    SecureToken: "643b20e6-8229-4793-8306-8a5db896e479",
    To: email.value,
    From: "debashish2rudra@gmail.com",
    Subject: "Email OTP using Devashish",
    Body: emailbody,
    
  }).then(
    message => {
      if (message === "OK") {
        alert("OTP sent to your email " +email.value);
        
        
        otpverify.style.display = "flex";
        const otp_inp = document.getElementById('otp_inp');
        const otp_btn = document.getElementById('otp-btn');


        otp_btn.addEventListener('click', () => {
          if (otp_inp.value == otp_val) {
            alert("Email address verified...");
          } else {
            alert("Invalid OTP");
          }
        });
      }
    }
  );
}
