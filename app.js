const inputText = document.querySelector('#txt');
const myButton = document.querySelector('.btn__add');
const list = document.querySelector('.items');
myButton.addEventListener('click', (e)=>{
    if(inputText.value != ""){
        e.preventDefault();
        //create list
        const myList = document.createElement('li');
        myList.innerHTML = inputText.value;
        list.appendChild(myList);
        //create span
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x';
        myList.appendChild(mySpan);
        //create date
        const myDate = document.createElement('date');
        myDate.innerHTML = new Date().toLocaleString();
        myList.appendChild(myDate);
    }
    const close = document.querySelectorAll('span');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity = 0;
            setTimeout(()=>{
                close[i].parentElement.style.display = "none";
                close[i].parentElement.remove();
            }, 500);
        })
    }
});