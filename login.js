async function sendOTP() {
    const email = document.getElementById("email").value;

    const res = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    });

    document.getElementById("msg").innerText =
        "OTP sent to your email";
}

async function verifyOTP() {
    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        otp: document.getElementById("otp").value
    };

    const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById("msg").innerText = result.message;
}
