  
 export const animation = () =>{
    const letter = document.getElementById('Animate');
    
    letter.addEventListener('mouseover', FunctionMouseOver)
  
    function FunctionMouseOver() {
        letter.innerHTML= "the best is backing now "
     }
}


