/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, Download, CheckCircle, ArrowLeftRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation, useSearchParams } from "react-router-dom";

import FileDropZone from "@/components/FileDropZone";
import FormatSelector from "@/components/FormatSelector";
import ConversionSettings from "@/components/ConversionSettings";
import SupportedFormatsText from "@/components/SupportedFormatsText";

const Converter = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const path = location.pathname;
  const type = searchParams.get("type");

  // Set default formats based on the current page or query parameter
  const getDefaultFormats = () => {
    if (type === "documents" || path === "/documents") {
      return { input: "pdf", output: "docx" };
    } else if (type === "images" || path === "/images") {
      return { input: "jpg", output: "png" };
    } else if (type === "audio" || path === "/audio") {
      return { input: "mp3", output: "wav" };
    } else if (type === "spreadsheets" || path === "/spreadsheets") {
      return { input: "xlsx", output: "csv" };
    } else {
      return { input: "pdf", output: "docx" };
    }
  };

  const defaultFormats = getDefaultFormats();

  const [file, setFile] = useState<File | null>(null);
  const [inputFormat, setInputFormat] = useState(defaultFormats.input);
  const [outputFormat, setOutputFormat] = useState(defaultFormats.output);
  const [settings, setSettings] = useState({});
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);

  // Update formats when path or type changes
  useEffect(() => {
    const newDefaults = getDefaultFormats();
    setInputFormat(newDefaults.input);
    setOutputFormat(newDefaults.output);
    setFile(null);
    setIsConverted(false);
  }, [path, type]);

  // Handle file selection
  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);

    // Try to detect the format from the file extension
    const extension = selectedFile.name.split(".").pop()?.toLowerCase();
    if (extension) {
      setInputFormat(extension);
    }

    // Reset conversion state
    setIsConverted(false);
  };

  // Handle settings change
  const handleSettingsChange = (newSettings: any) => {
    setSettings(newSettings);
  };

  // Handle conversion
  const handleConvert = () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file to convert.",
        variant: "destructive",
      });
      return;
    }

    setIsConverting(true);

    // Simulate conversion process
    setTimeout(() => {
      setIsConverting(false);
      setIsConverted(true);
      toast({
        title: "Conversion Complete",
        description: `Successfully converted ${
          file.name
        } to ${outputFormat.toUpperCase()}`,
      });
    }, 2500);
  };

  // Handle download
  const handleDownload = () => {
    if (!file) return;

    // Since we're not actually converting files in this demo version,
    // we'll just create a mock download experience

    // Create a dummy URL to simulate download
    const extension = outputFormat.toLowerCase();
    const fileName = file.name.split(".")[0] + "." + extension;

    // Create a mock download link - in a real app, this would be a real file URL
    const link = document.createElement("a");
    link.href = URL.createObjectURL(
      new Blob(["mockContent"], { type: "application/octet-stream" })
    );
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Started",
      description: `Downloading ${fileName}`,
    });
  };

  // Handle swap formats
  const handleSwapFormats = () => {
    setInputFormat(outputFormat);
    setOutputFormat(inputFormat);
  };

  // Get page title based on current path or type
  const getPageTitle = () => {
    if (type === "documents" || path === "/documents") {
      return "Document Converter";
    } else if (type === "images" || path === "/images") {
      return "Image Converter";
    } else if (type === "audio" || path === "/audio") {
      return "Audio Converter";
    } else if (type === "spreadsheets" || path === "/spreadsheets") {
      return "Spreadsheet Converter";
    } else {
      return "Convert Any File Format";
    }
  };

  return (
    <div className="container max-w-5xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
          {getPageTitle()}
        </h1>
        <SupportedFormatsText
          className="text-muted-foreground max-w-2xl mx-auto"
          selectedFormat={inputFormat}
        />
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium mb-3">1. Upload Your File</h2>
            <FileDropZone onFileSelect={handleFileSelect} />
          </div>

          <div>
            <h2 className="text-lg font-medium mb-3">
              2. Choose Conversion Options
            </h2>

            <div className="grid grid-cols-5 gap-4 items-center mb-6">
              <div className="col-span-2">
                <FormatSelector
                  value={inputFormat}
                  onChange={setInputFormat}
                  label="From Format"
                  type="input"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSwapFormats}
                  className="rounded-full"
                >
                  <ArrowLeftRight className="rotate-0 md:rotate-90 lg:rotate-0" />
                </Button>
              </div>

              <div className="col-span-2">
                <FormatSelector
                  value={outputFormat}
                  onChange={setOutputFormat}
                  label="To Format"
                  type="output"
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">
                3. Adjust Settings (Optional)
              </h3>
              <ConversionSettings
                type={outputFormat}
                onSettingsChange={handleSettingsChange}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Button
                onClick={handleConvert}
                disabled={!file || isConverting || isConverted}
                className="w-full bg-gradient-to-r from-converter-primary to-converter-secondary hover:opacity-90 text-white"
              >
                {isConverting ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Converting...
                  </>
                ) : (
                  "Convert File"
                )}
              </Button>

              {isConverted && (
                <Button
                  onClick={handleDownload}
                  className="w-full"
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Converted File
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>

      {isConverted && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-800">
          <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
          <div>
            <p className="font-medium">Conversion Complete!</p>
            <p className="text-sm text-green-700">
              Your file has been successfully converted. Click the download
              button to save it.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Converter;
