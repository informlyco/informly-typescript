export interface Contact {
    /** Unique identifier for the contact */
    id: string;
    /** Email address of the contact */
    email: string | null;
    /** Phone number in E.164 format */
    phone: string | null;
    contact: Contact.Contact;
    /** Segments assigned to this contact */
    segments?: Contact.Segments.Item[] | undefined;
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
    type Segments = Segments.Item[];
    namespace Segments {
        interface Item {
            /** Segment identifier */
            segmentId: string;
            /** When the segment was assigned */
            assignedAt: string;
        }
    }
}
