export interface MirroredVideo {
  id: number;
  redditPostId: string;
  redditPostTitle: string;
  mirrorUrl: string;
  createdAt: Date;
  updatedAt: Date;
  lastViewedAt: Date;
  lastPrunedAt: Date;
}
