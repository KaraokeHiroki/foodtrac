//Selectors
const inputText = document.querySelector('#txt');
const addButton = document.querySelector('.btn__add');
const itemList = document.querySelector('.item__list');
const filterOption = document.querySelector('.filter__item');

//Event Listeners
document.addEventListener('DOMContentLoaded', getItems);
addButton.addEventListener('click', addList);
itemList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterItem);

//Functions

function addList(event){
    //prevent form from submitting
    event.preventDefault();
    //item div
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    //create item
    const newItem = document.createElement('li');
    newItem.innerText = inputText.value;
    newItem.classList.add('list__item');
    itemDiv.appendChild(newItem);
    //create date
    const myDate = document.createElement('date');
    myDate.innerHTML = new Date().toLocaleString();
    itemDiv.appendChild(myDate);
    //add item to local storage
    saveLocalItems(inputText.value);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("btn__complete");
    itemDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("btn__trash");
    itemDiv.appendChild(trashButton);
    //append to list
    itemList.appendChild(itemDiv);
    //clear item input value
    inputText.value = "";
}

function deleteCheck(e){
    const thisitem = e.target;
    //delete item
    if(thisitem.classList[0] === "btn__trash"){
        const item = thisitem.parentElement;
        removeLocalItems(item);
        item.remove();
    }

    //check mark
    if(thisitem.classList[0] === "btn__complete"){
        const item = thisitem.parentElement;
        item.classList.toggle("completed");
    }
}

function filterItem(e) {
    const items = itemList.childNodes;
    items.forEach(function(item){
        switch(e.target.value){
            case "all":
                item.style.display = "flex";
                break;
            case "completed":
                if(item.classList.contains('completed')) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!item.classList.contains('completed')) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
        }
    });
}


function saveLocalItems(item){
    //check if already have things in there
    let items;
    if(localStorage.getItem('items') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem("items"));
    }

    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

function getItems() {
    //check if already have things in there
    let items;
    if(localStorage.getItem('items') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem("items"));
    }
    items.forEach(function(item){
        //item div
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        //create item
        const newItem = document.createElement('li');
        newItem.innerText = item;
        newItem.classList.add('list__item');
        itemDiv.appendChild(newItem);
         //create date
        const myDate = document.createElement('date');
        myDate.innerHTML = new Date().toLocaleString();
        itemDiv.appendChild(myDate);
        //check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("btn__complete");
        itemDiv.appendChild(completedButton);
        //check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("btn__trash");
        itemDiv.appendChild(trashButton);
        //append to list
        itemList.appendChild(itemDiv);
    });
}

function removeLocalItems(item) {
    //check if already have things in there
    let items;
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
    }
    const itemIndex = item.children[0].innerText;
    items.splice(items.indexOf(itemIndex), 1);
    localStorage.setItem("items", JSON.stringify(items));
}

//barcode reader
const myReader = document.querySelector('.btn__reader');
myReader.addEventListener('click', (e)=>{
function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
 "reader", { fps: 10, qrbox: 100 });
html5QrcodeScanner.render(onScanSuccess);
})