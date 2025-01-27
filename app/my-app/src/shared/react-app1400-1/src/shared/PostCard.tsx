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

    const { addFavorite, removeFavorite, isFavorite } = favoritesContext;
    const favorite = isFavorite(post.id);

    const handleLikeClick = () => {
        if (favorite) {
            removeFavorite(post.id);
        } else {
            addFavorite(post);
        }
    };

    return (
        <div>
            <h2>{post.title}</h2>
            <button onClick={handleLikeClick}>
                {favorite ? 'Unlike' : 'Like'}
            </button>
        </div>
    );
};

export default PostCard;
