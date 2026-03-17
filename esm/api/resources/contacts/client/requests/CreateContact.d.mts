/**
 * @example
 *     {}
 */
export interface CreateContact {
    /** Email address of the contact */
    email?: string;
    /** Phone number of the contact */
    phone?: string;
    /** First name of the contact */
    firstname?: string;
    /** Last name of the contact */
    lastname?: string;
    /** Job title of the contact */
    jobtitle?: string;
    /** Company of contact (if different) or organization name */
    company?: string;
}
