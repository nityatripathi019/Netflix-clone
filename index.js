const accordian=document.querySelectorAll(".accordian");

accordian.forEach((e)=>{
    const icon=e.querySelector(".icon");
    const answer=e.querySelector(".answer");

    e.addEventListener("click",()=>{
        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            answer.style.maxHeight=null;
        }
        else{
            icon.classList.add("active");
            answer.style.maxHeight=answer.scrollHeight + "px";
        }
    })
})