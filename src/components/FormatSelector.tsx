import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocation, useSearchParams } from "react-router-dom";

interface FormatOption {
  value: string;
  label: string;
}

const documentFormats: FormatOption[] = [
  { value: "pdf", label: "PDF" },
  { value: "docx", label: "DOCX (Word)" },
  { value: "doc", label: "DOC (Word)" },
  { value: "rtf", label: "RTF (Rich Text)" },
  { value: "txt", label: "TXT (Plain Text)" },
  { value: "odt", label: "ODT (OpenDocument)" },
  { value: "html", label: "HTML" },
  { value: "md", label: "MD (Markdown)" },
];

const imageFormats: FormatOption[] = [
  { value: "jpg", label: "JPG/JPEG" },
  { value: "png", label: "PNG" },
  { value: "gif", label: "GIF" },
  { value: "bmp", label: "BMP" },
  { value: "webp", label: "WEBP" },
  { value: "tiff", label: "TIFF" },
  { value: "svg", label: "SVG" },
];

const audioFormats: FormatOption[] = [
  { value: "mp3", label: "MP3" },
  { value: "wav", label: "WAV" },
  { value: "ogg", label: "OGG" },
  { value: "flac", label: "FLAC" },
  { value: "aac", label: "AAC" },
];

const videoFormats: FormatOption[] = [
  { value: "mp4", label: "MP4" },
  { value: "avi", label: "AVI" },
  { value: "mov", label: "MOV" },
  { value: "wmv", label: "WMV" },
  { value: "mkv", label: "MKV" },
  { value: "webm", label: "WEBM" },
];

const spreadsheetFormats: FormatOption[] = [
  { value: "xlsx", label: "XLSX (Excel)" },
  { value: "xls", label: "XLS (Excel)" },
  { value: "csv", label: "CSV" },
  { value: "ods", label: "ODS (OpenDocument)" },
];

interface FormatSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  type?: "input" | "output";
}

const FormatSelector: React.FC<FormatSelectorProps> = ({
  value,
  onChange,
  label = "Format",
  type = "input",
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const path = location.pathname;
  const converterType = searchParams.get("type");

  // Determine which formats to show based on the current page or query parameter
  let formatGroups = [];

  if (path === "/documents" || converterType === "documents") {
    formatGroups = [{ label: "Document", formats: documentFormats }];
  } else if (path === "/images" || converterType === "images") {
    formatGroups = [{ label: "Image", formats: imageFormats }];
  } else if (path === "/audio" || converterType === "audio") {
    formatGroups = [{ label: "Audio", formats: audioFormats }];
  } else if (path === "/spreadsheets" || converterType === "spreadsheets") {
    formatGroups = [{ label: "Spreadsheet", formats: spreadsheetFormats }];
  } else {
    // Default to all formats for the main converter page
    formatGroups = [
      { label: "Document", formats: documentFormats },
      { label: "Image", formats: imageFormats },
      { label: "Spreadsheet", formats: spreadsheetFormats },
      { label: "Audio", formats: audioFormats },
      { label: "Video", formats: videoFormats },
    ];
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1 text-foreground">
        {label}
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select format" />
        </SelectTrigger>
        <SelectContent>
          {formatGroups.map((group) => (
            <React.Fragment key={group.label}>
              {formatGroups.length > 1 && (
                <div className="text-xs text-muted-foreground px-2 py-1.5 font-medium">
                  {group.label}
                </div>
              )}
              {group.formats.map((format) => (
                <SelectItem key={format.value} value={format.value}>
                  {format.label}
                </SelectItem>
              ))}
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormatSelector;
