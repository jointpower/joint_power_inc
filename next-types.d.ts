import type { QueryFunctionContext } from "@tanstack/react-query";

interface PublicationName {
  publication: {
    title: string;
    displayTitle?: string;
    favicon?: string;
  };
}

interface PostMetadata {
  title: string;
  subtitle?: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  views: number;
  brief: string;
  content: {
    text: string;
    markdown: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    profilePicture?: string;
  };
}

interface GetPostsResponse {
  publication: {
    posts: {
      edges: {
        node: PostMetadata;
        cursor: string;
      }[];
    };
  };
}

interface GetPostsFunctionArgs {
  first: number;
  after: string;
}

type GetPostsArgs = QueryFunctionContext & GetPostsArgs;

interface SubscribeToNewsletterResponse {
  data?: {
    subscribeToNewsletter: {
      status: string;
    };
  };

  errors?: { message: string }[];
}

interface GetPostBySlugResponse {
  publication: {
    post: {
      title: string;
      subtitle?: string;
      publishedAt: string;
      readTimeInMinutes: number;
      brief: string;
      views: number;
      coverImage: {
        url: string;
      };
      content: {
        markdown: string;
        html: string;
        text: string;
      };
      author: {
        name: string;
        profilePicture?: string;
      };
    };
  };
}
