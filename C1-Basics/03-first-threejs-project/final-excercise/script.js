import * as THREE from 'three';
console.log(THREE); // THREE is undefined

//Canvas
const canvas = document.querySelector('canvas.webgl');

//Scene
const scene = new THREE.Scene();

//Object
//Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
//Material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//Mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);