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
	ownerId: string | null;
	hasQa: boolean;
	qaUserId: string | null;
	secondaryOwnerId: string | null;
}
