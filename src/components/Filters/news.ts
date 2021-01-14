export interface NewsInterface {
    author?: string;
    content?: string;
    description: string;
    publishedAt: string;
    source: NewsSourceInterface;
    title: string;
    url: string;
    urlToImage: string;
}

export interface NewsSourceInterface {
    id?: string;
    name?: string;
}