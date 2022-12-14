export class SpaceShip {

  constructor(modelName: string, imageUrl: string) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
  }

  modelName: string;
  imageUrl: string;
  health = 100;
  activeShields = true;
  activeWeapons = true;
}
