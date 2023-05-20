const joke=document.querySelector(".joke");
const button=document.querySelector("button");
 var URL="https://v2.jokeapi.dev/joke/Any?type=single&amount=1"
 button.addEventListener("click",generate);
 async function generate()
 {
    joke.innerHTML=" ";
    const data =await fetch(URL).then((e)=> e.json());
    if(data)
    {
        joke.innerHTML=" ";
        joke.innerHTML=data.joke

    }
 }