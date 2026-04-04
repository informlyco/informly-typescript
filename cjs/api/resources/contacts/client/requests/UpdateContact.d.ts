/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateContact {
    /** Unique identifier of the resource */
    id: string;
    /** Email address of the contact */
    email?: string;
    /** Phone number in E.164 format (e.g. +14155552671) */
    phone?: string;
    /** First name of the contact */
    firstname?: string;
    /** Last name of the contact */
    lastname?: string;
    /** Job title of the contact */
    jobtitle?: string;
    /** Company or organization name */
    company?: string;
    /** Segment IDs to assign (replaces existing segments) */
    segmentIds?: string[];
}
