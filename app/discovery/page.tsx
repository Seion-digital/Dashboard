"use client";

import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { LocationSearchForm } from "@/components/discovery/location-search-form";
import { BusinessCard } from "@/components/discovery/business-card";

const mockBusinesses = [
  {
    id: "1",
    name: "Tech Solutions Inc.",
    address: "123 Main St, Anytown, USA",
    industry: "Technology",
    rating: 4.5,
    phone: "555-1234",
    website: "techsolutions.com",
    status: "Analyzed",
  },
  {
    id: "2",
    name: "Innovate Labs",
    address: "456 Oak Ave, Anytown, USA",
    industry: "R&D",
    rating: 4.8,
    phone: "555-5678",
    website: "innovatelabs.com",
    status: "Pending",
  },
  {
    id: "3",
    name: "Digital Marketing Pros",
    address: "789 Pine Ln, Anytown, USA",
    industry: "Marketing",
    rating: 4.2,
    phone: "555-9012",
    website: "digitalpros.com",
    status: "Not Analyzed",
  },
];

export default function DiscoveryPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Left column */}
            <div className="lg:col-span-1">
              <LocationSearchForm />
            </div>

            {/* Right column */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {mockBusinesses.map((business) => (
                  <BusinessCard
                    key={business.id}
                    name={business.name}
                    address={business.address}
                    industry={business.industry}
                    rating={business.rating}
                    phone={business.phone}
                    website={business.website}
                    analysisStatus={business.status}
                    onAnalyze={() => console.log("Analyze:", business.id)}
                    onViewDetails={() => console.log("View Details:", business.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
