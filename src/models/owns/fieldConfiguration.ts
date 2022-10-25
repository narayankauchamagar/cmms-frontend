export enum FieldType {
  OPTIONAL,
  HIDDEN,
  REQUIRED
}
export interface FieldConfiguration {
  id: number;
  fieldName: string;
  fieldType: FieldType;
}
