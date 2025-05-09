import { RuleStatus, RuleType } from '../enum';

export interface Rule {
	id: string;
	groupId: string;
	projectId: string;
	documentId: string;
	name: string;
	description: string;
	type: RuleType;
	status: RuleStatus;
	ownerId: string;
	hasQa: boolean;
	qaUserId: string;
	secondaryOwnerId: string;
}
