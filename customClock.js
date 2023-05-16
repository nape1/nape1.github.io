const canvasProp={width:800,height:350},clockStyle={pixelWidth:6,referenceCanvasClockFontProps:{font:"bold 150px arial",textAlign:"center",fillStyle:"rgb(255, 255, 255)"},renderCanvasProps:{resolution:11,background:"#111"}};let calculatorStyle={bg:"#d6e2e2",fontColor:"#444"};calculatorStyle={bg:"#fff",fontColor:"#b1b1b1"};let customImage=new Image;const customIconCode="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVElEQVR4nGNgGE7gKAMDw38kfJgKcijgPxZMqRwKQJbEZYgXHjkGYi2gmQ8Ooyk6RAW5YQaODptk6kViUvyPRx99fXB4NJmOnGQKAqOl6ShgIBoAAHsiz+pufyj/AAAAAElFTkSuQmCC",code2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nGNgoAbwq9r6nxw8EgxI69n/f8Kai//j2vbAxQqnHPkf1rCDsAHF047+P3jh6f+q2cf/J3bshRv449ef/1n9BzENWLjjxv+Amm3/p224DJbce/bx/zlbr/2fveUq2Mag2u3/D1969v/41RfYDSieduT/0cvP/+dOPASWPHfr9f9Zm6/+n7/9+v8V+27/33Hq4f/+1Rf+H7vy/H/NnBOYBlTNPg62IX/yYbDkmoN3/rcuPvO/a/k5sAFLdt8Eiz148en/xqP3UA3wr976f+amK//9q7eBaZAkyNnL9976v2zPLXiggTDIwNjW3UMlHfjRzQBKAACxuQTtOoSEhgAAAABJRU5ErkJggg==",led="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEBAMAAABb34NNAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpQTFRFDQgDLRsKKRkJCwYCMB0Kllsgh1IdJRYIjlYegU4bIxUHDAgDKBgJCgYCcruF+gAAABRJREFUeJxjYFRmcE1nkJjFsKcWAAtDArz7yK9SAAAAAElFTkSuQmCC";customImage.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEBAMAAABb34NNAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpQTFRFDQgDLRsKKRkJCwYCMB0Kllsgh1IdJRYIjlYegU4bIxUHDAgDKBgJCgYCcruF+gAAABRJREFUeJxjYFRmcE1nkJjFsKcWAAtDArz7yK9SAAAAAElFTkSuQmCC";class Cell{#a=clockStyle.pixelWidth;#b=clockStyle.pixelWidth;constructor(e,t,A,a,s){this.x=e,this.y=t,this.symbol=A,this.color=a,this.total=s}draw(e){e.fillText(this.symbol,this.x,this.y),this.total>750&&e.drawImage(customImage,this.x,this.y,this.#a,this.#b)}}class AsciiEffect{#c=[];#d=[];#e;#a;#b;#f;constructor(e,t,A,a){this.#e=e,this.#a=t,this.#b=A,this.#f=a,this.#d=this.#f.getContext("2d").getImageData(0,0,this.#a,this.#b)}#g(e){return" □ "}#h(t){this.#c=[];for(let A=0;A<this.#d.height;A+=t)for(let a=0;a<this.#d.width;a+=t){let s=4*a,i=4*A,l=i*this.#d.width+s,c=this.#d.data[l],n=this.#d.data[l+1],r=this.#d.data[l+2],h=c+n+r,o=h/3,g=`rgb(${c}, ${n}, ${r})`,C=this.#g(o);this.#c.push(new Cell(a,A,C,g,h))}}#i(){for(let f of(this.#e.clearRect(0,0,this.#a,this.#b),this.#c))f.draw(this.#e)}draw(e){this.#h(e),this.#i()}updatePixels(){this.#d=this.#f.getContext("2d").getImageData(0,0,this.#a,this.#b)}}function insertAfter(e,t){e.parentNode.insertBefore(t,e.nextSibling)}var referenceCanvas=document.createElement("canvas");referenceCanvas.width=canvasProp.width,referenceCanvas.height=canvasProp.height;var referenceCanvasContext=referenceCanvas.getContext("2d",{willReadFrequently:!0}),clockCanvas=document.getElementById("clockCanvas");clockCanvas.style.background=clockStyle.renderCanvasProps.background,clockCanvas.id="clockCanvas",clockCanvas.width=canvasProp.width,clockCanvas.height=.6*canvasProp.height;var clockCanvasContext=clockCanvas.getContext("2d");let effect;function drawClock(e=referenceCanvas,t=referenceCanvasContext){t.fillRect(0,0,e.width,e.height),t.clearRect(0,0,e.width,e.height);var A=new Date,a=A.getHours(),s=A.getMinutes(),i=A.getSeconds();a%=12,a=(a=a||12)<10?"0"+a:a,s=s<10?"0"+s:s,i=i<10?"0"+i:i;let{referenceCanvasClockFontProps:{font:l,textAlign:c,fillStyle:n}}=clockStyle;t.font=l,t.textAlign=c,t.fillStyle=n,t.fillText(`${a} : ${s} : ${i}`,e.width/2,e.height/2),effect.updatePixels(),effect.draw(clockStyle.renderCanvasProps.resolution)}effect=new AsciiEffect(clockCanvasContext,canvasProp.width,canvasProp.height,referenceCanvas),setInterval(drawClock,1e3);