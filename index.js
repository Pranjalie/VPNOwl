function checkFilled() { 
    var inputVal = document.getElementById("bodyColor");
    
        
        document.getElementById("floatingInput").addEventListener('keydown', () => {
           
          inputVal.style.backgroundColor = document.getElementById("floatingInput").value;
        })   
}

checkFilled();

const selectAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  selectAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    const sectionId = current.getAttribute('id');
    console.log(sectionId);

    if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
      document.querySelector('li a[href*="' + sectionId + '"]').classList.add("active");
    } else {
      document.querySelector('li a[href*="' + sectionId + '"]').classList.remove("active");
    }
  })
})
