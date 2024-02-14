export interface SongProps {
    id: number;
    title: string;
    artist: string;
    Styles: {
        id: number;
        name: string;
    }[];
    status: string;
}