import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure any styles are imported
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

function ThreeScene() {
  useEffect(() => {
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

      // Append renderer to the 'root' element
      const rootElement = document.getElementById("root");
      if (!rootElement) {
        throw new Error("Root element not found");
      }
      rootElement.appendChild(renderer.domElement);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      // Add directional light
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(4, 4, 4);
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
      controls.minAzimuthAngle = 0;
      controls.maxAzimuthAngle = Math.PI / 2;

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

      const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0x808080,
        roughness: 0.9,
        metalness: 0,
      });

      const wallMaterial = new THREE.MeshStandardMaterial({
        color: 0x808080,
        roughness: 0.9,
        metalness: 0,
      });

      /**
       * Adds an outline to a given mesh.
       * @param {THREE.Mesh} mesh - The mesh to which the outline will be added.
       */
      function addOutline(mesh) {
        const edges = new THREE.EdgesGeometry(mesh.geometry);
        const outlineMaterial = new THREE.LineBasicMaterial({
          color: 0x000000,
        });
        const outline = new THREE.LineSegments(edges, outlineMaterial);
        outline.position.copy(mesh.position);
        outline.rotation.copy(mesh.rotation);
        outline.scale.copy(mesh.scale);
        scene.add(outline);
      }

      /**
       * Initializes the scene with objects and lights.
       */
      function initScene() {
        const bedFrame = createBedFrame();
        const mattress = createMattress();
        const floor = createFloor();
        const table = createTable();
        const wallLeft = createWallLeft();
        const wallRight = createWallRight();

        // Add outlines
        addOutline(bedFrame);
        addOutline(mattress);
        addOutline(floor);
        addOutline(table);
        addOutline(wallLeft);
        addOutline(wallRight);

        centerCamera();
      }

      /**
       * Creates the bed frame with legs and adds it to the scene.
       * @returns {THREE.Mesh} The bed frame mesh.
       */
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

      /**
       * Creates the mattress and adds it to the scene.
       * @returns {THREE.Mesh} The mattress mesh.
       */
      function createMattress() {
        const mattressGeometry = new THREE.BoxGeometry(2, 0.25, 4);
        const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
        mattress.position.set(0, 2.25, 0);
        mattress.castShadow = true;
        mattress.receiveShadow = true;
        scene.add(mattress);
        return mattress;
      }

      /**
       * Creates a simple table with legs and adds it to the scene.
       * @returns {THREE.Mesh} The table mesh.
       */
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

      /**
       * Creates the floor and adds it to the scene.
       * @returns {THREE.Mesh} The floor mesh.
       */
      function createFloor() {
        const floorGeometry = new THREE.PlaneGeometry(8, 8);

        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2; // Rotate to be horizontal
        floor.position.y = 0; // Position it at the bottom
        floor.receiveShadow = true;
        scene.add(floor);
        return floor;
      }

      /**
       * Creates the left wall and adds it to the scene.
       * @returns {THREE.Mesh} The left wall mesh.
       */
      function createWallLeft() {
        const wallGeometry = new THREE.PlaneGeometry(8, 8);
        const wallLeft = new THREE.Mesh(wallGeometry, wallMaterial);
        wallLeft.rotation.y = Math.PI / 2; // Rotate to be perpendicular
        wallLeft.position.set(-4, 4, 0); // Positioned to the left
        wallLeft.receiveShadow = true;
        scene.add(wallLeft);

        return wallLeft;
      }

      /**
       * Creates the right wall and adds it to the scene.
       * @returns {THREE.Mesh} The right wall mesh.
       */
      function createWallRight() {
        const wallGeometry = new THREE.PlaneGeometry(8, 8);
        const wallRight = new THREE.Mesh(wallGeometry, wallMaterial);
        wallRight.position.set(0, 4, -4);
        wallRight.receiveShadow = true;
        scene.add(wallRight);

        return wallRight;
      }

      /**
       * Centers the camera on the bed.
       */
      function centerCamera() {
        camera.position.set(8, 8, 8); // Position the camera at the corner opposite the diagonal
        controls.target.set(0, 2, 0); // Focus on the center of the room
        controls.update();
      }

      /**
       * Handles window resize events to adjust camera and renderer.
       */
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      window.addEventListener("resize", onWindowResize);

      /**
       * Creates a custom axes helper for the scene.
       * @param {number} [size=10] - The size of the axes.
       * @returns {THREE.Group} The axes helper group.
       */
      function createCustomAxesHelper(size = 10) {
        const axesGroup = new THREE.Group();

        const createAxis = (color, start, end) => {
          const material = new THREE.LineBasicMaterial({ color });
          const points = [start, end];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, material);
          axesGroup.add(line);
        };

        // X axis
        createAxis(
          0xff0000,
          new THREE.Vector3(-size, 0, 0),
          new THREE.Vector3(size, 0, 0)
        );
        // Y axis
        createAxis(
          0x00ff00,
          new THREE.Vector3(0, -size, 0),
          new THREE.Vector3(0, size, 0)
        );
        // Z axis
        createAxis(
          0x0000ff,
          new THREE.Vector3(0, 0, -size),
          new THREE.Vector3(0, 0, size)
        );

        // Add unit markers
        const markerMaterial = new THREE.LineBasicMaterial({ color: 0x888888 });
        for (let i = -size; i <= size; i++) {
          if (i !== 0) {
            // X markers
            axesGroup.add(
              new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([
                  new THREE.Vector3(i, 0.1, 0),
                  new THREE.Vector3(i, -0.1, 0),
                ]),
                markerMaterial
              )
            );
            // Y markers
            axesGroup.add(
              new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([
                  new THREE.Vector3(0.1, i, 0),
                  new THREE.Vector3(-0.1, i, 0),
                ]),
                markerMaterial
              )
            );
            // Z markers
            axesGroup.add(
              new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([
                  new THREE.Vector3(0, 0.1, i),
                  new THREE.Vector3(0, -0.1, i),
                ]),
                markerMaterial
              )
            );
          }
        }

        return axesGroup;
      }

      const customAxesHelper = createCustomAxesHelper(5);
      scene.add(customAxesHelper);

      // Display angles in radians
      const angleDisplay = document.createElement("div");
      angleDisplay.style.position = "absolute";
      angleDisplay.style.bottom = "10px";
      angleDisplay.style.left = "10px";
      angleDisplay.style.color = "white";
      angleDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      angleDisplay.style.padding = "5px";
      angleDisplay.style.fontFamily = "monospace";
      angleDisplay.style.fontSize = "12px";
      document.body.appendChild(angleDisplay);

      /**
       * Updates the angle display with the current azimuth and polar angles.
       */
      function updateAngleDisplay() {
        const azimuthAngle = controls.getAzimuthalAngle().toFixed(2);
        const polarAngle = controls.getPolarAngle().toFixed(2);
        angleDisplay.innerHTML = `Azimuth Angle: ${azimuthAngle} rad<br>Polar Angle: ${polarAngle} rad`;
      }

      /**
       * Animates the scene, updating controls, stats, and rendering.
       */
      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        stats.update();
        renderer.render(scene, camera);
        updateAngleDisplay();
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
  }, []);

  return <div id="root"></div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ThreeScene />);
