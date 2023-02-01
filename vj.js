const randomQuote='https://api.quotable.io/random';
const ques=document.getElementById('quote');//quoteDisplayElement   
let input=document.getElementById('input');// quoteInputs
function getQuote(){
    return fetch(randomQuote)
    //returns a promise 
        .then(response=>response.json())
        //again returns a promise 
        .then(data=>data.content)
        //finally returns the random quote 
}
// input.addEventListener("input",()=>{
//     console.log("updated");
//     const arrayQuote =ques.querySelectorAll('span');
//     const arrayValue=input.value.split('');
//     arrayQuote.forEach((characterSpan,index)=>{
//         const character= arrayValue[index];
//         if(character==null)
//         {
//             characterSpan.classList.remove('correct');
//             characterSpan.classList.remove('incorrect');
//         }
//         else if (character===characterSpan.innerText){
//             characterSpan.classList.add('correct');
//             console.log('correct');
//             characterSpan.classList.add('incorrect');
//         }
//         else{
//             characterSpan.classList.add('incorrect');
//             console.log('incorrect');
//             characterSpan.classList.add('correct');
//         }


//     })

// })        


async function renderNewQuote(){  
    const quote=await getQuote();
    console.log(quote);
    ques.innerHTML='';
    quote.split('').forEach(character => {
        //creating individual  span tags for each letter  and iterating through each of them .
        const characterSpan=document.createElement('span');
        characterSpan.innerText=character;
        ques.appendChild(characterSpan);
    });
    input.value=null;
}
renderNewQuote();
