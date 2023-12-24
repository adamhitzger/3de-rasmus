import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";

class RectMesh extends Mesh {
  constructor() {
    const geometry: BoxGeometry = new BoxGeometry();
    const material: MeshPhongMaterial = new MeshPhongMaterial({
      toneMapped: false,
      transparent: true,
    });
    super(geometry, material);
    this.castShadow = true;
    this.receiveShadow = true;
  }
}

export default RectMesh;
