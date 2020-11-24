/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QueryHeaderPartialItem } from './QueryHeaderPartialItem';
import type { UserPartialItem } from './UserPartialItem';

export type QueryHeaderPartialList = (QueryHeaderPartialItem & {
    userPartial?: UserPartialItem,
});