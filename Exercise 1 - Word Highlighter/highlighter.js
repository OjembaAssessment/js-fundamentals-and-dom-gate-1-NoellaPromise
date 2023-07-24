// to highlight a word we use <mark></mark> tag
// 

function highlight(text) {
    let inputText = document.getElementById("myparagraph");
    let innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  }