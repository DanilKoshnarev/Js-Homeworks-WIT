import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

interface Post {
    id: number;
    title: string;
    content: string;
}

const PostCard = ({ post }: { post: Post }) => {
    const favoritesContext = useContext(FavoritesContext);

    if (!favoritesContext) {
        return null;
    }

    const { favorites, addFavorite } = favoritesContext;
    const isFavorite = favorites.some(favPost => favPost.id === post.id);

    return (
        <div>
            <h2>{post.title}</h2>
            <button onClick={() => addFavorite(post)}>
                {isFavorite ? 'Unlike' : 'Like'}
            </button>
        </div>
    );
};

export default PostCard;
