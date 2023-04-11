import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui';


/**
 * Debug . const gui = new GUI()
 */



/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Textures
const textureLoader = new THREE.TextureLoader()
const mrksTexture = textureLoader.load('mrks.jpeg')

//Object Materials
const mrksMaterial = new THREE.MeshBasicMaterial()
mrksMaterial.map = mrksTexture
mrksMaterial.color = new THREE.Color(0xfce205)
mrksMaterial.shiniess = 100

// enter Mrks
const mrks = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 23, 42),
    mrksMaterial
)

/**
 * Scene
 */

const scene = new THREE.Scene()
scene.add(mrks)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
} 


window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 5
camera.position.y = 5
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

    // Rotate mrks
    mrks.rotation.y = .23 * elapsedTime
    mrks.rotation.x = .42 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()