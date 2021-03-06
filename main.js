import "./style.css";

import * as THREE from "three";

let camera, scene, renderer;
let mesh;

function initThree() {
  const container = document.createElement("div");
  document.querySelector("#app").appendChild(container);

  scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
}
