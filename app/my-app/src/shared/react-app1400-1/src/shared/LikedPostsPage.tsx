import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

const LikedPostsPage = () => {
    const favoritesContext = useContext(FavoritesContext);

    if (!favoritesContext) {
        return null;
    }

    const { favorites, removeFavorite } = favoritesContext;

    return (
        <div>
            <h1>Liked Posts</h1>
            <ul>
                {favorites.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <button onClick={() => removeFavorite(post.id)}>Remove</button>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LikedPostsPage;
