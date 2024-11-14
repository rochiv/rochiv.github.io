import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

(function () {
  try {
    // Initialize stats
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Check if container exists
    const container = document.getElementById("container");
    if (!container) {
      throw new Error("Container element not found");
    }

    // Enhanced renderer settings
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Add directional light
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 5, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 50;
    scene.add(dirLight);

    // Add a hemisphere light for better ambient lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Enhanced orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.minDistance = 2;
    controls.maxDistance = 8;
    controls.maxPolarAngle = Math.PI / 2;

    // Create enhanced materials
    const woodMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b4513,
      roughness: 0.7,
      metalness: 0.1,
    });
    const mattressMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.5,
      metalness: 0,
    });
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      roughness: 0.9,
      metalness: 0,
    });

    // Utility function to add an outline to a mesh
    function addOutline(mesh) {
      const edges = new THREE.EdgesGeometry(mesh.geometry);
      const outlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
      const outline = new THREE.LineSegments(edges, outlineMaterial);
      outline.position.copy(mesh.position);
      outline.rotation.copy(mesh.rotation);
      outline.scale.copy(mesh.scale);
      scene.add(outline);
    }

    // Initialize the scene
    function initScene() {
      const bedFrame = createBedFrame();
      const mattress = createMattress();
      const floor = createFloor();
      const table = createTable();
      createWalls();

      // Add outlines
      addOutline(bedFrame);
      addOutline(mattress);
      addOutline(floor);
      addOutline(table);

      centerCamera();
    }

    // Create the bed frame with legs
    function createBedFrame() {
      const frameGeometry = new THREE.BoxGeometry(2, 0.25, 4);
      const bedFrame = new THREE.Mesh(frameGeometry, woodMaterial);
      bedFrame.position.set(0, 2, 0);
      bedFrame.castShadow = true;
      bedFrame.receiveShadow = true;
      scene.add(bedFrame);

      // Create bed legs
      const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 16);
      const legPositions = [
        [-0.95, 1, -1.95],
        [0.95, 1, -1.95],
        [-0.95, 1, 1.95],
        [0.95, 1, 1.95],
      ];
      legPositions.forEach((pos) => {
        const leg = new THREE.Mesh(legGeometry, woodMaterial);
        leg.position.set(...pos);
        leg.castShadow = true;
        leg.receiveShadow = true;
        scene.add(leg);
        addOutline(leg); // Add outline to each leg
      });

      return bedFrame;
    }

    // Create the mattress
    function createMattress() {
      const mattressGeometry = new THREE.BoxGeometry(2, 0.25, 4);
      const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
      mattress.position.set(0, 2.25, 0);
      mattress.castShadow = true;
      mattress.receiveShadow = true;
      scene.add(mattress);
      return mattress;
    }

    // Create a simple table with legs under the bed frame
    function createTable() {
      const tableGeometry = new THREE.BoxGeometry(2, 0.25, 2);
      const table = new THREE.Mesh(tableGeometry, woodMaterial);
      table.position.set(0, 1, 0); // Position it under the bed frame
      table.castShadow = true;
      table.receiveShadow = true;
      scene.add(table);

      // Create table legs
      const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
      const legPositions = [
        [-0.95, 0.5, -0.95],
        [0.95, 0.5, -0.95],
        [-0.95, 0.5, 0.95],
        [0.95, 0.5, 0.95],
      ];
      legPositions.forEach((pos) => {
        const leg = new THREE.Mesh(legGeometry, woodMaterial);
        leg.position.set(...pos);
        leg.castShadow = true;
        leg.receiveShadow = true;
        scene.add(leg);
        addOutline(leg); // Add outline to each leg
      });

      return table;
    }

    // Create the floor
    function createFloor() {
      const floorGeometry = new THREE.PlaneGeometry(8, 8);
      const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2; // Rotate to be horizontal
      floor.position.y = 0; // Position it at the bottom
      floor.receiveShadow = true;
      scene.add(floor);
      return floor;
    }

    // Create two walls perpendicular to the floor
    function createWalls() {
      const wallGeometry = new THREE.BoxGeometry(8, 4, 0.1);

      // Wall 1
      const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
      wall1.position.set(0, 2, -4); // Positioned at the back
      wall1.receiveShadow = true;
      scene.add(wall1);

      // Wall 2
      const wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
      wall2.rotation.y = Math.PI / 2; // Rotate to be perpendicular
      wall2.position.set(-4, 2, 0); // Positioned to the left
      wall2.receiveShadow = true;
      scene.add(wall2);
    }

    // Center the camera on the bed
    function centerCamera() {
      camera.position.set(6, 6, 6); // Position the camera at the corner opposite the diagonal
      controls.target.set(0, 2, 0); // Focus on the center of the room
      controls.update();
    }

    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize);

    // Render the scene
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      stats.update();
      renderer.render(scene, camera);
    }

    // Initialize and start animation
    initScene();
    animate();
  } catch (error) {
    console.error("Error initializing scene:", error);
    // Display error on page
    document.body.innerHTML = `<div style="color: white; padding: 20px;">
      Error initializing scene: ${error.message}
    </div>`;
  }
})();
