import { Layout } from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductListPage } from "../pages/ProductListPage/ProductListPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { FavoritesProvider } from "./FavoritesContext";

export function App() {
    return (
        <div>
            <FavoritesProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/products" element={<ProductListPage />} />
                            <Route path="/product/:id" element={<ProductPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </FavoritesProvider>
        </div>
    );
}
