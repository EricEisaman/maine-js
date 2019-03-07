export default CS1=>{AFRAME.registerComponent("collectible", {
	schema: {
    threshold: {type: 'number', default: 2.0},
    collectSound: {type: 'string',default:'https://cdn.glitch.com/630690db-5297-4f44-9d50-b6fb8e795635%2Fcollect.mp3?1551286422648'}
	},
	init: function()
	{
    this.el.setAttribute('sound',`src:url(${this.data.collectSound})`);
    if(!CS1.collectibles)CS1.collectibles=[];
    CS1.collectibles.push(this);
    this.soundIsPlaying=false;
    if(!CS1.socket._callbacks["$request-for-collectibles"])
    CS1.socket.on('request-for-collectibles',()=>{
      CS1.socket.emit('initial-collectibles-state', CS1.collectibles.length);
    });
    if(!CS1.socket._callbacks["$update-collectible"])
    CS1.socket.on('update-collectible',data=>{
      let collectedEntity = CS1.collectibles[data.index];
      collectedEntity.el.setAttribute('visible',false);
      collectedEntity.soundIsPlaying=true;
      collectedEntity.el.components.sound.playSound();
      collectedEntity.el.addEventListener('sound-ended',e=>{
        collectedEntity.pause();  
      });
      if(data.collector==CS1.socket.id){
        CS1.hud.pointsDial.animateTo(CS1.hud.pointsDial.value+5);
      }
    });
  }, 
	tick: function()
	{   
     if(this.el.object3D.position.distanceTo(CS1.myPlayer.object3D.position) < this.data.threshold){ 
       this.collect();
     }
		
	},
  
  collect: function(){
    if(this.soundIsPlaying)return;
    if(CS1.socket.disconnected){
      this.el.setAttribute('visible',false);
      this.soundIsPlaying=true;
      this.el.components.sound.playSound();
      CS1.hud.pointsDial.animateTo(CS1.hud.pointsDial.value+5);
      this.el.addEventListener('sound-ended',e=>{
        this.pause();
      }); 
    } else{
      CS1.socket.emit('request-collection',{index: CS1.collectibles.indexOf(this)}); 
    
    }
 
  }
  
  
})
  
}