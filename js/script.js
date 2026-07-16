/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.6s";

});


/* ==========================================
   AOS
========================================== */

AOS.init({

    duration:1000,

    once:true,

    offset:120

});


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;

    const progress =

    (scrollTop/scrollHeight)*100;

    progressBar.style.width = progress+"%";

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =

        section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   NAVBAR HIDE/SHOW
========================================== */

let lastScroll = 0;

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    const currentScroll = window.pageYOffset;

    if(currentScroll>lastScroll){

        header.style.top="-120px";

    }

    else{

        header.style.top="20px";

    }

    lastScroll=currentScroll;

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("show");

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(

            this.getAttribute("href")

        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.createElement("button");

scrollBtn.id="scrollTop";

scrollBtn.innerHTML="↑";

document.body.appendChild(scrollBtn);

scrollBtn.style.position="fixed";
scrollBtn.style.right="30px";
scrollBtn.style.bottom="30px";
scrollBtn.style.width="55px";
scrollBtn.style.height="55px";
scrollBtn.style.borderRadius="50%";
scrollBtn.style.border="none";
scrollBtn.style.cursor="pointer";
scrollBtn.style.background="#38BDF8";
scrollBtn.style.color="#fff";
scrollBtn.style.fontSize="22px";
scrollBtn.style.display="none";
scrollBtn.style.zIndex="999";


window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

});


scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   CURRENT YEAR
========================================== */

const footer = document.querySelector("footer p");

footer.innerHTML =

`© ${new Date().getFullYear()} Kaushik Kanagaraj. All Rights Reserved.`;


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat-card h3");

const speed = 60;

const startCounter = (counter)=>{

    const target = +counter.innerText.replace("+","");

    let count = 0;

    const update=()=>{

        const increment = Math.ceil(target/speed);

        count += increment;

        if(count<target){

            counter.innerText=count+"+";

            requestAnimationFrame(update);

        }

        else{

            counter.innerText=target+"+";

        }

    };

    update();

};


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter(

                entry.target

            );

            observer.unobserve(entry.target);

        }

    });

});


counters.forEach(counter=>{

    observer.observe(counter);

});


/* ==========================================
   BUTTON RIPPLE
========================================== */

const buttons =

document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-6px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(

"%cDesigned & Developed by Kaushik Kanagaraj",

"color:#38BDF8;font-size:16px;font-weight:bold;"

);