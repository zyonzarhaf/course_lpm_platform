import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "../../../components/navbar-routes";

const Navbar = () => {
  return (
    <div className="p-4 border-bottom h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}

export default Navbar;
