// UI 


// const chapterdivs = document.querySelectorAll('.chapterdiv');
const dropdownbtns = document.querySelectorAll('.chapterdiv .fa-chevron-down');



dropdownbtns.forEach((dropdownbtn)=>{
        dropdownbtn.addEventListener('click',(e)=>{

            e.target.parentElement.classList.toggle('active');
           
        });

       
});

const imgslidecontainers = document.querySelectorAll('.photo-container-child');

const speedel = document.getElementById('speed');
const showspeed = document.querySelector('.showspeed');
const slideplaybtn = document.querySelector('.slideplaybtn');

let slideidxone = 0;
let speed = 2000;

// console.log(imgslide);

speedel.addEventListener('input',()=>{
    

    speed = 2000 * speedel.value;
    
    showspeed.textContent = `${speedel.value * 2}s`;

});





slideplaybtn.addEventListener('click',(e)=>{
    
    if(e.target.parentElement.parentElement.parentElement.classList.contains('active')){
        slideidxone = 13;
        // console.log(slideidxone);
    slideimage();
  
    resetinterval();
    
    }

});


function slideimage(){

    slideidxone++;

    if(slideidxone > 12){
        slideidxone = 0;
    }
    
    imgslidecontainers.forEach((imgslidecontainer,)=>{
        imgslidecontainer.style.transform = `translate(${-slideidxone * 350}px)`;
        
        }
        
    );
  

}

let interval = setInterval(slideimage, speed);


function resetinterval(){

clearInterval(interval);
interval = setInterval(slideimage,speed);
}


const slides = document.querySelectorAll('.slidemode');
const books = document.querySelectorAll('.bookmode');
const carousels = document.querySelectorAll('.carouselmode');

const slidecontainers = document.querySelectorAll('.slide');
const bookcontainers = document.querySelectorAll('.book');
const carouselcontainers = document.querySelectorAll('.carouselbox');


// console.log(slides,books,carousels);
// console.log(slidecontainers)

books.forEach((book)=>{
    book.addEventListener('click',()=>{
        bookcontainers.forEach((bookcontainer)=>{
            // bookcontainer.style.display = "flex";
            bookcontainer.classList.add('show');
        });

        slidecontainers.forEach((slidecontainer)=>{
            slidecontainer.classList.remove('show');
            
        });

        carouselcontainers.forEach((carouselcontainer)=>{
            carouselcontainer.classList.remove('show');
        });
        console.log('hay');
    });
}); 

carousels.forEach((carousel)=>{
    carousel.addEventListener('click',()=>{
        carouselcontainers.forEach((carouselcontainer)=>{
            // carouselcontainer.style.display = "flex";
            carouselcontainer.classList.add('show');
        });

        slidecontainers.forEach((slidecontainer)=>{
            // slidecontainer.style.display = "none";
            slidecontainer.classList.remove('show');
            
        });

        bookcontainers.forEach((bookcontainer)=>{
            // bookcontainer.style.display = "none";
            bookcontainer.classList.remove('show');
        });
        console.log('hay');
    });
}); 

slides.forEach((slide)=>{
    slide.addEventListener('click',()=>{

        slidecontainers.forEach((slidecontainer)=>{
            slidecontainer.classList.add('show');
        });
       

        bookcontainers.forEach((bookcontainer)=>{
            bookcontainer.classList.remove('show');
            
        });

        carouselcontainers.forEach((carouselcontainer)=>{
            carouselcontainer.classList.remove('show');
        });
        console.log('hay');
    });
}); 
    
// Start change container Section 

// References to DOM Elements
const prevBtns = document.querySelectorAll(".prevbtn");
const nextBtns = document.querySelectorAll(".nextbtn");
const bookchilds = document.querySelectorAll(".book-child");

// const paper1 = document.querySelector("#p1");
// const paper2 = document.querySelector("#p2");
// const paper3 = document.querySelector("#p3");

const paper = {
    p1:document.querySelectorAll('.p1'),
    p2:document.querySelectorAll('.p2'),
    p3:document.querySelectorAll('.p3'),
    p4:document.querySelectorAll('.p4')
}



// Event Listener
prevBtns.forEach((prevBtn)=>{
    prevBtn.addEventListener("click", goPrevPage);
});

