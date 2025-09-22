import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import {
  IconChartArcs,
  IconChartDonut,
  IconRocket,
  IconTools,
  IconReportAnalytics,
} from "@tabler/icons-react";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./user-nav";
import { IconWifi } from "@tabler/icons-react";

export function SiteHeader() {
  return (
    <header className="flex h-[60px] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 h-4" />
        <h1 className="text-base font-medium">SEION Digital Business Analyzer</h1>
        <div className="ml-auto flex items-center gap-4">
          <NavMain
            items={[
              {
                title: "Dashboard",
                url: "/dashboard",
                icon: IconChartDonut,
              },
              {
                title: "Discovery",
                url: "/discovery",
                icon: IconTools,
              },
              {
                title: "Analysis",
                url: "/analysis",
                icon: IconChartArcs,
              },
              {
                title: "Campaigns",
                url: "/campaigns",
                icon: IconRocket,
              },
              {
                title: "Reports",
                url: "/reports",
                icon: IconReportAnalytics,
              },
            ]}
          />
          <div className="flex items-center gap-2">
            <IconWifi size={20} className="text-green-500" />
            <span className="text-sm text-green-500">Live</span>
          </div>
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
