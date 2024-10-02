import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { MainPage } from "../../pages/MainPage/MainPage";

export const RoutingComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/categoryPage" element={<CategoryPage />} />
        <Route path="/productsList" element={<ProductsList />} /> */}
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
};
