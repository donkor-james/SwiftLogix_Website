const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
});


// // Icon
// const sunIcon = document.getElementById("sun")
// const moonIcon = document.getElementById("moon")

// // theme vars
// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("prefers-color-scheme: dark").matches;

// //Icon toggle
// const iconToggle = () => {
//     moonIcon.classList.toggle("display-none");
//     sunIcon.classList.toggle("display-none");
// };


// //theme check 
// const themeCheck = () => {
//     if (userTheme == "dark" || (!userTheme && systemTheme)){
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("display-none")
//         return;
//     }
//     sunIcon.classList.add("display-none");
// };

// // manual Theme switch
// const themeSwitch = () => {
//     if(document.documentElement.classList.contains("dark")){
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         iconToggle();
//         return;
//     }
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     iconToggle();
// };

// // call theme switch on click

// sunIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// moonIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// // invoke theme check on load
// themeCheck();