export class Post {
    id: number;
    title: string;
    body: string;
    excerpt: string;
    category: string;
    teaserPath: string;

    postPath: string;
    wpPostPath: string;
    
    constructor(id: number, title: string, body: string, teaserPath: string, postPath: string, wpPostPath: string) {
        this.id = id;
        this.title = title;
        this.body = body;

        // Set excerpt as substring of body.
        this.excerpt = body.substring(0, 30);
        
        this.teaserPath = teaserPath;
        this.postPath = postPath;
        this.wpPostPath = wpPostPath;

        // Set category from the Wordpress post path.
        const splitWpPath: string[] = this.wpPostPath.split("/");
        this.category = splitWpPath[splitWpPath.length - 3];

        
    }
}