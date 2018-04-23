var buttonClass = document.getElementsByClassName('button');
console.log(buttonClass);

console.log(buttonClass.length);

for (var i = 0; i < buttonClass.length; i++) {
    alert(buttonClass[i].innerText);
    console.log(buttonClass[i].innerText);
}