// TODO: Add a chair
// TODO: Add a bookshelf
// TODO: Add a chest of drawers under bed
// TODO: Add a rug
// TODO: Make the legs of the bed frame square
// TODO: Push the table to one side of the bed
// TODO: Add two walls

(function () {
  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000); // Set background color

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add orbit controls
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Enable damping (inertia)
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  // Set zoom limits
  controls.minDistance = 2; // Minimum zoom distance
  controls.maxDistance = 8; // Maximum zoom distance

  // Create materials
  const woodMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
  const mattressMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });

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
    const walls = createWalls();

    // Add outlines
    addOutline(bedFrame);
    addOutline(mattress);
    addOutline(floor);
    addOutline(table);
    walls.forEach(addOutline); // Add outlines to walls

    centerCamera();
  }

  // Create the bed frame with legs
  function createBedFrame() {
    const frameGeometry = new THREE.BoxGeometry(2, 0.25, 4);
    const bedFrame = new THREE.Mesh(frameGeometry, woodMaterial);
    bedFrame.position.set(0, 2, 0);
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
    scene.add(mattress);
    return mattress;
  }

  // Create a simple table with legs under the bed frame
  function createTable() {
    const tableGeometry = new THREE.BoxGeometry(2, 0.25, 2);
    const table = new THREE.Mesh(tableGeometry, woodMaterial);
    table.position.set(0, 1, 0); // Position it under the bed frame
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
      scene.add(leg);
      addOutline(leg); // Add outline to each leg
    });

    return table;
  }

  // Create the floor using BoxGeometry
  function createFloor() {
    const floorGeometry = new THREE.BoxGeometry(8, 0.1, 8);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -0.05; // Position it at the bottom
    scene.add(floor);
    return floor;
  }

  // Create two walls perpendicular to the floor
  function createWalls() {
    const wallGeometry = new THREE.BoxGeometry(8, 4, 0.1);

    // Wall 1
    const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
    wall1.position.set(0, 2, -4); // Positioned at the back
    scene.add(wall1);

    // Wall 2
    const wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
    wall2.rotation.y = Math.PI / 2; // Rotate to be perpendicular
    wall2.position.set(-4, 2, 0); // Positioned to the left
    scene.add(wall2);

    return [wall1, wall2];
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
    controls.update(); // Update controls
    renderer.render(scene, camera);
  }

  // Initialize and start animation
  initScene();
  animate();
})();
