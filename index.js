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
        // addtoDom(key, typeof window[key])        
    }
}

_________________________________
const boxWrap = document.createElement("div");
async function generateColours(text) {
  // console.log(text.length);
  if (text) {
    text.map((t, i) => {
      const box = document.createElement("div");
      const text = document.createElement("h5");

      box.className = "box";
      box.appendChild(text);
      boxWrap.appendChild(box);

      text.innerText = t;
      box.style.backgroundColor = t;

      let wrapper = document.getElementById("app");
      wrapper.appendChild(boxWrap);
      return null;
    });
  }
}

const getcoloursBtn = document.getElementById("getcolours");
const resetBtn = document.querySelectorAll('button[type="reset"]')[0];
var inputBox = document.querySelectorAll("#input textarea")[0];

resetBtn.addEventListener("click", () => {
  inputBox.value = "";
});

getcoloursBtn.addEventListener("click", async function () {
  await generateColours([]);
  let colourArray = inputBox.value.match(
    /#(([0-9a-fA-F]{2}){3,4}|([0-9a-fA-F]){3,4})/g
  );

  // boxWrap.innerHTML = "";
  await generateColours(colourArray);
  console.log(colourArray);
});