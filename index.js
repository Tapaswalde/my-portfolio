const servicesContainer=document.getElementById("services-Container");
const projectContainer=document.getElementById("projects-Box");
const services=[
    {
        title:"Frontend Development",
        description:"Frontend development focuses on building the visual and interactive parts of a website or app that users directly engage with. It involves translating designs into responsive layouts using HTML, CSS, and JavaScript, adding interactivity, ensuring cross-browser compatibility, and connecting to backend APIs.",
        iconClass:"bi-laptop",
    },
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