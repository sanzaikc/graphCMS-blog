export interface Article {
  id: string;
  title: string;
  content: { html: string };
  coverImage: { url: string };
  createdBy: {
    name: string;
    picture: string;
  };
  createdAt: string;
}
