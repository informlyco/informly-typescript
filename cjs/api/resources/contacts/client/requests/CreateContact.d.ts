/**
 * @example
 *     {}
 */
export interface CreateContact {
    /** Email address. Required if phone is not provided. */
    email?: string;
    /** Phone number in E.164 format. Required if email is not provided. */
    phone?: string;
    /** First name of the contact */
    firstname?: string;
    /** Last name of the contact */
    lastname?: string;
    /** Job title of the contact */
    jobtitle?: string;
    /** Company or organization name */
    company?: string;
    /** Segment IDs to assign to the contact */
    segmentIds?: string[];
    /** Referral code to redeem for this contact */
    referralCode?: string;
}
