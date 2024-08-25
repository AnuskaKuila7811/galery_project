let images=document.querySelectorAll(".image_container img");
let veiwimage=document.querySelector(".veiw_image");
let closebtn=document.querySelector(".veiw_image span");
let fullImage=document.querySelector(".veiw_image img");

for(let image of images){
    image.addEventListener("click",function(e){
        
        veiwimage.style.display="flex";
        fullImage.src=e.target.src;
    })
}
closebtn.addEventListener("click",()=>{
    veiwimage.style.display="none";
})