class createElement {
    constructor(text, type){
        this.text = text;
        this.type = type;
    }
    addtoDom(){
        let app = document.getElementById('app'),
            node = document.createElement("LI"),
            text = document.createTextNode(text);
        node.appendChild(text)
        app.appendChild(node)
    }
}

function addtoDom(textcontent, typeofel){
    let app = document.getElementById('app'),
        node = document.createElement("div"),
        text = document.createTextNode(textcontent);
        console.log(textcontent,'textcontent',typeofel,'typeofel');
    node.classList.add(`${typeofel}`);
    node.appendChild(text)
    app.appendChild(node)
}

for (let key in window) {
    console.log(key,'key', window[key],'value', typeof window[key]);
    if(typeof window[key] == 'string' || typeof window[key] == 'number'){
        addtoDom(key, typeof window[key])        
    }
  }