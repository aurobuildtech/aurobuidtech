import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import CursorDust from "./components/effects/CursorDust";
export default function App() {
  return (
    <div className="app-bg min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <CursorDust />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
