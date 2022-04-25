import { MeleeAction } from "../classes/actions/MeleeAction";
import { RangeAction } from "../classes/actions/RangeAction";
import { Unit } from "../classes/Unit";
import { Bandit } from "../classes/units/Bandit";
import { Centaur } from "../classes/units/Centaur";
import { Elf } from "../classes/units/Elf";
import { Skeleton } from "../classes/units/Skeleton";

export const createTeam = (numTeam: number) => {
  const team = [];
  for (let i = 0; i < 6; i++) {
    const id = Math.floor(Math.random() * 4);
    switch (id) {
      case 0: {
        const skeleton = new Unit(new Skeleton(), new MeleeAction());
        skeleton.team = numTeam;
        team.push(skeleton);
        break;
      }
      case 1: {
        const centaur = new Unit(new Centaur(), new MeleeAction());
        centaur.team = numTeam;
        team.push(centaur);
        break;
      }
      case 2: {
        const bandit = new Unit(new Bandit(), new RangeAction());
        bandit.team = numTeam;
        team.push(bandit);
        break;
      }
      case 3: {
        const elf = new Unit(new Elf(), new RangeAction());
        elf.team = numTeam;
        team.push(elf);
        break;
      }
      default:
        return;
    }
  }

  return team;
};
