import * as THREE from 'three';
import CreateParticles from './CreateParticles';

class Environment {
  constructor(font, particle) {
    this.font = font;
    console.log("Font Environment: ", this.font)
    this.particle = particle;
    this.scene = new THREE.Scene();
    this.camera = null;
    this.renderer = null;
    this.createParticles = null;

    this.bindEvents = this.bindEvents.bind(this);
    this.setup = this.setup.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    
  }

  init(container) {
    this.createCamera();
    this.createRenderer(container);
    this.bindEvents();
    this.renderScene();

    // Call setup during initialization
    this.setup();
  }

  bindEvents() {
    window.addEventListener('resize', this.onWindowResize);
  }

  setup() {
    // Initialize createParticles using the 'new' keyword
    this.createParticles = new CreateParticles(
      this.scene,
      this.font,
      this.particle,
      this.camera,
      this.renderer
    );
  }

  renderScene() {
    // Check if createParticles is initialized before rendering
    if (this.createParticles) {
      this.createParticles.render();
      this.renderer.render(this.scene, this.camera);
    }
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.set(0, 0, 100);
  }

  createRenderer(container) {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(this.renderer.domElement);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  dispose() {
    // Add cleanup logic if necessary
    window.removeEventListener('resize', this.onWindowResize);
  }
}

export default Environment;
