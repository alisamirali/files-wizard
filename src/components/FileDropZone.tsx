import React, { useState, useRef, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { Upload, File as FileIcon } from "lucide-react";

interface FileDropZoneProps {
  onFileSelect: (file: File) => void;
  acceptedFormats?: string;
}

const FileDropZone: React.FC<FileDropZoneProps> = ({
  onFileSelect,
  acceptedFormats = "*/*",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileChange(files[0]);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div
      className={`file-drop-zone min-h-[260px] px-6 py-8 flex flex-col items-center justify-center ${
        isDragging ? "active" : ""
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={triggerFileInput}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFormats}
        onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
        className="hidden"
      />

      {selectedFile ? (
        <div className="text-center">
          <div className="mb-4 bg-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
            <FileIcon size={28} className="text-primary" />
          </div>
          <h3 className="font-medium text-xl mb-1">{selectedFile.name}</h3>
          <p className="text-muted-foreground text-sm">
            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB ·{" "}
            {selectedFile.type || "Unknown type"}
          </p>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedFile(null);
              triggerFileInput();
            }}
            variant="outline"
            className="mt-4"
          >
            Choose a different file
          </Button>
        </div>
      ) : (
        <>
          <div className="mb-4 bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center animate-bounce-subtle">
            <Upload size={28} className="text-primary" />
          </div>
          <h3 className="font-medium text-xl mb-2">
            Drag & Drop your file here
          </h3>
          <p className="text-muted-foreground text-center mb-4">
            or click to browse from your device
          </p>
        </>
      )}
    </div>
  );
};

export default FileDropZone;
