"use client";

import { useCallback, useId, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Camera, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { updateProfileImage as updateProfileImageApi } from "@/lib/profileApi";
import { updateProfileImage as updateProfileImageAction } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "@/hooks/useAuth";

type Props = {
  name?: string;
  className?: string;
  defaultImageUrl?: string;
};

export default function ProfileImageUpload({
  name = "image",
  className,
  defaultImageUrl = "circle-avatar-placeholder.jpg",
}: Props) {

  const { user } = useAuth()
  const imageUrl = user?.profileImg || defaultImageUrl;
  const dispatch = useDispatch();

  const inputId = useId();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(imageUrl);
  const [dragActive, setDragActive] = useState(false);

  const onFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.info("Please select an image under 5MB.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", file);
      const uploadedUrl: string = await updateProfileImageApi(formData);
      dispatch(updateProfileImageAction(uploadedUrl));

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(typeof reader.result === "string" ? reader.result : null);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Failed to upload image:", error);
      toast.error("Failed to upload image. Please try again.");
      setPreview(null);
    }
  }, [dispatch]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    onFiles(e.dataTransfer.files);
  }, [onFiles]);

  const onClickPick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const clearImage = useCallback(() => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-start gap-6 sm:items-start sm:gap-10",
        className
      )}
    >
      {/* Hidden field to submit base64 image data */}
      <input type="hidden" name={name} value={preview ?? ""} />

      {/* Circle avatar with overlay */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={onDrop}
        className={cn(
          "relative h-32 w-32 shrink-0 rounded-full ring-1 ring-border transition-shadow",
          dragActive ? "ring-2 shadow-[0_0_0_4px_rgba(0,0,0,0.06)]" : "ring-1"
        )}
      >
        <Avatar className="h-32 w-32">
          <AvatarImage
            src={preview ?? defaultImageUrl}
            alt="Profile image preview"
            className="object-cover"
          />
          <AvatarFallback>PT</AvatarFallback>
        </Avatar>

        {/* Clickable overlay */}
        <button
          type="button"
          onClick={onClickPick}
          aria-label="Change profile image"
          className={cn(
            "absolute inset-0 flex items-center justify-center rounded-full bg-black/0 text-white transition-colors",
            "hover:bg-black/30 focus-visible:bg-black/30"
          )}
        >
          <span className="pointer-events-none inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium">
            <Camera className="h-4 w-4" aria-hidden="true" />
            <span>{preview ? "Change" : "Upload"}</span>
          </span>
        </button>

        {/* Hidden input to pick file */}
        <input
          id={inputId}
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onFiles(e.target.files)}
        />
      </div>

      <div className="grid gap-3 text-sm leading-6 text-muted-foreground">
        {preview && (
          <div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearImage}
              className="px-2 border-gray-700 border-[1px] rounded-full"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
