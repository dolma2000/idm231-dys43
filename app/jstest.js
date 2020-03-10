function toggle(idname) {
    var x = document.getElementById(idname);
    if (x.style.display === "block") {
        x.style.display = 'none';
    }
    else {
        x.style.display = "block";
}
};

const lovers = document.getElementById('lovers')



// console.log ('accessing elements')

// // const example01 = document.querySelector ('.example01')
// // console.log

// const firstUl = document.querySelector('ul');
// console.log('firsUi:',firstUl);
// const myList = document.getElementById('myList');
// console.log ('myList:', myList);

// const hotListItems = document.querySelectorAll ('li.hot')
// hotListItems.forEach (item =>) {
//     if (item.)
// }

// for (let i=0; i< hotListItems.length; i

// const dolma = document.getElementById('blue')
// const yangchen = document.getElementById('pink')
// const sherpa = document.getElementById ('yellow')

// const expandblue = {
//     blue : function() {dolma.style.cssText = "width:50%; transition: width 1s;"},
//     pink : function() {yangchen.style.cssText = "width:25%; transition: width 1s;"},
//     yellow : function() {sherpa.style.cssText = "width:25%; transition: width 1s;"},
// }

// const expandpink = {
//     pink : function() {document.getElementById('pink').style.width = '50%';},
//     blue : function() {document.getElementById('blue').style.width = '25%';},
//     yellow : function() {document.getElementById('yellow').style.width = '25%'},
// }

// const expandyellow = {
//     yellow : function() {document.getElementById('yellow').style.width = '50%';},
//     blue : function() {document.getElementById('blue').style.width = '25%';},
//     pink : function() {document.getElementById('pink').style.width = '25%'},
// }


// dolma.addEventListener('click', function() {
//     expandblue.blue();
//     expandblue.pink();
//     expandblue.yellow();
// });

// yangchen.addEventListener('click', function() {
//     expandpink.pink();
//     expandpink.blue();
//     expandpink.yellow();
// });

// sherpa.addEventListener('click', function() {
//     expandyellow.yellow();
//     expandyellow.blue();
//     expandyellow.pink();
// });
