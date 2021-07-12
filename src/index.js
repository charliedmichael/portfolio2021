// console.log('Hi');
import './style.css';
// import { gsap } from "../node_modules/gsap/src/all.js";
// import { ScrollTrigger } from '../node_modules/gsap/ScrollTrigger.js';
// gsap.registerPlugin(ScrollTrigger);

import * as THREE from "../node_modules/three/build/three.module.js";
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// import smoothscroll from '../node_modules/smoothscroll-polyfill/dist/smoothscroll.js';
// smoothscroll.polyfill();


let root = document.querySelector(':root');

let marqueeContainer = document.getElementById('marqueeContainer');

let aboutButton = document.getElementById('nav-about');

function scrollToTop () {
    // console.log('top click');

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

};

aboutButton.addEventListener( 'click', throttle(scrollToTop) );

// GRID

window.addEventListener('load', setGrid);
window.addEventListener('resize', setGrid);


function setGrid() {
    // var gridHeight = $(document).height(); 
    var gridHeight = document.body.scrollHeight * 7; 
    let gridWidth = window.innerWidth * 3;

    const bgCanvas = document.getElementById('bgCanvas');
    
    bgCanvas.setAttribute("height", gridHeight);
    bgCanvas.setAttribute("width", gridWidth);
    
    const ctx = bgCanvas.getContext('2d');
    
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;
    const lineSpace = 50;

    var gridRows = gridHeight / lineSpace;

    for (let i = 1; i < gridRows; i++) {
        ctx.beginPath();
        ctx.moveTo( 0, i * lineSpace );
        ctx.lineTo( gridWidth, i * lineSpace );
        ctx.stroke();
    }

    var gridCols = gridWidth / lineSpace;
  
    for (let i = 1; i < gridCols; i++) {
        ctx.beginPath();
        ctx.moveTo( i * lineSpace, 0 );
        ctx.lineTo( i * lineSpace, gridHeight);
        ctx.stroke();
    }
    
}

// POPUP

let popMarquee = document.getElementById('popMarquee');
let popMarquee2 = document.getElementById('popMarquee2');

let popupArray = document.querySelectorAll("#popup");

let popupFrame = document.querySelectorAll(".popupFrame").forEach(item => {
    item.addEventListener('click', event => {
        let popup = item.previousElementSibling;
        const split = item.firstElementChild;

        popMarquee.style.visibility = 'visible';
        split.classList.toggle('hidden');
        popup.classList.toggle('pop');
        // console.log('pop');

        popup.onclick = function () {
            popMarquee.style.visibility = 'hidden';

            scrollPopAdjust;

            popup.classList.toggle('pop');
            split.classList.toggle('hidden');
        };        

    })
});

let popTrigger = document.querySelectorAll(".popTrigger").forEach(item => {
    item.addEventListener('click', event => {
        let popup = item.previousElementSibling;

        let vis = false;

        for (let i = 0; i < popupArray.length; i++){

            if ( popupArray[i].classList.contains('pop') ) {

                vis = true;
                console.log('popupFrame is visible');
            } 

        };

        if ( popupAbout.classList.contains('pop') ) {

            vis = true;
            console.log('popupAbout is visible');
        } 

        if (vis == true) {
            scrollPopAdjust;
            console.log( 'button test');
            // popMarquee2.style.visibility = 'hidden';
            // popMarquee2.classList.toggle('visible');
            popMarquee2.style.visibility = 'visible';

            popup.classList.toggle('pop');

            popup.onclick = function () {
    
                let vis = false;
    
                scrollPopAdjust;
                popup.classList.toggle('pop');
    
                popMarquee2.style.visibility = 'hidden';
            }

        }

        if (vis == false) {

            popup.classList.toggle('pop');
            popMarquee2.style.visibility = 'visible';
    
            console.log('pop');
    
            popup.onclick = function () {
    
                let vis = false;
    
                scrollPopAdjust;
                popup.classList.toggle('pop');
    
                popMarquee2.style.visibility = 'hidden';
            }

        }
    });
});

