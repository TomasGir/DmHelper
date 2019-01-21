export class Monster {
  index: number;
  name: string;
  image: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: number;
  dexterity_save: number;
  constitution_save: number;
  intelligence_save: number;
  wisdom_save: number;
  charisma_save: number;
  acrobatics: number;
  animal_handling: number;
  arcane: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleight_of_hand: number;
  stealth: number;
  survival: number;
  damage_vulnerabilities: string;
  damage_resistances: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: number;
  special_abilities: SpecialAbilities;
  actions: Actions;
  legendary_actions: LegendaryActions;
  reactions: Reaction;
}

export class SpecialAbilities {
  name: string;
  desc: string;
  attack_bonus: number;
}

export class Actions {
  name: string;
  desc: string;
  attack_bonus: number;
  damage_dice: string;
  damage_bonus: number;
}

export class LegendaryActions{
  name: string;
  desc: string;
  attack_bonus: number;
}

export class Reaction {
  name: string;
  desc: string;
  attack_bonus: number;
}
