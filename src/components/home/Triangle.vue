<template>
  <div ref="stage" class="three-d-a"></div>
</template>

<script>
import * as THREE from 'three';

const mouse = { x: 0, y: 0 };
const getMouse = (e) => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
};

export default {
  data() {
    // === scene ===
    const scene = new THREE.Scene();
    // === renderer ===
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0xFFFFFF, 0);
    renderer.setSize(500, 500);
    // === camera ===
    const camera = new THREE.PerspectiveCamera(25, 1.3, 0.1, 1000);
    camera.position.z = 7;
    // === light ===
    const light = new THREE.DirectionalLight(0x404040);
    // const ambLight = new THREE.AmbientLight( 0x404040 );
    light.position.set(0, 0, 10);

    // === model ===
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    const pyramidGeometry = new THREE.CylinderGeometry(0, 1.5, 1.5, 4, false);
    for (let i = 0; i < pyramidGeometry.faces.length; i += 1) {
      if (pyramidGeometry.faces[i] instanceof THREE.Face4) {
        pyramidGeometry.faces[i].vertexColors[0] = new THREE.Color(0xFFFFFF);
        if ((i % 2) === 0) {
          pyramidGeometry.faces[i].vertexColors[1] = new THREE.Color(0xFFFFFF);
          pyramidGeometry.faces[i].vertexColors[2] = new THREE.Color(0xFFFFFF);
        } else {
          pyramidGeometry.faces[i].vertexColors[1] = new THREE.Color(0xFFFFFF);
          pyramidGeometry.faces[i].vertexColors[2] = new THREE.Color(0xFFFFFF);
        }
        pyramidGeometry.faces[i].vertexColors[3] = new THREE.Color(0xFFFFFF);
      } else {
        pyramidGeometry.faces[i].vertexColors[0] = new THREE.Color(0xFFFFFF);
        pyramidGeometry.faces[i].vertexColors[1] = new THREE.Color(0xFFFFFF);
        pyramidGeometry.faces[i].vertexColors[2] = new THREE.Color(0xFFFFFF);
      }
    }
    const pyramidMaterial = new THREE.MeshBasicMaterial({
      vertexColors: THREE.VertexColors,
      side: THREE.DoubleSide,
    });
    const pyramidMesh = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    pyramidMesh.position.set(0.0, 0.0, 0.0);
    return {
      scene,
      renderer,
      camera,
      light,
      pyramidMesh,
    };
  },
  created() {
    // === sceneにmodel,light, cameraを追加 ===
    window.addEventListener('mousemove', getMouse, false);
    this.scene.add(this.camera);
    this.scene.add(this.light);
    this.scene.add(this.pyramidMesh);
  },
  mounted() {
    // === DOMを追加, animate ===
    this.$refs.stage.appendChild(this.renderer.domElement);
    this.animate();
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      // this.pyramidMesh.rotation.x += 0.05;
      // this.camera.position.x += ( mouse.x - this.camera.position.x) * 0.00001;
      // this.camera.position.y += ( - mouse.y - this.camera.position.y) * 0.00001;
      this.pyramidMesh.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    },
  },
};

</script>

<style>
  .three-d-a {
    display: inline-block
  }
</style>
