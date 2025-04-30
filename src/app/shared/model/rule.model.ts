import { RuleStatus, RuleType } from '../enum';

export interface Rule {
	name: string;
	type: RuleType;
	status: RuleStatus;
	ownerId: string;
	hasQa: boolean;
	qaUserId: string;
	secondaryOwnerId: string;
}
