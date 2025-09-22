"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconAnalyze,
  IconBuildingStore,
  IconChartArcs,
  IconChartDonut,
  IconFileExport,
  IconMail,
  IconMapSearch,
  IconReportAnalytics,
  IconRocket,
  IconSettings,
  IconTools,
  IconUserSearch,
} from "@tabler/icons-react";

import { NavMain } from "@/components/dashboard/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupTitle,
} from "@/components/ui/sidebar";
import { UserNav } from "./user-nav";

const navItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconChartDonut,
    },
    {
        title: "Business Discovery",
        icon: IconMapSearch,
        items: [
            {
                title: "Location Search",
                url: "/discovery/location-search",
                icon: IconUserSearch,
            },
            {
                title: "Business Results",
                url: "/discovery/business-results",
                icon: IconBuildingStore,
            },
            {
                title: "Bulk Analysis",
                url: "/discovery/bulk-analysis",
                icon: IconAnalyze,
            },
        ],
    },
    {
        title: "Analysis Center",
        icon: IconChartArcs,
        items: [
            {
                title: "Business Profiles",
                url: "/analysis/business-profiles",
                icon: IconBuildingStore,
            },
            {
                title: "AI Recommendations",
                url: "/analysis/ai-recommendations",
                icon: IconTools,
            },
            {
                title: "ROI Reports",
                url: "/analysis/roi-reports",
                icon: IconReportAnalytics,
            },
        ],
    },
    {
        title: "Email Campaigns",
        icon: IconMail,
        items: [
            {
                title: "Campaign Manager",
                url: "/campaigns/campaign-manager",
                icon: IconRocket,
            },
            {
                title: "Template Library",
                url: "/campaigns/template-library",
                icon: IconFileExport,
            },
            {
                title: "Performance Tracking",
                url: "/campaigns/performance-tracking",
                icon: IconChartDonut,
            },
        ],
    },
    {
        title: "Analytics & Reports",
        icon: IconReportAnalytics,
        items: [
            {
                title: "Success Metrics",
                url: "/reports/success-metrics",
                icon: IconChartDonut,
            },
            {
                title: "Market Insights",
                url: "/reports/market-insights",
                icon: IconChartArcs,
            },
            {
                title: "Export Center",
                url: "/reports/export-center",
                icon: IconFileExport,
            },
        ],
    },
    {
        title: "Settings",
        url: "/settings",
        icon: IconSettings,
    },
];

export function AppSidebar({
  onLogout,
  ...props
}: React.ComponentProps<typeof Sidebar> & { onLogout?: () => void }) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/dashboard">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <IconAnalyze className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      SEION Digital
                    </span>
                    <span className="truncate text-xs">
                      Business Analyzer
                    </span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <NavMain items={navItems} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <UserNav />
        </SidebarFooter>
      </Sidebar>
    </motion.div>
  );
}
