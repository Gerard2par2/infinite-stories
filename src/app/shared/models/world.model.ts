export interface WorldModel {
  id: number;
  name: string;
  description: string;
  era: WorldEraEnum,
}
export enum WorldEraEnum {
  PALEOLITHIC = "PALEOLITHIC",
  NEOLITHIC = "NEOLITHIC",
  ANTIQUITY = "ANTIQUITY",
  MIDDLE_AGE = "MIDDLE_AGE",
  RENAISSANCE = "RENAISSANCE",
  MODERN = "MODERN",
  CONTEMPORARY = "CONTEMPORARY",
  NEAR_FUTURE = "NEAR_FUTURE",
  FAR_FUTURE = "FAR_FUTURE",
  ALIEN = "ALIEN",
}

export const WorldEraEnumTitles = {
  [WorldEraEnum.PALEOLITHIC]: 'Paleolithic',
  [WorldEraEnum.NEOLITHIC]: 'Neolithic',
  [WorldEraEnum.ANTIQUITY]: 'Antiquity',
  [WorldEraEnum.MIDDLE_AGE]: 'Middle Age',
  [WorldEraEnum.RENAISSANCE]: 'Renaissance',
  [WorldEraEnum.MODERN]: 'Modern',
  [WorldEraEnum.CONTEMPORARY]: 'Contemporary',
  [WorldEraEnum.NEAR_FUTURE]: 'Near Future',
  [WorldEraEnum.FAR_FUTURE]: 'Far Future',
  [WorldEraEnum.ALIEN]: 'Alien',
}
