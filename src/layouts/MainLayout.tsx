import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import NotificationBar from "@/components/shared/NotificationBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-orange-97 py-5 overflow-hidden">
      <NotificationBar />
      <Header />
      <main className="mx-4 pt-10 md:mx-16 lg:mx-20 lg:pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
