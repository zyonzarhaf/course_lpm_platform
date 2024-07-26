"use client";

import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item";
import { Layout, Compass, List, BarChart } from "lucide-react";

const visitorRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/"
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search"
  }
];

const instructorRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/instructor/courses"
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/instructor/analytics"
  }
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const isInstructorPage = pathname?.includes("/instructor");
  const routes = isInstructorPage ? instructorRoutes : visitorRoutes;
  
  return (
    <div className="flex flex-col w-full">
      {routes.map(route => (
        <SidebarItem 
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

export default SidebarRoutes;
