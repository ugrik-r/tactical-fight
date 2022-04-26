import { UnitAction } from "./interfaceUnitAction";

export class RangeAction implements UnitAction {
  doAction(damage: number, health: number): number {
    const unitHealth = health - damage;
    if (unitHealth <= 0) {
      return 0;
    }
    else return unitHealth;
  }
}