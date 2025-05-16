import { AlignType } from './align.model';

export type ColumnConfig = {
	field: string;
	header: string;
	width: number;
	align?: AlignType;
	resizable?: boolean;
	sortable?: boolean;
	sortId?: string;
	thStyle?: Record<string, string>;
	thStyleClass?: string;
	thTooltip?: string;
	thTooltipIcon?: string;
	tdStyle?: Record<string, string>;
	tdStyleClass?: string;
};

// export type TableColumn = {
// 	field: string;
// 	header: string;
// 	width: string;
// 	align: AlignType;
// 	resizable: boolean;
// 	sortable: boolean;
// 	sortId: string | null;
// 	thStyle: Record<string, string>;
// 	thStyleClass: string;
// 	thTooltip: string | null;
// 	thTooltipIcon: string | null;
// 	tdStyle: Record<string, string>;
// 	tdStyleClass: string;
// };
