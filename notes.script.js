let notes;
if(localStorage.getItem('notes')!='null'){
    notes=localStorage.getItem('notes');
    localStorage.setItem('notes',notes);
    for(let i=0;i<notes;i++){
        let noteContainer=document.querySelector('.notes');            
        let note=document.createElement('div');
        note.className='container';                                
        note.innerHTML=`
        <h3>Note-${i+1}</h3
        <h7>${localStorage.getItem(i)}</h7>      
        <br>          
        <button id="delete${i+1}" style="background-color: rgb(46, 152, 160);margin-top:20px;color:white;
        padding:5px 10px;outline:none;border:none;border-radius:3px;" onClick="del(${i+1})">
            Remove</button>
        `;
        noteContainer.appendChild(note);                                                     
    }
}else{
    notes=0;
    localStorage.setItem('notes',notes);
}        
function del(e){            
    localStorage.removeItem(e-1);
    localStorage.setItem('notes',notes-1);
    location.reload();
}
let btn=document.querySelector('#addItem');
btn.addEventListener('click', function (e){            
    let noteContainer=document.querySelector('.notes');
    let note=document.createElement('div');
    note.className='container';
    let noteMsg=document.getElementById('note');
    if(noteMsg.value!=''){
    localStorage.setItem(notes++,noteMsg.value);
    note.innerHTML=`<h7>${noteMsg.value}</h7>`;
    noteContainer.appendChild(note);            
    localStorage.setItem('notes',notes);
    document.getElementById('note').value="";    
    location.reload();        
    }else{                
        alert('Please enter a valid task!');
    }
})        