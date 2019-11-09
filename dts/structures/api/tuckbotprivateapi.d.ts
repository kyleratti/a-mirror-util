import { MirroredVideo } from "..";
export interface VideoUpdateRequestOptions {
    redditPostId: string;
    redditPostTitle: string;
    mirrorUrl: string;
}
export interface FetchStaleVideosResponse {
    mirroredVideos: MirroredVideo[];
}
