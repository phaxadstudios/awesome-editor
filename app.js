/**
 * 
 * App.js is the javascript file
 * it carries out the main functionality of this project
**/ 





/** the workings **/
const first = document.querySelector('.first');
const iframe = document.querySelector('.second');
const button = document.querySelector('button');
const button_edit = document.querySelector('.button-edit');

button_edit.addEventListener("click", function(){
	var html = first.textContent;
	iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

/** This function adds the no reload feature 
 * which executes the codes while still writing 

**/ 
first.addEventListener('keyup', function(){
	var html = first.textContent;
	iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);

})
/** end of function **/

first.addEventListener('paste', function(e){
	e.preventDefault();

	var text = e.clipboardData.getData("text/plain");

	document.execCommand("insertText", false,text);
})




