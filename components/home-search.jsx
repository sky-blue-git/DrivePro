"use client";

import { useState, useEffect } from "react";
import { Search, Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { processImageSearch } from "@/actions/home";
import useFetch from "@/hooks/use-fetch";

export function HomeSearch() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);

  // Use the useFetch hook for image processing
  const {
    loading: isProcessing,
    fn: processImageFn,
    data: processResult,
    error: processError,
  } = useFetch(processImageSearch);

  // Handle process result and errors with useEffect
  useEffect(() => {
    if (processResult?.success) {
      const params = new URLSearchParams();

      // Add extracted params to the search
      if (processResult.data.make) params.set("make", processResult.data.make);
      if (processResult.data.bodyType)
        params.set("bodyType", processResult.data.bodyType);
      if (processResult.data.color)
        params.set("color", processResult.data.color);

      // Redirect to search results
      router.push(`/cars?${params.toString()}`);
    }
  }, [processResult, router]);

  useEffect(() => {
    if (processError) {
      toast.error(
        "Failed to analyze image: " + (processError.message || "Unknown error")
      );
    }
  }, [processError]);

  // Handle image upload with react-dropzone
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }

      setIsUploading(true);
      setSearchImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setIsUploading(false);
        toast.success("Image uploaded successfully");
      };
      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Failed to read the image");
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png"],
      },
      maxFiles: 1,
    });

  // Handle text search submissions
  const handleTextSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    router.push(`/cars?search=${encodeURIComponent(searchTerm)}`);
  };

  // Handle image search submissions
  const handleImageSearch = async (e) => {
    e.preventDefault();
    if (!searchImage) {
      toast.error("Please upload an image first");
      return;
    }

    // Use the processImageFn from useFetch hook
    await processImageFn(searchImage);
  };

  return (
    <div className="space-y-10">
      <form onSubmit={handleTextSearch}>
        <div className="relative flex items-center">
          <Search className="absolute left-6 w-6 h-6 text-foreground/80" />
          <Input
            type="text"
            placeholder="Search by make, model, year, or any feature..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-16 pr-48 py-5 w-full rounded-2xl border-2 border-white/40 bg-white/60 backdrop-blur-xl text-foreground placeholder-muted-foreground focus:border-primary focus:luxury-shadow transition-all duration-300 text-lg font-medium"
          />

          {/* Image Search Button */}
          <div className="absolute right-40">
            <Camera
              size={36}
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              className={`cursor-pointer rounded-xl p-2 transition-all duration-300 ${
                isImageSearchActive 
                  ? "premium-gradient text-white shadow-lg" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 shadow-sm"
              }`}
            />
          </div>

          <Button type="submit" className="absolute right-2 rounded-2xl premium-gradient text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 luxury-shadow">
            <span className="tracking-wide text-lg">Search</span>
          </Button>
        </div>
      </form>

      {isImageSearchActive && (
        <div className="mt-10">
          <form onSubmit={handleImageSearch} className="space-y-8">
            <div className="border-2 border-dashed border-primary/40 rounded-3xl p-12 text-center luxury-glass luxury-shadow hover:luxury-shadow transition-all duration-300 border-white/50">
              {imagePreview ? (
                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <img
                      src={imagePreview}
                      alt="Vehicle preview"
                      className="h-60 object-contain rounded-2xl luxury-shadow"
                    />
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full premium-pulse luxury-shadow"></div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchImage(null);
                      setImagePreview("");
                      toast.info("Image removed");
                    }}
                    className="luxury-glass luxury-shadow hover:luxury-shadow transition-all duration-300 border-white/40"
                  >
                    <span className="text-primary font-medium">Remove Image</span>
                  </Button>
                </div>
              ) : (
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    <Upload className="h-20 w-20 text-primary/80 mb-8" />
                    <p className="text-foreground mb-6 text-2xl font-semibold">
                      {isDragActive && !isDragReject
                        ? "Drop to Upload"
                        : "Upload Vehicle Image"}
                    </p>
                    {isDragReject && (
                      <p className="text-red-500 mb-6 font-semibold">Invalid File Type</p>
                    )}
                    <p className="text-muted-foreground text-base">
                      Supports JPG, PNG (Maximum 5MB)
                    </p>
                    <div className="mt-8 w-32 h-px premium-gradient"></div>
                  </div>
                </div>
              )}
            </div>

            {imagePreview && (
              <Button
                type="submit"
                className="w-full premium-gradient text-white font-semibold py-5 text-lg transition-all duration-300 hover:scale-105 luxury-shadow rounded-2xl"
                disabled={isUploading || isProcessing}
              >
                {isUploading
                  ? "Uploading Image..."
                  : isProcessing
                  ? "Analyzing Vehicle..."
                  : "Search by Image"}
              </Button>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
