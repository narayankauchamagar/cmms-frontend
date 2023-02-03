import { EntityType, OwnHeader } from 'src/content/own/Imports';

export const getOwnHeadersConfig = (
  t: any
): Record<EntityType, OwnHeader[]> => {
  return {
    'work-orders': [
      {
        label: t('id'),
        keyName: 'id',
        formatter: (value) => (isNaN(value) ? null : value)
      },
      { label: t('title'), keyName: 'title', required: true },
      { label: t('description'), keyName: 'description' },
      { label: t('due_date'), keyName: 'dueDate' },
      { label: t('completed_on'), keyName: 'completedOn' },
      { label: t('status'), keyName: 'status' },
      { label: t('estimated_hours'), keyName: 'estimatedDuration' },
      { label: t('priority'), keyName: 'priority' },
      { label: t('category'), keyName: 'category' },
      { label: t('completed_by'), keyName: 'completedByEmail' },
      {
        label: t('assigned_to'),
        keyName: 'assignedToEmails',
        formatter: (value) => value?.split(',') ?? []
      },
      //TODO
      // { label: t('assigned_by'), keyName: 'assignedBy' },
      { label: t('primary_worker'), keyName: 'primaryUserEmail' },
      { label: t('asset_name'), keyName: 'assetName' },
      { label: t('location_name'), keyName: 'locationName' },
      { label: t('team_name'), keyName: 'teamName' },
      { label: t('feedback'), keyName: 'feedback' },
      // { label: t('parts'), keyName: 'parts' },
      { label: t('requires_signature'), keyName: 'requiredSignature' },
      { label: t('archived'), keyName: 'archived' }
    ],
    locations: [
      { label: t('id'), keyName: 'id' },
      { label: t('title'), keyName: 'title' },
      { label: t('description'), keyName: 'description' },
      { label: t('due_date'), keyName: 'dueDate' },
      { label: t('completed_on'), keyName: 'completedOn' },
      { label: t('status'), keyName: 'status' },
      { label: t('estimated_hours'), keyName: 'estimatedDuration' },
      { label: t('priority'), keyName: 'priority' },
      { label: t('category'), keyName: 'category' },
      { label: t('completed_by'), keyName: 'completedByEmail' },
      //TODO
      // { label: t('assigned_by'), keyName: 'assignedBy' },
      { label: t('primary_worker'), keyName: 'primaryUserEmail' },
      { label: t('asset_name'), keyName: 'assetName' },
      // { label: t('parts'), keyName: 'parts' },
      { label: t('requires_signature'), keyName: 'requiredSignature' },
      { label: t('archived'), keyName: 'archived' }
    ],
    assets: [
      { label: t('id'), keyName: 'id' },
      { label: t('title'), keyName: 'title' },
      { label: t('description'), keyName: 'description' },
      { label: t('due_date'), keyName: 'dueDate' },
      { label: t('completed_on'), keyName: 'completedOn' },
      { label: t('status'), keyName: 'status' },
      { label: t('estimated_hours'), keyName: 'estimatedDuration' },
      { label: t('priority'), keyName: 'priority' },
      { label: t('category'), keyName: 'category' },
      { label: t('completed_by'), keyName: 'completedByEmail' },
      //TODO
      // { label: t('assigned_by'), keyName: 'assignedBy' },
      { label: t('primary_worker'), keyName: 'primaryUserEmail' },
      { label: t('asset_name'), keyName: 'assetName' },
      // { label: t('parts'), keyName: 'parts' },
      { label: t('requires_signature'), keyName: 'requiredSignature' },
      { label: t('archived'), keyName: 'archived' }
    ],
    parts: [
      { label: t('id'), keyName: 'id' },
      { label: t('title'), keyName: 'title' },
      { label: t('description'), keyName: 'description' },
      { label: t('due_date'), keyName: 'dueDate' },
      { label: t('completed_on'), keyName: 'completedOn' },
      { label: t('status'), keyName: 'status' },
      { label: t('estimated_hours'), keyName: 'estimatedDuration' },
      { label: t('priority'), keyName: 'priority' },
      { label: t('category'), keyName: 'category' },
      { label: t('completed_by'), keyName: 'completedByEmail' },
      //TODO
      // { label: t('assigned_by'), keyName: 'assignedBy' },
      { label: t('primary_worker'), keyName: 'primaryUserEmail' },
      { label: t('asset_name'), keyName: 'assetName' },
      // { label: t('parts'), keyName: 'parts' },
      { label: t('requires_signature'), keyName: 'requiredSignature' },
      { label: t('archived'), keyName: 'archived' }
    ],
    meters: [
      { label: t('id'), keyName: 'id' },
      { label: t('title'), keyName: 'title' },
      { label: t('description'), keyName: 'description' },
      { label: t('due_date'), keyName: 'dueDate' },
      { label: t('completed_on'), keyName: 'completedOn' },
      { label: t('status'), keyName: 'status' },
      { label: t('estimated_hours'), keyName: 'estimatedDuration' },
      { label: t('priority'), keyName: 'priority' },
      { label: t('category'), keyName: 'category' },
      { label: t('completed_by'), keyName: 'completedByEmail' },
      //TODO
      // { label: t('assigned_by'), keyName: 'assignedBy' },
      { label: t('primary_worker'), keyName: 'primaryUserEmail' },
      { label: t('asset_name'), keyName: 'assetName' },
      // { label: t('parts'), keyName: 'parts' },
      { label: t('requires_signature'), keyName: 'requiredSignature' },
      { label: t('archived'), keyName: 'archived' }
    ]
  };
};
