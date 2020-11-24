/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meta data for the request.  Currently only pagination details
 */
export type meta = {
    pagination?: {
        /**
         * Total amount of records for given query
         */
        total?: number,
        /**
         * Amount returned in the current result
         */
        count?: number,
        /**
         * How many results per page requested
         */
        per_page?: number,
        /**
         * Current page being returned
         */
        current_page?: number,
        /**
         * Total number of pages for given query
         */
        total_pages?: number,
    };
}
