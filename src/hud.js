let config = {
  regions:{
    top:true,
    left:false,
    right:false,
    bottom:false
  }
}

import RingDial from './ring-dial';
import Meter from './meter';

export default CS1=>{

  window.addEventListener('load', function () {
    CS1.hud = {};
    let hudElement = document.querySelector('#hud');
    let containers = generateRegions(hudElement);
    CS1.hud.pointsDial = new RingDial(containers.top,'points','','#ccc','white','red');
    CS1.hud.statusDial = new RingDial(containers.top,'status','%','#ccc','white','lime');
    CS1.hud.magicDial = new RingDial(containers.top,'magic','%','#ccc','white','#b45ef9');
    CS1.hud.oxygenMeter = new Meter(containers.top,'oxygen','#ccc',0.9);
    setInterval(e=>{
      CS1.hud.statusDial.animateTo(100*Math.random());
      CS1.hud.magicDial.animateTo(100*Math.random());
      CS1.hud.oxygenMeter.animateTo(Math.random());
    },4000);
  });
  
  function generateRegions(hudElement){
   let containers = {};
   if(config.regions.top){
     let top = document.createElement('div');
     top.style.position = 'relative';
     top.style.left = '0px';
     top.style.top = '0px';
     top.style.width = window.innerWidth + 'px';
     top.style.height = window.innerWidth/8 + 'px';
     containers.top = top;
     hudElement.appendChild(top);
   }
   if(config.regions.left){
   
   }
   if(config.regions.right){
   
   }
   if(config.regions.bottom){
     let bottom = document.createElement('div');
     bottom.style.position = 'absolute';
     bottom.style.left = '0px';
     bottom.style.top = window.innerHeight - window.innerWidth/8 + 'px';
     bottom.style.width = window.innerWidth + 'px';
     bottom.style.height = window.innerWidth/8 + 'px';
     containers.bottom = bottom;
     hudElement.appendChild(bottom);
   }
   return containers;
  }
  
}

