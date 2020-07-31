<template>
  <div class="Canvas3D">
    <canvas id="Canvas3D-render" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: "Canvas3D",
  props: {
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
  mounted: () => {
    const canvasContainer = document.querySelector('.Canvas3D');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
    const canvas = document.getElementById('Canvas3D-render');
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas
    });
    renderer.setSize( 500, 500 );
    scene.background = new THREE.Color(0xAAAAAA);
    canvasContainer.appendChild( renderer.domElement );

    const geometry = new THREE.TorusKnotBufferGeometry(1.8, 0.5, 64);
    const material = new THREE.MeshBasicMaterial( {color: 0xeeeeee} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var edges = new THREE.EdgesGeometry( geometry );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x666666 } ) );
    scene.add( line );


    var light = new THREE.DirectionalLight( 0x3275a8 );
    scene.add( light );


    camera.position.z = 5;

    function animate() {
      requestAnimationFrame( animate );
      // cube.rotation.x += -0.01;
      // line.rotation.x += -0.01;
      // cube.rotation.y += 0.01;
      // line.rotation.y += 0.01;
      renderer.render( scene, camera );
    }

    animate();
  }
};
</script>

<style>
.Canvas3D {
  border: 1px solid blue;
}

#Canvas3D-render {
  border: 1px solid orange;
}
</style>