export interface Segment {
    /** Unique identifier for the segment */
    id: string;
    /** Segment name */
    title: string;
    /** Hex color for the segment */
    color: string | null;
}
