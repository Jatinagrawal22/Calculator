const button=document.querySelectorAll('button')
const inp=document.querySelector('#screen')
for(let but of button){
    but.addEventListener('click',(e)=>{
        const buttext=e.target.innerText
        console.log(buttext)
        if(buttext==='C'){
            inp.value="";
        }
        else if(buttext==='x'){
            inp.value+='*';
        }
        else if(buttext==='='){
            try{
                inp.value=eval(inp.value)
            }
            catch{
                inp.value="Invalid Operation"
            }
        }
        else{
            inp.value+=buttext
        }
        
    })
}
