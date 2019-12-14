console.log("Connected");

let btn = document.querySelector('.list ul');

console.log(btn);

btn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target.tagName == 'A');
    let deleteBook = e.target.parentNode.parentNode;
    btn.removeChild(deleteBook);
})

let addBtn = document.querySelector('.addBtn');
console.log(addBtn);

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    let newBookName = document.querySelector('#addBox header input[type="text"]').value;
    let li = document.createElement('li');
    let i = document.createElement('i');
    i.className = 'fas fa-book';
    i.classList.add('bookIcon');
    let span = document.createElement('span');
    span.className = 'bookName';
    span.textContent = "     " + newBookName;
    let abbr = document.createElement('abbr');
    let a = document.createElement('a');
    let i2 = document.createElement('i');
    a.textContent = 'Remove ';
    i2.className = "fas fa-times";

    let status = li.getAttribute('class', 'id');
    console.log(status);
    li.appendChild(i);
    li.appendChild(span);
    li.appendChild(abbr);
    abbr.appendChild(a);
    a.appendChild(i2);

    let chutiya = document.querySelector('#list ul');
    console.log(chutiya);
    chutiya.appendChild(li);
    console.log(btn);
})

let searchBar = document.querySelector('#top input');
console.log(searchBar);

searchBar.addEventListener('keyup', function(e){
    let term = e.target.value.toLowerCase();
    books = btn.querySelectorAll('li');
    let arr = Array.from(books);
    console.log(Array.isArray(arr));
    for (var i = 0; i < arr.length; i++) {
        let title = arr[i].querySelector('span').textContent;
        console.log(title);
        if(title.toLowerCase().indexOf(term) != -1){
            arr[i].style.display = 'block';
            console.log(title.toLowerCase().indexOf(term));
        }else{
            arr[i].style.display = 'none';
            console.log(title.toLowerCase().indexOf(term));
        }
    }
})
