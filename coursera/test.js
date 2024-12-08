function upDate(previewPic){
  
      old=document.getElementById("image").innerHTML
      document.getElementById("image").innerHTML=previewPic.alt
      document.getElementById("image").style.background="url("+previewPic.src+")" ;
       }
   
       function unDo(){
    
           document.getElementById("image").innerHTML=old
       document.getElementById("image").style.background="#8e68ff";    
       }
       document.addEventListener("DOMContentLoaded",function (){

       let images=document.querySelectorAll(".preview");
       for(let i=0;i<images.length;i++){
        console.log("pic"+i)
        images[i].setAttribute("tabindex","0");
      
        images[i].addEventListener('focus',function() {
            upDate(this);
           });
           images[i].addEventListener('blur',function(){
            unDo()
           });
      
           
       }
       
    });

    
        
