import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {Text} from 'troika-three-text'


/**
 * Debug . import GUI from 'lil-gui'; const gui = new GUI()
 */

/**
 * 
 * Load Particle Data 
 */



/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Textures
const textureLoader = new THREE.TextureLoader()
const mrksTexture = textureLoader.load('mrks.jpeg')
const starsTexture = textureLoader.load('star.png')

//Object Materials
const mrksMaterial = new THREE.MeshBasicMaterial()
mrksMaterial.map = mrksTexture
mrksMaterial.color = new THREE.Color(0xffffff)
mrksMaterial.shiniess = 100

// enter Mrks
const mrks = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 23, 42),
    mrksMaterial
)

// enter Stars

const starsGeometry = new THREE.BufferGeometry(1, 1, 1)
const count = 4223

const positions = new Float32Array(count * 3)
const colors = new Float32Array(count * 3)

for(let i = 0; i < count * 3; i++)
{
    positions[i] = (Math.random() - 0.5) * 23
    colors[i] = Math.random()

}

starsGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
)

starsGeometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colors, 3)
)

const starsMaterial = new THREE.PointsMaterial()
starsMaterial.size = 0.001
starsMaterial.sizeAttenuation = true
starsMaterial.color = new THREE.Color ('#ffffff')
starsMaterial.transparent = true
//starsMaterial.alphaMap = starsTexture
starsMaterial.alphaTest = 0.001
starsMaterial.depthWrite = false
starsMaterial.blending = THREE.AdditiveBlending
//starsMaterial.vertexColors = true

const stars = new THREE.Points(starsGeometry, starsMaterial)


/**
 * Scene
 */

const scene = new THREE.Scene()
scene.add(mrks, stars)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
} 

/**
 * 
 * Search 
 */



/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * ticktock
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Rotations
    mrks.rotation.y = .23 * elapsedTime
    mrks.rotation.x = .42 * elapsedTime
    stars.rotation.y = 0.02 * elapsedTime


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


// Create:
const myText = new Text()
scene.add(myText)

// Set properties to configure:
myText.text = 'Hello world!'
myText.anchorX = 'center'
myText.anchorY = 'middle'
myText.anchorZ = 'center'
myText.fontSize = 0.42
myText.position.z = -23
myText.position.y = 1
myText.position.x = 1
myText.color = 0xFFEF00


// Update the rendering:
myText.sync()    