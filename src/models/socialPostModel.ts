export interface IPost {
    userName: string;
    postId?: string; // unique id tied to each post/comment/like/dislike
    postText: string;
    parentPostId?: string; // this is used to identify parent post for comments
    like?: boolean;
    dislikes?: boolean;
    post_date_time?: string;
    mainPost?: number;
}
