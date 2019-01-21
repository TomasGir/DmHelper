export class Items {
  index: number;
  name: string;
  equipment_category: string;
  weapon_category: string;
  weapon_range: string;
  category_range: string;
  cost: Cost;
  damage: Damage;
  range: Range;
  weight: number;
  properties: Properties;
  throw_range: ThrowRange;
  two_handed_damage: Damage;
  special: string;
  armor_category: string;
  armor_class: ArmorClass;
  str_minimum: number;
  stealth_disadvantage: boolean;
  gear_category: string;
  desc: string;
  contents: Contents;
  tool_category: string;
  vehicle_category: string;
  speed: Speed;
  capacity: string;
}

export class Cost {
  quantity: number;
  unit: string;
}

export class Damage {
  dice_count: number;
  dice_value: number;
}

export class Range {
  normal: number;
  long: number;
}

export class Properties {
  url: string;
  name: string;
}

export class ThrowRange {
  normal: number;
  long: number;
}

export class ArmorClass {
  base: number;
  dex_bonus: boolean;
  max_bonus: number;
}

export class Contents {
  item_url: string;
  quantity: number;
}

export class Speed {
  quantity: number;
  unit: string;
}
