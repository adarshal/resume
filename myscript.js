var progressBar=document.querySelectorAll('.skill-progress > div');
var skillContainer=document.getElementById('skills-flex-container');
window.addEventListener('scroll', checkscroll);
var scrollDone=false;

int()// initializing all progrss to zero
function int(){
    for(let bar of progressBar){
        bar.style.width='0'+'%';
    }
}

function checkscroll(){
var top=skillContainer.getBoundingClientRect().top;
if(!scrollDone && top <window.innerHeight){
    scrollDone=true;
   fillBar();
}

if( top >window.innerHeight){
    scrollDone=false;
}
}

function fillBar(){
    for(let bar of progressBar){
        let targetWidth=bar.getAttribute('data-width-value');
        console.log(targetWidth);
        let cur=0;
        var intervalId=setInterval(() => {
          if(cur>=targetWidth){
              clearInterval(intervalId);
              return;
          }
          cur+=5;
          console.log(cur);
          bar.style.width=cur+'%';
  
        }, 75);
      }
}

