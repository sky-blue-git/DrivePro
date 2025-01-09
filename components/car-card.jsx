"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Car as CarIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { toggleSavedCar } from "@/actions/car-listing";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";

export const CarCard = ({ car }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(car.wishlisted);

  // Use the useFetch hook
  const {
    loading: isToggling,
    fn: toggleSavedCarFn,
    data: toggleResult,
    error: toggleError,
  } = useFetch(toggleSavedCar);

  // Handle toggle result with useEffect
  useEffect(() => {
    if (toggleResult?.success && toggleResult.saved !== isSaved) {
      setIsSaved(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [toggleResult, isSaved]);

  // Handle errors with useEffect
  useEffect(() => {
    if (toggleError) {
      toast.error("Failed to update favorites");
    }
  }, [toggleError]);

  // Handle save/unsave car
  const handleToggleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isSignedIn) {
      toast.error("Please sign in to save cars");
      router.push("/sign-in");
      return;
    }

    if (isToggling) return;

    // Call the toggleSavedCar function using our useFetch hook
    await toggleSavedCarFn(car.id);
  };

  return (
    <Card className="overflow-hidden luxury-glass luxury-shadow hover:luxury-shadow transition-all duration-500 group relative border border-white/30">
      <div className="relative h-56 luxury-shimmer">
        {car.images && car.images.length > 0 ? (
          <div className="relative w-full h-full">
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          </div>
        ) : (
          <div className="w-full h-full premium-gradient flex items-center justify-center">
            <CarIcon className="h-16 w-16 text-white" />
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 luxury-glass rounded-full p-2.5 transition-all duration-300 border border-white/30 backdrop-blur-xl ${
            isSaved
              ? "text-red-500 hover:text-red-400 luxury-shadow"
              : "text-white hover:text-white/90 shadow-lg"
          }`}
          onClick={handleToggleSave}
          disabled={isToggling}
        >
          {isToggling ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Heart className={isSaved ? "fill-current" : ""} size={18} />
          )}
        </Button>
        
        {/* Status Indicator */}
        <div className="absolute top-4 left-4 w-2.5 h-2.5 bg-white rounded-full premium-pulse shadow-lg"></div>
      </div>

      <CardContent className="p-6 relative bg-white/80">
        <div className="flex flex-col mb-6">
          <h3 className="text-xl font-bold line-clamp-1 text-foreground mb-3 tracking-tight">
            {car.make} {car.model}
          </h3>
          <span className="text-3xl font-bold premium-text">
            ${car.price.toLocaleString()}
          </span>
        </div>

        <div className="text-muted-foreground mb-5 flex flex-wrap items-center gap-2 text-sm">
          <span className="bg-secondary/60 px-3 py-1.5 rounded-full font-medium">{car.year}</span>
          <span className="bg-secondary/60 px-3 py-1.5 rounded-full font-medium">{car.transmission}</span>
          <span className="bg-secondary/60 px-3 py-1.5 rounded-full font-medium">{car.fuelType}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-7">
          <Badge variant="outline" className="bg-primary/15 text-primary border-primary/40 font-medium px-3 py-1">
            {car.bodyType}
          </Badge>
          <Badge variant="outline" className="bg-primary/15 text-primary border-primary/40 font-medium px-3 py-1">
            {car.mileage.toLocaleString()} mi
          </Badge>
          <Badge variant="outline" className="bg-primary/15 text-primary border-primary/40 font-medium px-3 py-1">
            {car.color}
          </Badge>
        </div>

        <div className="flex justify-between">
          <Button
            className="flex-1 premium-gradient text-white font-semibold transition-all duration-300 hover:scale-105 luxury-shadow py-3"
            onClick={() => {
              router.push(`/cars/${car.id}`);
            }}
          >
            <span className="tracking-wide">View Details</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
