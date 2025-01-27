import React, { createContext, useState, ReactNode } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
}

interface FavoritesContextProps {
    favorites: Post[];
    addFavorite: (post: Post) => void;
    removeFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Post[]>([]);

    const addFavorite = (post: Post) => {
        setFavorites((prevFavorites) => [...prevFavorites, post]);
    };

    const removeFavorite = (id: number) => {
        setFavorites((prevFavorites) => prevFavorites.filter(post => post.id !== id));
    };

    const isFavorite = (id: number) => {
        return favorites.some(post => post.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