// SCROLL SAVE

let rootStyle = getComputedStyle(root);
let gapWidth = rootStyle.getPropertyValue('--gapWidth');
let gapParse = parseInt(gapWidth);

const navGap = rootStyle.getPropertyValue('--navGap');
const navParse = parseInt(navGap);

let scrollArea = document.getElementById('parallax-container');

function scrollPopAdjust() {

    // console.log('scrollpop adjust');

    let scrollAmount = document.documentElement.dataset.scroll = scrollArea.scrollTop;
	// console.log(document.documentElement.dataset.scroll);

    let scrollParse = parseInt(scrollAmount);

    let totalTop = scrollParse + gapParse + navParse;
    let totalBottom = gapParse - scrollParse;

    // console.log( totalTop );

    for (let i = 0; i < popupArray.length; i++){
        popupArray[i].style.top = totalTop + 'px';

    }

    // popMarquee.style.bottom = totalBottom + 'px';
    popMarquee.style.bottom = totalBottom + 'px';

    
};

// let timerId;

// var  debounceFunction  =  function (func, delay) {
// 	// Cancels the setTimeout method execution
// 	clearTimeout(timerId)

// 	// Executes the func after delay time.
// 	timerId  =  setTimeout(func, delay)
// }

function throttle (callback, limit) {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback.apply(this, arguments);  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit);
        }
    }
}



scrollArea.addEventListener('scroll', (event) => {

    scrollPopAdjust(); 
    // console.log('scroll test');

});

// SPLIT

let split = document.querySelectorAll(".split").forEach(item => {
    // const split = document.querySelector('.split');
    const text = item.innerHTML;
    item.style.setProperty('--numchs', text.length);

    const lengthF = 0.01765;
    // let Ftracking = lengthF * window.innerWidth;
    item.style.setProperty('--lengthF', lengthF);
    
    const splitStyle = window.getComputedStyle(item);
    const splitFSize = splitStyle.getPropertyValue('font-size');
    item.style.setProperty('--fSize', splitFSize);

    // item.style.setProperty('--rotateAmount', 0);
    
    item.innerHTML = '';        
    for ( let i = 0; i < text.length; i++ ) {
      item.innerHTML = item.innerHTML + '<div class="char" style="--char-index: ' + i + ';">' + text.charAt(i) + '</div>';
    }

});

let titleSplit = document.querySelectorAll(".titleSplit").forEach(item => {
    const text = item.innerHTML;
    item.style.setProperty('--numchs', text.length);
    
    item.innerHTML = '';        
    for ( let i = 0; i < text.length; i++ ) {
      item.innerHTML = item.innerHTML + '<div class="char" style="--char-index: ' + i + ';">' + text.charAt(i) + '</div>';
    }

});




// 333JJJSSS

let voyagetoybMesh, slurpMesh;
let renderer, renderer2, scene, scene2, camera, camera2;
let canvasWidth, canvasWidth2, canvasHeight, canvasHeight2;
let modelCanvas = document.getElementById('modelCanvas');
let modelCanvas2 = document.getElementById('modelCanvas2');
let frame = document.getElementById('frame');
let frameLong = document.getElementById('frameLong');
let frameSDF = document.getElementById('frameSDF');

