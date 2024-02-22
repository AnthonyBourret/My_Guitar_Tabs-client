export interface SongProps {
    id: number;
    title: string;
    artist: string;
    Styles: {
        id: number;
        name: string;
    }[];
    Tuning: {
        id: number;
        name: string;
        strings: string;
    };
    capo: string;
    status: string;
    difficulty: string;
    tab_link: string;
    lyrics_link: string;
    comments: string;
};

export interface SongCardProps {
    id: number;
    title: string;
    artist: string;
    Styles: {
        id: number;
        name: string;
    }[];
    status: string;
};

export interface FilterProps {
    setFilters: React.Dispatch<React.SetStateAction<{
        difficulty: string,
        status: string,
        Styles: string,
        Tuning: string,
        capo: string
    }>>;
};
