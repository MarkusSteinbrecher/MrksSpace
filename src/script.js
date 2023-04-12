import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
    new THREE.SphereGeometry(0.5, 5, 8),
    mrksMaterial
)

// enter Stars

const starsGeometry = new THREE.BufferGeometry(1, 1, 1)
const count = 2342

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
 * 
 * Info 
 */
const raycaster = new THREE.Raycaster()
const points = [
    {
        position: new THREE.Vector3(1.55, 0.3, -0.6),
        element: document.querySelector('.point-0'),
    }
]

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

// update Infopoint
controls.update()

for (const point of points)
{
    const screenPosition = point.position.clone()
    screenPosition.project(camera)

    raycaster.setFromCamera(screenPosition, camera)
    const intersects = raycaster.intersectObjects(scene.children, true)
    if (intersects.length == 0) 
    {
        point.element.classList.add('visible')
    } 
    else 
    {
        const intersectionDistance = intersects[0].distance
        const pointDistance = point.position.distanceTo(camera.position)
        if(intersectionDistance < pointDistance)
        {
            point.element.classList.add('visible')
        }
        else 
        {
            point.element.classList.remove('visible')
        }
    }

    const translateX = screenPosition.x * sizes.width * 0.5
    const translateY = -screenPosition.y * sizes.height * 0.5
    point.element.style.transform = `translate(${translateX}px, ${translateY}px)`

}
  