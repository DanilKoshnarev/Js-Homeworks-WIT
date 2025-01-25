import React, { createContext, useState, ReactNode } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
}

interface FavoritesContextProps {
    favorites: Post[];
    addFavorite: (post: Post) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Post[]>([]);

    const addFavorite = (post: Post) => {
        setFavorites((prevFavorites) => [...prevFavorites, post]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
