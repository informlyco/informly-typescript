export interface Contact {
    /** Unique identifier for the contact */
    id: string;
    /** Email address of the contact */
    email: string | null;
    /** Phone number of the contact */
    phone: string | null;
    contact: Contact.Contact;
    /** ID of the organization this contact belongs to */
    organizationId: string;
    /** Timestamp when the contact was created */
    createdAt: string;
    /** Timestamp when the contact was last updated */
    updatedAt: string;
}
export declare namespace Contact {
    interface Contact {
        /** First name of the contact */
        firstname?: string | undefined;
        /** Last name of the contact */
        lastname?: string | undefined;
        /** Job title of the contact */
        jobtitle?: string | undefined;
        /** Company or organization name */
        company?: string | undefined;
    }
}
