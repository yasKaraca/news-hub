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

export const emptyNews: NewsInterface = {
    author : "",
    content : "",
    description : "",
    publishedAt : "",
    source: {
        id: "",
        name: ""
    },
    title : "",
    url : "",
    urlToImage : "",
}