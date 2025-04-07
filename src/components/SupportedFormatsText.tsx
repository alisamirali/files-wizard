import { useLocation, useSearchParams } from "react-router-dom";

interface SupportedFormatsTextProps {
  className?: string;
  selectedFormat?: string;
}

const SupportedFormatsText: React.FC<SupportedFormatsTextProps> = ({
  className,
  selectedFormat,
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const path = location.pathname;
  const converterType = searchParams.get("type");

  const getFormatText = () => {
    // Check the selected format first
    if (selectedFormat) {
      if (selectedFormat.match(/pdf|docx|doc|rtf|txt|odt|html|md/i)) {
        return "Supported formats include PDF, DOCX, DOC, RTF, TXT, ODT, HTML, and Markdown. Max file size: 100MB.";
      } else if (selectedFormat.match(/jpg|jpeg|png|gif|webp|bmp|tiff|svg/i)) {
        return "Supported formats include PNG, JPG/JPEG, WebP, GIF, SVG, BMP, and TIFF. Max file size: 100MB.";
      } else if (selectedFormat.match(/mp3|wav|ogg|flac|aac/i)) {
        return "Supported formats include MP3, WAV, OGG, FLAC, and AAC. Max file size: 100MB.";
      } else if (selectedFormat.match(/xlsx|xls|csv|ods|tsv/i)) {
        return "Supported formats include XLSX, XLS, CSV, ODS, and TSV. Max file size: 100MB.";
      }
    }

    // Fallback to page type if no format is selected
    if (path === "/documents" || converterType === "documents") {
      return "Supported formats include PDF, DOCX, DOC, RTF, TXT, ODT, HTML, and Markdown. Max file size: 100MB.";
    } else if (path === "/images" || converterType === "images") {
      return "Supported formats include PNG, JPG/JPEG, WebP, GIF, SVG, BMP, and TIFF. Max file size: 100MB.";
    } else if (path === "/audio" || converterType === "audio") {
      return "Supported formats include MP3, WAV, OGG, FLAC, and AAC. Max file size: 100MB.";
    } else if (path === "/spreadsheets" || converterType === "spreadsheets") {
      return "Supported formats include XLSX, XLS, CSV, ODS, and TSV. Max file size: 100MB.";
    }

    // Default text for main converter page
    return "Supported formats include PDF, DOCX, XLSX, PNG, JPG, and many more. Max file size: 100MB.";
  };

  return <p className={className}>{getFormatText()}</p>;
};

export default SupportedFormatsText;
