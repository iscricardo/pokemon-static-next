export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallOkemon[];
}

export interface SmallOkemon {
    name: string;
    url:  string;
    id:   number;
    img:  string;
}
