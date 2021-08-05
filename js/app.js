const add = document.getElementById('add');
// console.log(add);

const url = "https://source.unsplash.com/random/";

add.addEventListener('click',()=>{
    addphoto();
});

function addphoto(text=''){
    const container = document.createElement('div');
    container.classList.add('container');

    container.innerHTML = `
        <img src="img/b1.jpg" alt="b1">
        <button id="add-note" class="add-note"><i class="fas fa-plus"></i></button>
        <button id="dele-note" class="dele-note"><i class="fas fa-minus"></i></button>
        <div class="note">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>

            
            <textarea class="${text ? 'hidden' : ''}"></textarea>
        </div>
        
        <div class="main ${text ? 'slide' : ''}"></div>
    `;

    const editbtn = container.querySelector('.edit');
    const deletebtn = container.querySelector('.delete');
    const main = container.querySelector('.main');
    const txtarea = container.querySelector('textarea');
    const addnote = container.querySelector('.add-note');
    const note = container.querySelector('.note');
    const delenote = container.querySelector('.dele-note');


    const img = container.querySelector('img');
    img.src = `${url}${getinto()}`;


    editbtn.addEventListener('click',()=>{
       // console.log("hello")
        txtarea.classList.toggle('hidden');
    });
    addnote.addEventListener('click',()=>{
        main.classList.toggle('slide');
    });

    deletebtn.addEventListener('click',()=>{
       // console.log('hey');
        note.remove();
    });

    delenote.addEventListener('click',()=>{
        container.remove();
        updatelocalstorage();
    });


    txtarea.value = text;
    main.textContent = text;

    txtarea.addEventListener('keyup',(e)=>{
       // console.log(e.target.value);

        const {value} = e.target;
        main.textContent = value;

        updatelocalstorage();

    });

    // console.log(container);
    document.body.appendChild(container);
}

function updatelocalstorage(){
    const notetexts = document.querySelectorAll('textarea');
    // console.log(notetexts);

    let notes = [];

    notetexts.forEach((notetext)=>{
        notes.push(notetext.value);

    });

    // console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));

    // console.log(notes);
}

const getnotes = JSON.parse(localStorage.getItem('notes'));
// console.log(getnotes);

if(getnotes){
    getnotes.forEach(function(getnote){
       addphoto(getnote);
    });
}

function getnum(){
    return Math.floor(Math.random()*10) + 300;
}

function getinto(){
    return `${getnum()} * ${getnum()}`;
}
// console.log(getinto());




