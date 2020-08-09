import * as THREE from 'three';
import _ from 'lodash';

/**
 * Factory class to create Three.js geometries
 */
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

  static createSurface(
    segments = 8,
    pStart = 1,
    pLength = 1
  ) {
    const points = [];
    for (let i = 0; i < 10; ++i) {
      points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * .8));
    }

    return new THREE.LatheBufferGeometry(points, segments, pStart, pLength);
  }

  static createTorus(
    radius = 2,
    tube = 0.5,
    radialSegments = 8,
    tubeSegments = 18
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

  /** Return a random geometry from all available base types */
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