nextBtns.forEach((nextBtn)=>{
    nextBtn.addEventListener("click", goNextPage);
});



// Business Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;
let bookwidth = window.innerWidth;
// console.log(bookwidth);

function openBook(){

    bookchilds.forEach((book)=>{
        book.style.transform = 'translateX(50%)';
    });
    // book.style.transform = 'translateX(50%)';

    if(bookwidth < 600){

        prevBtns.forEach((prevBtn)=>{
            prevBtn.style.transform = "translateX(0px)";
        });

        nextBtns.forEach((nextBtn)=>{
            nextBtn.style.transform = "translateX(0px)";
        });

        
        // nextBtn.style.transform = "translateX(0px)";
    }else{

        prevBtns.forEach((prevBtn)=>{
            prevBtn.style.transform = "translateX(-180px)";
        });

        nextBtns.forEach((nextBtn)=>{
            nextBtn.style.transform = "translateX(180px)";
        });
    }
   
 

}

function closeBook(isAtBeginning){

    if(isAtBeginning){
        
        bookchilds.forEach((book)=>{
            book.style.transform = "translateX(0%)";
        });
    }else{
       
        bookchilds.forEach((book)=>{
            book.style.transform = "translateX(100%)";
        });
        
    }
    prevBtns.forEach((prevBtn)=>{
        prevBtn.style.transform = "translateX(0px)";
    });

    nextBtns.forEach((nextBtn)=>{
        nextBtn.style.transform = "translateX(0px)";
    });
    
    
}

function goNextPage(){
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper.p1.forEach((pone)=>{
                    pone.classList.add('flipped');
                    pone.style.zIndex = 1;
                });
                
                break;
            case 2:
                paper.p2.forEach((ptwo)=>{
                    ptwo.classList.add('flipped');
                    ptwo.style.zIndex = 2;
                });
               
                break;
            case 3:
                // closeBook(false);
                paper.p3.forEach((pthree)=>{
                    pthree.classList.add('flipped');
                    pthree.style.zIndex = 3;
                });
              
                break;
            case 4:
                closeBook(false);
                paper.p4.forEach((pfour)=>{
                    pfour.classList.add('flipped');
                    pfour.style.zIndex = 4;
                });
                
                break;
            default:
                throw new Error('unknown state');
        }

        currentLocation++;
        // console.log(currentLocation);
    }
}

function goPrevPage(){
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                closeBook(true);
                paper.p1.forEach((pone)=>{
                    pone.classList.remove('flipped');
                    pone.style.zIndex = 4;
                });
                break;
            case 3:
                paper.p2.forEach((ptwo)=>{
                    ptwo.classList.remove('flipped');
                    ptwo.style.zIndex = 3;
                });
                break;
            case 4:
                // openBook();
                paper.p3.forEach((pthree)=>{
                    pthree.classList.remove('flipped');
                    pthree.style.zIndex = 2;
                });
                break;
            case 5:
                openBook();
                paper.p4.forEach((pfour)=>{
                    pfour.classList.remove('flipped');
                    pfour.style.zIndex = 1;
                });
                break;
            default:
                throw new Error('unknown state');

        }

        currentLocation--;
        // console.log(currentLocation);
    }
}

// End change container Sectoin 

// Start Carousel Section 

const carouselboxs = document.querySelectorAll('.carousel-container-child');
// const img = document.querySelectorAll('.img-container img');
const carouselprevbtns = document.querySelectorAll('.carouselprevbtn');
const carouselnextbtns = document.querySelectorAll('.carouselnextbtn');


let carouselidx=0;

// console.log(imgcontainer);

carouselprevbtns.forEach((carouselprevbtn)=>{
    carouselprevbtn.addEventListener('click',()=>{
        carouselidx--;
        
        changecarousel();
        // console.log(idx);
    });
});

carouselnextbtns.forEach((carouselnextbtn)=>{
    carouselnextbtn.addEventListener('click',()=>{
        carouselidx++;
        
        changecarousel();
        // console.log(idx);
    });
});


function changecarousel(){

    if(carouselidx > 10){
        carouselidx = 0;
    }else if(carouselidx < 0){
        carouselidx = 10;
    }

    carouselboxs.forEach((carousel)=>{
        carousel.style.transform = `translate(${-carouselidx * 350}px)`;
    });
    
}

// End Carouesel Section 