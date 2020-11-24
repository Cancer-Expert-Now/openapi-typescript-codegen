/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MembershipCensusRecordItem } from './MembershipCensusRecordItem';
import type { UserPartialItem } from './UserPartialItem';

export type MembershipCensusItem = (MembershipCensusRecordItem & {
    userPartial?: UserPartialItem,
});