export type FeedFormat = "rss2" | "atom" | "unknown";

export type Feed = {
  title: string;
  feedUrl: string;
  siteUrl: string;
  description: string;
  format: FeedFormat;
  notes?: string;
  edgeCase?: "dead_url" | "duplicate";
};

export type FeedCategory = {
  name: string;
  feeds: Feed[];
};

export type SampleFeeds = {
  title: string;
  description: string;
  generated: string;
  categories: FeedCategory[];
  edgeCases: Feed[];
};
