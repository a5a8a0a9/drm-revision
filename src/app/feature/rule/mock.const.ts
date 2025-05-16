import { RuleStatus, RuleType } from '@api/enum';
import { Rule } from '@api/model';

export const MOCK_RULE_LIST: Rule[] = Array.from({ length: 20 }, (_, index) => ({
	id: `rule-${index}`,
	groupId: 'g1',
	projectId: 'p1',
	documentId: 'd1',
	name: `rule-${index}`,
	description: `This is a description for rule-${index}`,
	type: index % 2 ? RuleType.NEW : RuleType.MODIFIED,
	status: index % 2 ? RuleStatus.DOING : RuleStatus.DONE,
	ownerId: null,
	hasQa: false,
	qaUserId: null,
	secondaryOwnerId: null,
}));

export const MOCK_USER_LIST = Array.from({ length: 20 }, (_, index) => ({
	id: `user-${index}`,
	name: `User ${index}`,
}));
