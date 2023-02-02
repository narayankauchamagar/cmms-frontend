export type ImportKeys = keyof WorkOrderImportDTO;
export type ImportDTO = WorkOrderImportDTO;
export interface WorkOrderImportDTO {
  id: number;
  dueDate: string;
  priority: string;
  estimatedDuration: string;
  description: string;
  title: string;
  requiredSignature: boolean;
  category: string;
  locationName: string;
  teamName: string;
  primaryUserEmail: string;
  assignedToEmails: string[];
  assetName: string;
  completedByEmail: string;
  completedOn: string;
  archived: boolean;
  status: string;
  feedback: string;
}
export interface ImportResponse {
  created: number;
  updated: number;
}
