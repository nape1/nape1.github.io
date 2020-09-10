// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `${navigator.userAgent}`;

// window.addEventListener('load', ()=>{
//   // let long,lat;
//   // if(navigator.geolocation){
//   //   navigator.geolocation.getCurrentPosition(position =>{
//   //     console.log(position);
//   //   }) 
//   // }
//   console.log(navigator)
  
// })

// if(navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPhone/i)){
//   appDiv.innerHTML = `${navigator.userAgent}`;
// }

checkVersion = function () {
    var agent = window.navigator.userAgent,
    start = agent.indexOf( 'OS ' );
    if( ( agent.indexOf( 'iPhone' ) > -1 || agent.indexOf( 'iPad' ) > -1 ) && start > -1 ){
        return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
    }
    return 0;
}
const ro = document.getElementById('RO');
if(!checkVersion){
    ro.innerHTML='ipad detected'
}