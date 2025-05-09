import { RuleStatus, RuleType } from '@api/enum';
import { Rule } from '@api/model';

export const MOCK_RULE_LIST: Rule[] = Array.from({ length: 100 }, (_, index) => ({
	id: `rule-${index}`,
	groupId: 'g1',
	projectId: 'p1',
	documentId: 'd1',
	name: `rule-${index}`,
	description: `This is a description for rule-${index}`,
	type: index % 2 ? RuleType.NEW : RuleType.MODIFIED,
	status: index % 2 ? RuleStatus.DOING : RuleStatus.DONE,
	ownerId: 'owner_1',
	hasQa: true,
	qaUserId: 'qa_1',
	secondaryOwnerId: 'owner_2',
}));
