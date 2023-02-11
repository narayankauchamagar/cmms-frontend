import { GridLocaleText } from '@mui/x-data-grid';

const gridLocaleText: GridLocaleText = {
  // Root
  noRowsLabel: 'no_content',
  noResultsOverlayLabel: 'no_results',
  errorOverlayDefaultLabel: 'an_error_occured',

  // Density selector toolbar button text
  toolbarDensity: 'density',
  toolbarDensityLabel: 'censity',
  toolbarDensityCompact: 'compact',
  toolbarDensityStandard: 'standard',
  toolbarDensityComfortable: 'comfortable',

  // Columns selector toolbar button text
  toolbarColumns: 'columns',
  toolbarColumnsLabel: 'select_columns',

  // Filters toolbar button text
  toolbarFilters: 'filters',
  toolbarFiltersLabel: 'show_filters',
  toolbarFiltersTooltipHide: 'hide_filters',
  toolbarFiltersTooltipShow: 'show_filters',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Search…',
  toolbarQuickFilterLabel: 'search',
  toolbarQuickFilterDeleteIconLabel: 'clear',

  // Export selector toolbar button text
  toolbarExport: 'to_export',
  toolbarExportLabel: 'to_export',
  toolbarExportCSV: 'download_as_csv',
  toolbarExportPrint: 'print',
  toolbarExportExcel: 'download_as_excel',

  // Columns panel text
  columnsPanelTextFieldLabel: 'find_column',
  columnsPanelTextFieldPlaceholder: 'column_title',
  columnsPanelDragIconLabel: 'reorder_column',
  columnsPanelShowAllButton: 'show_all',
  columnsPanelHideAllButton: 'hide_all',

  // Filter panel text
  filterPanelAddFilter: 'add_filter',
  filterPanelDeleteIconLabel: 'to_delete',
  filterPanelLinkOperator: 'logic_operator',
  filterPanelOperators: 'operator', // TODO v6: rename to filterPanelOperator
  filterPanelOperatorAnd: 'and',
  filterPanelOperatorOr: 'or',
  filterPanelColumns: 'columns',
  filterPanelInputLabel: 'value',
  filterPanelInputPlaceholder: 'filter_value',

  // Filter operators text
  filterOperatorContains: 'contains',
  filterOperatorEquals: 'equals',
  filterOperatorStartsWith: 'starts_with',
  filterOperatorEndsWith: 'ends_with',
  filterOperatorIs: 'is',
  filterOperatorNot: 'is_not',
  filterOperatorAfter: 'is_after',
  filterOperatorOnOrAfter: 'is_on_or_after',
  filterOperatorBefore: 'is_before',
  filterOperatorOnOrBefore: 'is_on_or_before',
  filterOperatorIsEmpty: 'is_empty',
  filterOperatorIsNotEmpty: 'is_not_empty',
  filterOperatorIsAnyOf: 'is_any_of',

  // Filter values text
  filterValueAny: 'any',
  filterValueTrue: 'true_text',
  filterValueFalse: 'false_text',

  // Column menu text
  columnMenuLabel: 'menu',
  columnMenuShowColumns: 'show_columns',
  columnMenuFilter: 'filter',
  columnMenuHideColumn: 'hide',
  columnMenuUnsort: 'unsort',
  columnMenuSortAsc: 'sort_by_ASC',
  columnMenuSortDesc: 'sort_by_DESC',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: 'show_filters',
  columnHeaderSortIconLabel: 'sort',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} rows selected`
      : `${count.toLocaleString()} row selected`,

  // Total row amount footer text
  footerTotalRows: 'total_rows',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Checkbox selection',
  checkboxSelectionSelectAllRows: 'Select all rows',
  checkboxSelectionUnselectAllRows: 'Unselect all rows',
  checkboxSelectionSelectRow: 'Select row',
  checkboxSelectionUnselectRow: 'Unselect row',

  // Boolean cell text
  booleanCellTrueLabel: 'yes',
  booleanCellFalseLabel: 'no',

  // Actions cell more text
  actionsCellMore: 'more',

  // Column pinning text
  pinToLeft: 'Pin to left',
  pinToRight: 'Pin to right',
  unpin: 'Unpin',

  // Tree Data
  treeDataGroupingHeaderName: 'to_group',
  treeDataExpand: 'see_children',
  treeDataCollapse: 'hide_children',

  // Grouping columns
  groupingColumnHeaderName: 'to_group',
  groupColumn: (name) => `Group by ${name}`,
  unGroupColumn: (name) => `Stop grouping by ${name}`,

  // Master/detail
  detailPanelToggle: 'detail_panel_toggle',
  expandDetailPanel: 'expand',
  collapseDetailPanel: 'collapse',

  // Used core components translation keys
  MuiTablePagination: {},

  // Row reordering text
  rowReorderingHeaderName: 'Row reordering',

  // Aggregation
  aggregationMenuItemHeader: 'Aggregation',
  aggregationFunctionLabelSum: 'sum',
  aggregationFunctionLabelAvg: 'avg',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'max',
  aggregationFunctionLabelSize: 'size'
};

export default gridLocaleText;
