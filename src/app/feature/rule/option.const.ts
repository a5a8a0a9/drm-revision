import { RuleStatus, RuleType } from '@api/enum';

export const RULE_TYPE_LIST = [
	{ label: 'New', value: RuleType.NEW },
	{ label: 'Modified', value: RuleType.MODIFIED },
	{ label: 'Deleted', value: RuleType.DELETED },
];

export const RULE_STATUS_LIST = [
	{ label: 'Doing', value: RuleStatus.DOING },
	{ label: 'Done', value: RuleStatus.DONE },
];