function init() { 

    scene = new THREE.Scene(); 
    scene2 = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 50, frame.offsetWidth / frame.offsetWidth, 0.1, 1000);
    camera2 = new THREE.PerspectiveCamera( 50, canvasWidth2 / canvasHeight2, 0.1, 1000);
    scene2.add( camera2 );

    camera.position.z = 3.5;   
    camera2.position.z = 3.25; 


    renderer = new THREE.WebGLRenderer( {
        canvas: modelCanvas,
        alpha: true,
        antialias: true,
    });
    
    renderer.setSize( canvasWidth, canvasHeight );

    renderer2 = new THREE.WebGLRenderer( {
        canvas: modelCanvas2,
        alpha: true,
        antialias: true,
    });
    renderer2.setSize( canvasWidth2, canvasHeight2 );


    // LIGHTS

    const ambLight = new THREE.AmbientLight('#fff', 1.5);
    scene2.add(ambLight);

    const ambLight2 = new THREE.AmbientLight('#fff', 1);

    scene.add( ambLight2 );

    // SLURP
    let loader = new GLTFLoader();
    let slurpScale = 0.27;
    loader.load( '../src/models/SLURP-can.glb', function ( gltf ) {

        slurpMesh = gltf.scene;
        slurpMesh.traverse(function(o) {
            if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;
                o.material.metalness = 0;

            }
            });
        slurpMesh.scale.set( slurpScale, slurpScale, slurpScale );


        scene.add( slurpMesh );
    
    } );
    
    // VOYAGE TO YB
    let ybScale = 1;
    loader.load( '../src/models/voyagetoyb-2.glb', function ( gltf ) {

        voyagetoybMesh = gltf.scene;
        voyagetoybMesh.traverse(function(o) {
            if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;
                o.material.metalness = 0;

            }
            });
        voyagetoybMesh.scale.set( ybScale, ybScale, ybScale );


        scene2.add( voyagetoybMesh );
    
    } );

}

function animate() {

    requestAnimationFrame( animate );

    // voyagetoybMesh.rotation.y += 0.01;
    // slurpMesh.rotation.y += 0.01;

    renderer.render( scene, camera );
    renderer2.render( scene2, camera2 );
}

function onWindowResize(){

    renderer.setSize(frame.offsetWidth, frame.offsetWidth);
    camera.aspect = frame.offsetWidth / frame.offsetWidth;
    camera.updateProjectionMatrix();


    renderer2.setSize(frameSDF.offsetWidth, frameSDF.offsetHeight );
    camera2.aspect = frameSDF.offsetWidth / frameSDF.offsetHeight ;
    camera2.updateProjectionMatrix();

}

window.addEventListener( 'resize', onWindowResize, false );

window.onload = function () {
    // console.log('on load');

    let intElemClientHeight = document.documentElement.clientHeight;
    let heightString = intElemClientHeight + 'px';
    document.documentElement.style.setProperty('--clientHeight', heightString);


    renderer.setSize(frame.offsetWidth, frame.offsetWidth);
    camera.aspect = frame.offsetWidth / frame.offsetWidth;
    camera.updateProjectionMatrix();


    renderer2.setSize(frameSDF.offsetWidth, frameSDF.offsetHeight );
    camera2.aspect = frameSDF.offsetWidth / frameSDF.offsetHeight ;
    camera2.updateProjectionMatrix();
};

init();
animate();

let rotateAmount = 0;

document.documentElement.style.setProperty('--rotateAmount', '10deg');
document.documentElement.style.setProperty('--rotateXAmt', '5deg');


function rotateElements() {

    let scrollAmount = scrollArea.scrollTop;

    // let spinSpeed = scrollAmount * 0.2;
    // let spinSin = Math.sin( scrollAmount * 0.0008 ) * 15;
    
    // let split = document.querySelectorAll(".split").forEach(item => {
    //     item.style.transform = 'rotateY(' + spinSpeed + 'deg) rotateX(' + spinSin + 'deg)';
    // });

    rotateAmount += ( scrollAmount - rotateAmount ) * 0.01;

    slurpMesh.rotation.y = rotateAmount * 0.015;
    voyagetoybMesh.rotation.y = rotateAmount * 0.015;

    // voyagetoybMesh.rotation.y = spinSpeed * 0.03;
    // slurpMesh.rotation.y = spinSpeed * 0.04;

    requestAnimationFrame( rotateElements );

}

scrollArea.addEventListener( 'scroll', throttle(rotateElements, 500) );
