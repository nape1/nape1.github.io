var findbtn = document.getElementById("find");
var stringData = document.getElementById("stringData");
findbtn.addEventListener("click", async function() {
    colors = await findColours(stringData.textContent);
    console.log(colors);
    await findEachSubstring(stringData, colors);
    // var pos = await findPos(stringData.textContent, colors[0]);
})

//async function to find the hexcolours in the string
async function findColours(text) {
    let colours = text.match(/#(([0-9a-fA-F]{2}){3,4}|([0-9a-fA-F]){3,4})/g);
    return new Set(colours);
}

//fing substing and highlight it
async function findEachSubstring(str, colors) {
    // var startIndex = 0,
    //     index,
    //     result = [];
    // while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    //     result.push(index);
    //     startIndex = index + searchStr.length;
    // }
    // console.log(result);
    // return result;
    colors.forEach(color => {
        var inde = findPos(str.textContent, color);
        console.log(color,inde);
        str.innerHTML = str.innerHTML.replaceAll(color, `<span class="color-text">${color}<div class="color-pop" style="background-color:${color}"></div></span>`);
        // str.innerHTML = str.innerHTML.replace(`${color}/g`, `<span style="background-color:${color}">${color}</span>`);
        // (/fox/,"<span>fox</span>")
        

        // inde.forEach(index => {
        //     var newDiv = document.createElement("div");
        //     newDiv.className = "box";
        //     newDiv.style.backgroundColor = color;
        //     newDiv.style.color = "white";
        //     newDiv.innerText = color;
        //     str.appendChild(newDiv);
        //     newDiv.style.left = index + "px";
        // })
    });
}



 // find positon of string in an element and highlight it
function findPos(str, searchStr) {
    var startIndex = 0,
        index,
        indices = [];
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStr.length;
    }
    return indices;
}