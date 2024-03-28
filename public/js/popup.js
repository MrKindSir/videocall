const section = document.querySelector("section"),
overlay = document.querySelector(".overlay"),
showBtn = document.querySelector(".show-modal"),
it = document.getElementById("it"),
st = document.getElementById("st"),
ft = document.getElementById("ft"),
// vt = document.getElementById("vt"),
prt = document.getElementById("prt"),
content = document.querySelector(".modal-content"),
closeBtn = document.querySelector(".close-btn");

function tools(title, description) {
   // Extract information from the clicked article
   // const tag = article.querySelector('.tag').textContent;
   // const title = article.querySelector('.title').textContent;
   // const info = article.querySelector('.info').textContent;
   // // const satisfaction = article.querySelector('.details dt:only-child').nextElementSibling.textContent;
   // // const customers = article.querySelector('.details dt:last-child').nextElementSibling.textContent;

   // // Output information (you can modify this based on your requirements)
   // console.log(`Tag: ${tag}`);
   // console.log(`Title: ${title}`);
   // console.log(`Info: ${info}`);
   // // console.log(`Satisfaction: ${satisfaction}`);
   // // console.log(`Customers: ${customers}`);
   section.classList.add("active");

   var closeBtn2 = document.getElementById("close-btn");
   closeBtn2.addEventListener("click", () =>
     section.classList.remove("active")
   );

}


function toolsl(title, description) {
  // Extract information from the clicked article
   // const tag = article.querySelector('.tag').textContent;
   // const title = article.querySelector('.title').textContent;
   // const info = article.querySelector('.info').textContent;
   // // const satisfaction = article.querySelector('.details dt:only-child').nextElementSibling.textContent;
   // // const customers = article.querySelector('.details dt:last-child').nextElementSibling.textContent;

   // // Output information (you can modify this based on your requirements)
   // console.log(`Tag: ${tag}`);
   // console.log(`Title: ${title}`);
   // console.log(`Info: ${info}`);
   // // console.log(`Satisfaction: ${satisfaction}`);
   // // console.log(`Customers: ${customers}`);
   section.classList.add("active");
   content.innerHTML = '';
   content.innerHTML = `
   <div class="row">         
   <div class="block-c block-md-f block-sm-l">
      <div class="box box-hover">
         <div class="counter">
            <div class="counter-title">
               <a href="png-to-jpg.php">.PNG TO .JPG/.JPEG</a>
            </div>
            <div class="counter-info">
               <div class="counter-count">
                  FREE
               </div>
               <i class="image-icon"></i>
            </div>
         </div>
      </div>
   </div>
   <div class="block-c block-md-f block-sm-l">
      <div class="box box-hover">
         <div class="counter">
            <div class="counter-title">
               <a href="jpg-to-png.php">.JPG/.JPEG TO .PNG</a>
            </div>
            <div class="counter-info">
               <div class="counter-count">
                  FREE
               </div>
               <i class="image-icon"></i>
            </div>
         </div>
      </div>
   </div>
   <div class="block-c block-md-f block-sm-l">
      <div class="box box-hover">
         <div class="counter">
            <div class="counter-title">               
               <a href="video-calling.php">VIDEO CALLING (REQUEST EARLY ACCESS)</a>
            </div>
            <div class="counter-info">
               <div class="counter-count">
                  FREE
               </div>
               <i class="social-icon"></i>
            </div>
         </div>
      </div>
   </div>        

</div>
   `;
   var closeBtn2 = document.getElementById("ei-close");
   closeBtn2.addEventListener("click", () =>
     section.classList.remove("active")
   );

}

