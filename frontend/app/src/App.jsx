import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SearchProducts} from "./pages/customer/SearchProducts"

function App() {
  
  return (

    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="/searchProducts" element={<SearchProducts />} />

    </Routes>

  );

}

export default App
