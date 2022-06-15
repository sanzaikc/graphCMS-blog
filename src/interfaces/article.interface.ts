interface ImageUrl {
  url: string;
}

interface HTMLContent {
  html: string;
}

export interface Article {
  id: string;
  title: string;
  content: HTMLContent;
  coverImage: ImageUrl;
  createdBy: {
    name: string;
    picture: string;
  };
  createdAt: string;
}
