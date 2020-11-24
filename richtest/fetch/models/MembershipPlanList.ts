/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MembershipOrganizationRecordItem } from './MembershipOrganizationRecordItem';
import type { MembershipPlanPartialItem } from './MembershipPlanPartialItem';

export type MembershipPlanList = (MembershipPlanPartialItem & {
    membershipOrganization?: MembershipOrganizationRecordItem,
});