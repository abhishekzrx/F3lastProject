const superHeroName=document.getElementById("superHero-input");
const submitbtn= document.getElementById("submitbtn");
const result=document.getElementById("result");
const superheroDetails=document.getElementById("superheroDetails");

let superHeros=[] || JSON.parse(localStorage.getItem('superHeros'));

async function superheroData(name){
   
    try{
        const response =await fetch(
            `https://www.superheroapi.com/api.php/1628132770683309/search/${name}`
        );
        const data= await response.json();
        console.log(data);
        superHeros=data.results;
        localStorage.setItem('superHeros',JSON.stringify(data.results))
        for(let index=0;index<data.results.length;index++){
            RenderSuperHero(data.results[index])
        }
         
    }catch(e){
       console.log("Sorry Bad Cammand !")
    }
       superHeroName.value="";
  
}

// Render superHero 

function RenderSuperHero(data,index){
  let div=document.createElement('div');
  div.id=index;   
  div.onclick =(event)=>{
    handleSuperHeroClick(event);
  } 
  div.innerHTML=
  ` <h1>${data.name}</h1>
  <img src="${data.image.url} ">
  `
  div.classList.add("superheroCards")
  result.appendChild(div);
  //div.innerHTML="";
 
}

// function handleSuperHeroClick(event){
//     let superHeros=[] || JSON.parse(localStorage.getItem('superHeros'));
//       const index=event.target.id;
    
//       renderheroDetails(superHeros[index])
// }

// function renderheroDetails(){
//       result.innerHTML=" ";
//    let div =document.createElement("div");
//    div.innerHTML=`
//     <h1>${data.name}</h1>
//     <img src="${data.image.url}">
//    `
//    superheroDetails.appendChild(div);

// }




submitbtn && submitbtn.addEventListener("click",()=>{
    const name=superHeroName.value;
    superheroData(name)
 
})

