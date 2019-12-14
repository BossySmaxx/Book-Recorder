console.log("This is 2nd JS! Connected");

let addBtn = document.querySelectorAll('.addBox header a');

for (var i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', function(e){
        e.preventDefault();
        let bookTag = document.getElementById('#list');
        let bookName,prevBookName;
        bookName = document.querySelector('.addBox header input').value;
        console.log(bookName);
        console.log(bookTag);
    })
}
