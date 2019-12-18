console.log("Connected!");
let removeBtn = document.querySelector('.box .innerBox');

removeBtn.addEventListener('click', function (e) {
    if (e.target.tagName == 'A') {
        e.preventDefault();
        console.log(" -------------|Remove Button|------------");
        console.log("BTN clikced");
        let currentBook = e.target.parentNode;
        console.log(currentBook);
        currentBook.remove();
        console.log(" -------------|Remove Button|------------");
    }
})


let addBtn = document.querySelector('.addbox .inner-addbox a');
// console.log(addBtn);

addBtn.addEventListener('click', function (e) {
    console.log("-------------|Add Book Button|------------- ");
    e.preventDefault();
    console.log(e.target);

    let newBookName = document.querySelector('.addbox .inner-addbox input').value;
    console.log("New Book Name : ", newBookName);

    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = newBookName;
    li.appendChild(span);
    let a = document.createElement('a');
    a.textContent = 'Remove';
    li.appendChild(a);

    removeBtn.appendChild(li);
    console.log(li);
    console.log("-------------|Add Book Button|------------- ");
})

let searchBar = document.querySelector('.top .search input');
// console.log(searchBar);

searchBar.addEventListener('keyup', function(e){
    // console.log(searchBar.value);

    let char = searchBar.value;
    let searchName = document.querySelectorAll('.box ul li span');
    // console.log(searchName);
    // console.log(char);

    for (var i = 0; i < searchName.length; i++) {
        // console.log(searchName[i].textContent);
        if(searchName[i].textContent.toLowerCase().indexOf(char.toLowerCase()) != -1){
            console.log("YESSSSSSSSSSS");
            searchName[i].parentElement.style='display: block;'
        }else{
            searchName[i].parentElement.style='display: none;'
        }
    }
})
