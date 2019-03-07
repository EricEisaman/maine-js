export default class Meter{

  constructor(container,labelText='label',color='white',value=0,min=0,max=1,low=0.25,high=0.75,optimum=0.8){
    this.widget = document.createElement('div');
    this.widget.style.fontSize = window.innerWidth/9/4.5 + 'px';
    this.widget.style.marginTop = window.innerWidth/81 + 'px';
    this.widget.style.marginBottom = window.innerWidth/81 + 'px';
    this.widget.style.color = color;
    this.min = parseFloat(min);
    this.max = parseFloat(max);
    this.range = max-min;
    this.el = document.createElement('meter');
    this.el.setAttribute('value',value);
    this.el.setAttribute('min',min);
    this.el.setAttribute('max',max);
    this.el.setAttribute('low',low);
    this.el.setAttribute('high',high);
    this.el.setAttribute('optimum',optimum);
    this.el.style.width = window.innerWidth/8 + 'px';
    this.el.style.height = window.innerWidth/32 + 'px';
    this.widget.appendChild(this.el);
    this.label = document.createElement('div');
    this.label.style.textAlign = 'center';
    this.label.innerHTML = labelText;
    this.widget.appendChild(this.label);
    container.appendChild(this.widget);
  }
  
  animateTo(to) {
      var v = parseFloat(this.el.getAttribute('value'));
      var self = this.el;
      self.range = this.range;
      var intervalOne = setInterval(function() {
          var p =  (v>to)? +(to /v).toFixed(4)  : +(v / to).toFixed(4);
          var a = (p < 0.95) ? self.range/30 - (self.range/30 * p) : 0.003;
          if(to<v){
            
            v -= a;
              // Stop
              if(v <= -to) {
                  self.value = to
                  clearInterval(intervalOne);
              }
          }else {
             v += a;
              // Stop
              if(v >= +to) {
                  self.value = to;
                  clearInterval(intervalOne);
              }
          }
          self.value = v;
      }, 10);
  };
  


}