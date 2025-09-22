"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function LocationSearchForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Discovery</CardTitle>
        <CardDescription>Find businesses to analyze</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Enter location or address" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="radius">Radius (km)</Label>
          <Slider defaultValue={[10]} max={50} step={1} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="rd">R&D</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="size">Business Size</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">Min Rating</Label>
          <Slider defaultValue={[4]} max={5} step={0.5} />
        </div>
        <Button className="w-full">Search</Button>
      </CardContent>
    </Card>
  );
}
