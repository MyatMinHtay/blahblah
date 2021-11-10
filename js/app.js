// UI 

// Start Nav Section 
const navbar = document.querySelector('nav');
const navbuttons = document.querySelector('.navbuttons');

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;

    if(getscrolly >= 200){
        navbar.classList.add('navchangecolors');
    }else{
        navbar.classList.remove('navchangecolors');
    }
});

navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

// End Nav Section 

// Start Newest Section 

const imgcontainer = document.querySelector('.img-container');
const img = document.querySelectorAll('.img-container img');
const rightbtn = document.querySelector('.btnright');
const leftbtn = document.querySelector('.btnleft');


let idx=0;

// console.log(imgcontainer);

rightbtn.addEventListener('click',()=>{
    idx++;
    
    changeimage();
    // console.log(idx);
});

leftbtn.addEventListener('click',()=>{
    idx--;
    
    changeimage();
    // console.log(idx);
    
});

function changeimage(){

    if(idx > img.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = img.length - 1;
    }

    imgcontainer.style.transform = `translate(${-idx * 190}px)`;
}

const imgcontainerone = document.querySelector('.img-containerone');
const rightbtnone = document.querySelector('.btnrightone');
const leftbtnone = document.querySelector('.btnleftone');
const imgone = document.querySelectorAll('.img-containerone img');

let idxone=0;



// console.log(imgcontainer);

rightbtnone.addEventListener('click',()=>{
    idxone++;
    
    changeimageone();
    console.log(idxone);
});

leftbtnone.addEventListener('click',()=>{
    idxone--;
    
    changeimageone();
    console.log(idxone);
    
});

function changeimageone(){

    if(idxone > imgone.length - 1){
        idxone = 0;
    }else if(idxone < 0){
        idxone = imgone.length - 1;
    }

    imgcontainerone.style.transform = `translate(${-idxone * 190}px)`;
}


// End Newest Section 

// Start Recomdened Section 
const imgcontainertwo = document.querySelector('.img-containertwo');
const rightbtntwo = document.querySelector('.btnrighttwo');
const leftbtntwo = document.querySelector('.btnlefttwo');
const imgtwo = document.querySelectorAll('.img-containertwo img');

let idxtwo=0;



// console.log(imgcontainer);

rightbtntwo.addEventListener('click',()=>{
    idxtwo++;
    
    changeimagetwo();

});

leftbtntwo.addEventListener('click',()=>{
    idxtwo--;
    
    changeimagetwo();
    
    
});

function changeimagetwo(){

    if(idxtwo > imgtwo.length - 1){
        idxtwo = 0;
    }else if(idxtwo < 0){
        idxtwo = imgtwo.length - 1;
    }

    imgcontainertwo.style.transform = `translate(${-idxtwo * 190}px)`;
}

// End Recommend Section 

