<img src="https://cdn.glitch.com/f8abb766-9950-44ff-9adb-2f5f53fdaf1b%2FCS1_192.png?1552299344920">

# CS1 Agency Headquarters
____

## WARNING :  THIS IS A VERY EARLY WORK IN PROGRESS

## Quick Start (Detailed Instructions to Come)

🍎 Remix this project.

🍎 Add an **ADMIN_KEY** in **.env**

🍎 For the admin account, login with admin and your ADMIN_KEY.

🍎 Add additional accounts through the client console.
```js
CS1.socket.emit('add-user',{key:[ADMIN_KEY],name:[new username],pw:[new user pw]})
```
🍎 After changing any src/ files, in the Tools/Console run:
```sh
pnpm run build
refresh
```


## Overview

🍎 Based upon [A-Frame version 0.9](https://aframe.io/docs/0.9.0/introduction/).
  
🍎 Using [navigation mesh](https://www.donmccurdy.com/2017/08/20/creating-a-nav-mesh-for-a-webvr-scene/) based pathfinding.
  
🍎 Integrated with [D3.js](https://d3js.org/) for data visualization.
- Make examples. (TODO)
  
🍎 Enables easy use of shaders created with [Shader Frog](https://shaderfrog.com/).

🍎 JS, CSS, and JSON bundling, minification, and uglifying with [Rollup](https://rollupjs.org/guide/en).

🍎 Installable as a Progressive Web App [(PWA)](https://developers.google.com/web/progressive-web-apps/).

🍎 **Heads Up Display (HUD) system** including:
- **RingDial** data visualization widget
- **Meter** data visualization widget
- **GUI Widgets** (TODO)

🍎 Collectibiles System
- Offline collection
- Online collection

🍎 [A-Frame Effects](https://github.com/wizgrav/aframe-effects)
- bloom
- glitch
- godrays

🍎 [A-Frame Particle Player](https://github.com/supermedium/aframe-particleplayer-component)
- JSON particles bundling

🍎 BGM System
- via SoundCloud (TODO)

🍎 Player Component
- move player logic and state from game component to player component (TODO)
    
    
