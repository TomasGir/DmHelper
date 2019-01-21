export class Spells {
  index: number;
  name: string;
  desc: string;
  higher_level: string;
  page: string;
  range: string;
  components: string;
  material: string;
  ritual: string;
  duration: string;
  concentration: string;
  casting_time: string;
  level: number;
  school: School;
  classes: Classes;
  subclasses: Subclasses;
  url: string;
}

export class School {
  name: string;
}

export class Classes {
  name: string;
}

export class Subclasses {
  name: string;
}
