import * as THREE from 'three';
import ThreeGeometry from './ThreeGeometry';

/**
 * Class to handle all Three.js canvas rendering logic
 */
export default class CanvasRender {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.objects = [];
    this.initialize();
  }

  initialize() {
    const canvasContainer = document.querySelector('.Canvas3D');
    const canvas = document.getElementById('Canvas3D-render');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 85, 1, 0.1, 1000 );
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas
    });
    this.renderer.setSize( 500, 500 );  // set dimensions
    this.scene.background = new THREE.Color(0xAAAAAA);
    this.camera.position.z = 5;
    canvasContainer.appendChild( this.renderer.domElement );

    const geometry = ThreeGeometry.createTorus();
    this.addGeometry(geometry);
    // this.test();

    const animate = () => {
      requestAnimationFrame( animate );
      this.renderer.render( this.scene, this.camera );
    }

    animate();
  }

  /** Clear all objects from scene */
  clear() {
    while (this.objects.length > 0) {
      const object = this.objects.pop();
      this.scene.remove(object);
    }
  }

  /** Add object to scene */
  addObject(obj) {
    this.scene.add(obj.mesh);
    this.scene.add(obj.lines);
    this.objects.push(obj);
  }

  /** Create mesh and edge for geometry, then add to scene */
  addGeometry(geometry) {
    const material = new THREE.MeshBasicMaterial( {color: 0xeeeeee} );
    const mesh = new THREE.Mesh( geometry, material );
    const edges = new THREE.EdgesGeometry( geometry );
    const lines = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x666666 } ) );
    this.randomRotate({ mesh, lines });
    this.addObject({ mesh, lines });
  }

  test() {
    for (let obj of this.objects) {
      const randomX = Math.random() * 2 - Math.random() * 2;
      const randomY = Math.random() * 2 - Math.random() * 2;
      obj.mesh.position.x = randomX;
      obj.lines.position.x = randomX;
      obj.mesh.position.y = randomY;
      obj.lines.position.y = randomY;
    }
  }

  /** Randomly rotate mesh/lines */
  randomRotate({ mesh, lines }) {
    const randomX = Math.random() * Math.PI;
    const randomY = Math.random() * Math.PI;
    mesh.rotation.x = randomX;
    mesh.rotation.y = randomY;
    lines.rotation.x = randomX;
    lines.rotation.y = randomY;
  }

}

