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
    const size = (window.innerWidth / 100) * 31;
    renderer.setSize(size, size);
    // === camera ===
    const camera = new THREE.PerspectiveCamera(25, 1.3, 0.1, 1000);
    camera.position.z = 8;
    // === light ===
    const light = new THREE.DirectionalLight(0x404040);
    // const ambLight = new THREE.AmbientLight( 0x404040 );
    light.position.set(0, 0, 10);

    // === model ===
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
    pyramidMesh.rotation.y = 0.8;
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
    this.renderer.render(this.scene, this.camera);
    setTimeout(() => {
      this.animate();
    }, 3300);
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
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
