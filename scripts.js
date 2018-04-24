var buttonsWithClass = document.getElementsByClassName('button');
console.log(buttonsWithClass);

console.log(buttonsWithClass.length);

for (var i = 0; i < buttonsWithClass.length; i++) {
    alert(buttonsWithClass[i].innerText);
    console.log(buttonsWithClass[i].innerText);
}