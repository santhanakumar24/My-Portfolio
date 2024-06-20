        /*--- Navigation Bar Function ---*/
 function myMenuFunction() {
    
 var menuBtn = document.getElementById("myNavMenu");

 if(menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive ";
      } 
     
 else {
    menuBtn.className = "nav-menu";
     }}
        


        /*---Add Shadow On Navigation Bar While Scrolling---*/

 window.onscroll = function() {headerShadow()};
 
    function headerShadow() {
        
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {

       navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
       navHeader.style.height = "70px"; 
       navHeader.style.lineHeight = "70px"; 
 
    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px"; 
        navHeader.style.lineHeight = "90px"; 
    }

 }



        /*--- Type Effect ---*/



 var typingEffect = new Typed(".typedText",{

 strings : ["Web Developer,", "Frontend Developer." ],
 loop : true,
 typeSpeed : 100,
 backSpeed : 100,
 backDelay : 1000

 })        


 /* ---- Change Active --- */



 const observer = new IntersectionObserver((entries) => {
   
   entries.forEach((entry) => {
  
  
   if (entry.isIntersecting) {
  
   if (entry.target.classList.contains('hidden-1')) {
       entry.target.classList.add('show-animation-1');
   }
  
   else if (entry.target.classList.contains('hidden-2')) {
                 entry.target.classList.add('show-animation-2');
   }
              
   else if (entry.target.classList.contains('hidden-3')) {
            entry.target.classList.add('show-animation-3');
   }
  
   else if (entry.target.classList.contains('hidden-4')) {
            entry.target.classList.add('show-animation-4');
   }
   else if (entry.target.classList.contains('hidden-5')) {
            entry.target.classList.add('show-animation-5');
   }
   
   else if (entry.target.classList.contains('hidden-6')) {
            entry.target.classList.add('show-animation-6');
   }
  
   }


   
   
   else {
  
           entry.target.classList.remove('show-animation-1', 'show-animation-2', 'show-animation-3', 'show-animation-4', 'show-animation-5', 'show-animation-6');
         
        }
    
     });
  
   }, 
  
   {  threshold: 0.5
  
   });
  
   const hiddenElements = document.querySelectorAll('.hidden-1, .hidden-2, .hidden-3, .hidden-4, .hidden-5, .hidden-6');
  
  
   hiddenElements.forEach((el) => {
   observer.observe(el);
  
  });


        

        
        


