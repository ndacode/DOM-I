const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// ## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content

//  ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

const nav = document.querySelectorAll('a');
nav[0].textContent = siteContent ["nav"] ["nav-item-1"];
nav[1].textContent = siteContent ["nav"] ["nav-item-2"];
nav[2].textContent = siteContent ["nav"] ["nav-item-3"];
nav[3].textContent = siteContent ["nav"] ["nav-item-4"];
nav[4].textContent = siteContent ["nav"] ["nav-item-5"];
nav[5].textContent = siteContent ["nav"] ["nav-item-6"];


const textHeading = document.querySelectorAll('h4');
textHeading[0].textContent = siteContent ["main-content"] ["features-h4"];
textHeading[1].textContent = siteContent ["main-content"] ["about-h4"];
textHeading[2].textContent = siteContent ["main-content"] ["services-h4"];
textHeading[3].textContent = siteContent ["main-content"] ["product-h4"];
textHeading[4].textContent = siteContent ["main-content"] ["vision-h4"];

const pContent = document.querySelectorAll('p');
pContent[0].textContent = siteContent ["main-content"] ["features-content"];
pContent[1].textContent = siteContent ["main-content"] ["about-content"];
pContent[2].textContent = siteContent ["main-content"] ["services-content"];
pContent[3].textContent = siteContent ["main-content"] ["product-content"];
pContent[4].textContent = siteContent ["main-content"] ["vision-content"];

const contactH = document.querySelector('.contact h4');
contactH.textContent = siteContent ["contact"] ["contact-h4"];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent ["contact"] ["address"];
contactP[1].textContent = siteContent ["contact"] ["phone"];
contactP[2].textContent = siteContent ["contact"] ["email"];

const footer = document.querySelector('footer p');
footer.textContent = siteContent ["footer"] ["copyright"];


const callText = document.querySelector(".cta-text h1");
callText.textContent = "Dom is Awesome";

let btn = document.querySelector('.cta-text button');
btn.textContent = "Get Started";

let cta = document.querySelector('.cta');

let codePic = document.getElementById("cta-img");
codePic.setAttribute('src', siteContent["cta"]["img-src"])
btn.addEventListener('click', (event) => {
  // codePic.style.position = 'absolute';
  codePic.style.visibility = 'hidden';
  cta.style.visibility = 'hidden';
  mainContent.style.visibility = 'hidden';

})

let midPic = document.getElementById("middle-img");
midPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])
midPic.style.width = '800px';
midPic.style.borderRadius = '20px';





// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

nav[0].style.color = 'green';
nav[1].style.color = 'green';
nav[2].style.color = 'green';
nav[3].style.color = 'green';
nav[4].style.color = 'green';
nav[5].style.color = 'green';


const Blog = document.createElement('a');
Blog.textContent = "Blog";
document.querySelector('nav').appendChild(Blog);
Blog.style.color = 'green';


const Social = document.createElement('a');
Social.textContent = "Socialize";
document.querySelector('nav').appendChild(Social);
Social.style.color = 'green';



let mainContent = document.querySelector('.main-content');
mainContent.style.background = 'steelblue';
mainContent.style.color = 'white';
mainContent.style.padding = '20px';
mainContent.style.borderRadius = '20px';



