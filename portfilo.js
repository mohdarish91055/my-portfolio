// scrolling nav bar show when up
let nav = document.querySelector('.container');
let prev = window.pageYOffset;


window.onscroll = function(){
    let current = window.pageYOffset;
    if(prev>current){
        nav.style.top = "0" ;
    }

    else {
        nav.style.top = "-80px";
    }

    prev = current;
}


// hamberger show that is mobile navbar code 

let oepenHamberger = document.querySelector('.fa-bars');
let navbar = document.querySelector('.mobnav');

oepenHamberger.addEventListener('click',()=>{

        navbar.style.width="100%";
})

let closeHamberger = document.querySelector('.fa-x');

closeHamberger.addEventListener('click',()=>{

    navbar.style.width="0";
    
})

// let skillTap = document.querySelector('#educaion');
let expTap = document.querySelector('#experience');
let eduTap = document.querySelector('#education');

// let skill = document.querySelector('.skill-contents');
let exp = document.querySelector('.exp-contents');
let edu = document.querySelector('.edu-contents');

// skill content show and hide

eduTap.addEventListener('click',()=>{
    if(edu.style.display=='none'){
        edu.style.display='block';
        exp.style.display='none';

        eduTap.classList.add("active-links");
        expTap.classList.remove("active-links");
    }
    
    else{
        edu.style.display='none';
        exp.style.display='none';
        eduTap.classList.remove("active-links");
    }
    
})

// experience content show and hide

expTap.addEventListener('click',()=>{

    if(exp.style.display == 'none'){
        expTap.classList.add("active-links");
        eduTap.classList.remove("active-links");
        exp.style.display = 'block';
        edu.style.display='none';

    }
    
    else{
        expTap.classList.remove("active-links");
        exp.style.display = 'none';
        edu.style.display='none';
    }
    
});

// education content show and hide

// eduTap.addEventListener('click',()=>{

//     if(edu.style.display == 'none'){
//         eduTap.classList.add("active-links");
//         skillTap.classList.remove("active-links");
//         expTap.classList.remove("active-links");
//         edu.style.display = 'block';
//         skill.style.display='none';
//         exp.style.display='none';
//     }
    
//     else{
//         eduTap.classList.remove("active-links");
//         edu.style.display = 'none';
//         skill.style.display='none';
//         exp.style.display='none';
//     }
    
// });

