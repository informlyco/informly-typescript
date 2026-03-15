export interface Contact {
    id: string;
    email: string | null;
    phone: string | null;
    contact: Contact.Contact;
    organizationId: string;
    createdAt: string;
    updatedAt: string;
}
export declare namespace Contact {
    interface Contact {
        firstname?: string | undefined;
        lastname?: string | undefined;
        jobtitle?: string | undefined;
        company?: string | undefined;
    }
}
