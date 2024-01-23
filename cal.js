// let display=document.getElementById('inputbox');
// let buttons=document.querySelectorAll('button');

// let buttonArray=Array.from(buttons);
//  let string='';

//  buttonArray.forEach((btn)=> {
//     btn.addEventListener('click', (e)=>{
//         if(e.target.innreHTML=='DEL'){
//             string=string.substring(0, string.length-1);
//             display.value=string;
//         }else if(e.target.innreHTML=='AC'){
//             string='';
//             display.value=string;
//         }else if(e.target.innreHTML=='='){
//             string=eval(string);
//             display.value=string;
//         }else{
//             string+=e.target.innreHTML;
//             display.value=string;
//         }
//     });
//  });

let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

