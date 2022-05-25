interface PostProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    }
}

export function Post({ post }: PostProps) {
    return (
        <div>
            Post slug
        </div>
    );
}