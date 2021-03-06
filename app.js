/**
 * 
 * App.js is the javascript file
 * it carries out the main functionality of this project
**/ 



  const setCaret = (pos, parent = el) => {
    for (const node of parent.childNodes) {
      if (node.nodeType == Node.TEXT_NODE) {
        if (node.length >= pos) {
          const range = document.createRange();
          const sel = window.getSelection();
          range.setStart(node, pos);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
          return -1;
        } else {
          pos = pos - node.length;
        }
      } else {
        pos = setCaret(pos, node);
        if (pos < 0) {
          return pos;
        }
      }
    }
    return pos;
  };

  highlight(el);

  el.addEventListener('keydown', e => {
    if (e.which === 9) {
      const pos = caret() + tab.length;
      const range = window.getSelection().getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(tab));
      highlight(el);
      setCaret(pos);
      e.preventDefault();
    }
  });

  el.addEventListener('keyup', e => {
    if (e.keyCode >= 0x30 || e.keyCode == 0x20) {
      const pos = caret();
      highlight(el);
      setCaret(pos);
    }
  });
};

// Turn div into an editor
const el = document.querySelector('.editor');
el.focus();
editor(el);

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




