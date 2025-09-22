"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type BusinessCardProps = {
  name: string;
  address: string;
  industry: string;
  rating: number;
  phone: string;
  website: string;
  analysisStatus: string;
  onAnalyze: () => void;
  onViewDetails: () => void;
};

export function BusinessCard({
  name,
  address,
  industry,
  rating,
  phone,
  website,
  analysisStatus,
  onAnalyze,
  onViewDetails,
}: BusinessCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{address}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span>Industry:</span>
          <Badge>{industry}</Badge>
        </div>
        <div className="flex justify-between">
          <span>Rating:</span>
          <span>{rating}</span>
        </div>
        <div className="flex justify-between">
          <span>Phone:</span>
          <span>{phone}</span>
        </div>
        <div className="flex justify-between">
          <span>Website:</span>
          <a href={`http://${website}`} target="_blank" rel="noreferrer" className="text-blue-500">
            {website}
          </a>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <Badge variant={analysisStatus === "Analyzed" ? "default" : "secondary"}>
            {analysisStatus}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={onViewDetails}>
          Details
        </Button>
        <Button onClick={onAnalyze}>Analyze</Button>
      </CardFooter>
    </Card>
  );
}
