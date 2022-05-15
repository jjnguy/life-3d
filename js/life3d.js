
const aliveMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

function lifeCell() {
  const geometry = new THREE.BoxGeometry();
  const cube = new THREE.Mesh(geometry, aliveMaterial);

  cube.name = "life-cell"

  return cube;
}