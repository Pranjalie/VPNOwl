  
    

    

function checkFilled() {
   
    var inputVal = document.getElementById("bodyColor");
    
        
        document.getElementById("floatingInput").addEventListener('keydown', () => {
           
          inputVal.style.backgroundColor = document.getElementById("floatingInput").value;
        })

         
    
}

checkFilled();