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
  author: {
    name: string;
    avatar: ImageUrl;
  };
  createdAt: string;
}
