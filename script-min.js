var radius=240,autoRotate=!0,rotateSpeed=-60,imgWidth=120,imgHeight=170,bgMusicURL="music_background.mp3",bgMusicControls=!0,x=document.getElementById("myAudio"),isPlay=!1;function playAudio(){return console.log("nhatlinh: isPlay",x.paused),x.paused?x.play():x.pause()}myAudio.onplaying=function(){isPlay=!0},myAudio.onpause=function(){isPlay=!1},setTimeout(init,100);var obox=document.getElementById("drag-container"),ospin=document.getElementById("spin-container"),aImg=ospin.getElementsByTagName("img"),aVid=ospin.getElementsByTagName("video"),aEle=[...aImg,...aVid];ospin.style.width=imgWidth+"px",ospin.style.height=imgHeight+"px";var ground=document.getElementById("ground");function init(t){for(var e=0;e<aEle.length;e++)aEle[e].style.transform="rotateY("+e*(360/aEle.length)+"deg) translateZ("+radius+"px)",aEle[e].style.transition="transform 1s",aEle[e].style.transitionDelay=t||(aEle.length-e)/4+"s"}ground.style.width=3*radius+"px",ground.style.height=3*radius+"px";var music=!1;function applyTranform(t){tY>180&&(tY=180),tY<0&&(tY=0),t.style.transform="rotateX("+-tY+"deg) rotateY("+tX+"deg)"}function playSpin(t){ospin.style.animationPlayState=t?"running":"paused"}var sX,sY,nX,nY,desX=0,desY=0,tX=0,tY=10;if(autoRotate){var animationName=rotateSpeed>0?"spin":"spinRevert";ospin.style.animation=`${animationName} ${Math.abs(rotateSpeed)}s infinite linear`}document.onpointerdown=function(t){clearInterval(obox.timer);var e=(t=t||window.event).clientX,n=t.clientY;return this.onpointermove=function(t){var i=(t=t||window.event).clientX,a=t.clientY;tX+=.1*(desX=i-e),tY+=.1*(desY=a-n),applyTranform(obox),e=i,n=a},this.onpointerup=function(t){obox.timer=setInterval((function(){tX+=.1*(desX*=.95),tY+=.1*(desY*=.95),applyTranform(obox),playSpin(!1),Math.abs(desX)<.5&&Math.abs(desY)<.5&&(clearInterval(obox.timer),playSpin(!0))}),17),this.onpointermove=this.onpointerup=null},!1},document.onmousewheel=function(t){var e=(t=t||window.event).wheelDelta/20||-t.detail;radius+=e,init(1)};