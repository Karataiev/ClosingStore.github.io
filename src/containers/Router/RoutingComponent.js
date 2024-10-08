import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { MainPage } from "../../pages/MainPage/MainPage";
import { BasketPage } from "../../pages/BasketPage/BasketPage";

export const RoutingComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basketPage" element={<BasketPage />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
};
