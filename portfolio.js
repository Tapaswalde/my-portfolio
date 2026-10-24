const servicesContainer=document.getElementById("services-Container");
const projectContainer=document.getElementById("projects-Box");
const services=[
    {
        title:"Backend Development",
        description:"As a backend engineer, I specialize in building the server-side logic that powers web applications. I design and develop robust APIs, manage databases, implement secure authentication systems, and ensure smooth communication between the frontend and backend. My focus is on creating scalable, high-performance systems that handle data efficiently and securely—laying the foundation for reliable and seamless user experiences.",
        iconClass:"bi-server",
    },
    {
        title:"Gen AI",
        description:"I harness the power of Generative AI to build intelligent systems that create human-like content, automate workflows, and enhance user experiences. From natural language generation and AI chatbots to image and content creation, I develop solutions that combine creativity with cutting-edge machine learning models. My work focuses on making AI more accessible, adaptive, and impactful across a range of real-world applications.",
        iconClass:"bi-robot",
    },
    {
        title: "Cloud & DevOps",
        description:
            "I have a growing interest in cloud computing and DevOps practices including Docker, CI/CD, deployment, cloud infrastructure, monitoring, automation, and application scalability. I focus on understanding how applications can be deployed and managed reliably.",
        iconClass: "bi-cloud-check",
    },
];
const projects=[
    {
        imgSrc:"project1.png",
        title:"Project 1",
        description:"This website is a step ahead to resolve farmers suicide. This website contains Debt predictor which helps in knowing wethere one will face debt or not. It also has governement policies which has about , how to apply and document required. It also has side business tab which explores some of the best side buisness for farmers , and a unique way of representation .",
    },
];
const servicesContent=services.map((item)=>{
    return (`
    <div class="service-box">
    <div class="service-info">
    <i class="${item.iconClass}"></i>
    <h4>${item.title}</h4>
    <p>${item.description}</p>
    </div>
    </div>`)
}).join("");

servicesContainer.innerHTML=servicesContent;
const projectContent=projects.map((item)=>{
    return(`
        <div class="project-card">
        <img src="${item.imgSrc}" alt="project-img">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="btn">Review Project</div>
        </div>`)
}).join("");
projectContainer.innerHTML=projectContent;
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active");
}


// Contact Form


const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formStatus = document.getElementById("form-status");

    // Validate required fields
    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please fill in all required fields.";
        formStatus.className = "error";
        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.className = "error";
        return;
    }

    // Create form data
    const formData = new FormData(contactForm);

    // Replace with your newly generated Web3Forms access key
    formData.append("access_key", "98134a32-7b2b-42b7-8be5-7f444bbb62c9");

    try {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        formStatus.textContent = "Sending your message...";
        formStatus.className = "sending";

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.message || "Failed to send message.");
        }

        formStatus.textContent =
            "Message sent successfully! Thank you for contacting me.";
        formStatus.className = "success";

        contactForm.reset();

    } catch (error) {
        console.error("Contact form error:", error);

        formStatus.textContent =
            "Unable to send your message. Please try again.";
        formStatus.className = "error";

    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
    }
});
