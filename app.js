
  showNotes();
let addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click',function(e) {
    let addtxt =document.getElementById('addtxt');
    let addtitle =document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
   
    if(notes == null)
    {
        notesObj=[];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    let obj ={
        title: addtitle.value,
        text: addtxt.value
    }
    notesObj.push(obj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value="";
    addtitle.value="";
    // console.log(notesObj);

    showNotes();
})

function showNotes() {

    let notes =localStorage.getItem("notes");
    if(notes ==null)
    {
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    let html ="";

    notesObj.forEach(function(element , index) {
       html += `
       <div class="notecard my-2 mx-2 card" style="width: 18rem">
         <div class="card-body">
           <h5 class="card-title"> ${element.title}</h5>
         <p class="card-text">${element.text} </p>
         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
         </div>
         </div> `;    
    });

    let elem =document.getElementById("notes");
    if(notesObj.length !=0)
    {
        elem.innerHTML =html;
    }
     else
     {
         elem.innerHTML=`Nothing to show you!`;

    }
}


function deleteNote(index) {

    let notes=localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj =[];

    }

    else{
        notesObj =JSON.parse(notes);

    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
    
}

let search =document.getElementById("searchTxt");
search.addEventListener("input" ,function () {

    let val= search.value.toLowerCase();
    let notecards =document.getElementsByClassName('notecard');
    Array.from(notecards).forEach (function (element) {
let cardtxt =element.getElementsByTagName("p")[0].innerText;
if(cardtxt.includes(val))
{
    element.style.display="block";

}

else{
    
    element.style.display="none";
}
        
    })


})