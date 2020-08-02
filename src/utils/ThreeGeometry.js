import * as THREE from 'three';
import _ from 'lodash';

export default class ThreeGeometry {
  static createCube(
    width = 2,
    height = 2,
    depth = 2,
  ) {
    return new THREE.BoxBufferGeometry(width, height, depth);
  }

  static createSphere(
    radius = 2,
    wSegments = 12,
    hSegments = 12
  ) {
    return new THREE.SphereBufferGeometry(radius, wSegments, hSegments);
  }

  static createTorus(
    radius = 2,
    tube = 0.6,
    radialSegments = 10,
    tubeSegments = 12
  ) {
    return new THREE.TorusBufferGeometry(radius, tube, radialSegments, tubeSegments);
  }

  static createTorusKnot(
    radius = 1.8,
    tube = 0.6,
    tubeSegments = 64
  ) {
    return new THREE.TorusKnotBufferGeometry(radius, tube, tubeSegments);
  }

  static createRandom() {
    const shapes = [
      this.createCube,
      this.createSphere,
      this.createTorus,
      this.createTorusKnot
    ]

    return _.sample(shapes)();
  }
}