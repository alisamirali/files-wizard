import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FileIcon,
  FileText,
  Image,
  FileAudio,
  FileVideo,
  FileSpreadsheet,
} from "lucide-react";

const FormatCard = ({
  name,
  description,
  extensions,
  icon,
}: {
  name: string;
  description: string;
  extensions: string[];
  icon: React.ReactNode;
}) => (
  <Card className="hover-lift">
    <CardContent className="p-6">
      <div className="flex items-start">
        <div className="bg-primary/10 p-3 rounded-lg mr-4">{icon}</div>
        <div>
          <h3 className="font-medium text-lg mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-2">{description}</p>
          <div className="flex flex-wrap gap-1">
            {extensions.map((ext) => (
              <span
                key={ext}
                className="bg-secondary text-xs px-2 py-1 rounded font-medium"
              >
                {ext}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Formats = () => {
  return (
    <div className="container max-w-5xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
          Supported File Formats
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          FilesWizard supports conversion between a wide variety of file
          formats. Browse our supported formats below or try converting your
          files right away.
        </p>
        <div className="mt-6">
          <Button
            asChild
            className="bg-gradient-to-r from-converter-primary to-converter-secondary hover:opacity-90"
          >
            <Link to="/converter">Start Converting</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="document" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger
            value="document"
            className="flex flex-col items-center gap-1 py-3"
          >
            <FileText size={18} />
            <span className="text-xs">Document</span>
          </TabsTrigger>
          <TabsTrigger
            value="image"
            className="flex flex-col items-center gap-1 py-3"
          >
            <Image size={18} />
            <span className="text-xs">Image</span>
          </TabsTrigger>
          <TabsTrigger
            value="spreadsheet"
            className="flex flex-col items-center gap-1 py-3"
          >
            <FileSpreadsheet size={18} />
            <span className="text-xs">Spreadsheet</span>
          </TabsTrigger>
          <TabsTrigger
            value="audio"
            className="flex flex-col items-center gap-1 py-3"
          >
            <FileAudio size={18} />
            <span className="text-xs">Audio</span>
          </TabsTrigger>
          <TabsTrigger
            value="video"
            className="flex flex-col items-center gap-1 py-3"
          >
            <FileVideo size={18} />
            <span className="text-xs">Video</span>
          </TabsTrigger>
        </TabsList>

        {/* Document Formats */}
        <TabsContent value="document" className="space-y-4">
          <FormatCard
            name="PDF (Portable Document Format)"
            description="Standard document format for sharing that preserves layout across platforms."
            extensions={["pdf"]}
            icon={<FileIcon className="text-red-600" />}
          />
          <FormatCard
            name="Microsoft Word"
            description="Word processing document formats used by Microsoft Word."
            extensions={["docx", "doc"]}
            icon={<FileIcon className="text-blue-600" />}
          />
          <FormatCard
            name="Rich Text & Plain Text"
            description="Simple text formats with or without basic formatting."
            extensions={["rtf", "txt"]}
            icon={<FileText className="text-gray-600" />}
          />
          <FormatCard
            name="OpenDocument"
            description="Open source document format for office applications."
            extensions={["odt"]}
            icon={<FileIcon className="text-teal-600" />}
          />
          <FormatCard
            name="Web & Markup"
            description="Web-based document formats with structured content."
            extensions={["html", "md"]}
            icon={<FileText className="text-purple-600" />}
          />
        </TabsContent>

        {/* Image Formats */}
        <TabsContent value="image" className="space-y-4">
          <FormatCard
            name="Raster Images"
            description="Common image formats for photographs and web graphics."
            extensions={["jpg", "jpeg", "png", "gif", "webp"]}
            icon={<Image className="text-blue-600" />}
          />
          <FormatCard
            name="High-Quality Images"
            description="Image formats designed for high quality and print use."
            extensions={["bmp", "tiff"]}
            icon={<Image className="text-green-600" />}
          />
          <FormatCard
            name="Vector Images"
            description="Scalable graphics format for illustrations and logos."
            extensions={["svg"]}
            icon={<Image className="text-orange-600" />}
          />
        </TabsContent>

        {/* Spreadsheet Formats */}
        <TabsContent value="spreadsheet" className="space-y-4">
          <FormatCard
            name="Microsoft Excel"
            description="Spreadsheet formats used by Microsoft Excel."
            extensions={["xlsx", "xls"]}
            icon={<FileSpreadsheet className="text-green-600" />}
          />
          <FormatCard
            name="CSV (Comma Separated Values)"
            description="Simple format for storing tabular data in plain text."
            extensions={["csv"]}
            icon={<FileSpreadsheet className="text-gray-600" />}
          />
          <FormatCard
            name="OpenDocument Spreadsheet"
            description="Open source spreadsheet format for office applications."
            extensions={["ods"]}
            icon={<FileSpreadsheet className="text-teal-600" />}
          />
        </TabsContent>

        {/* Audio Formats */}
        <TabsContent value="audio" className="space-y-4">
          <FormatCard
            name="Common Audio"
            description="Widely supported audio formats for music and recordings."
            extensions={["mp3", "wav"]}
            icon={<FileAudio className="text-purple-600" />}
          />
          <FormatCard
            name="High-Quality Audio"
            description="Formats designed for high-quality audio preservation."
            extensions={["flac", "aac"]}
            icon={<FileAudio className="text-indigo-600" />}
          />
          <FormatCard
            name="Web Audio"
            description="Audio formats optimized for web use."
            extensions={["ogg"]}
            icon={<FileAudio className="text-blue-600" />}
          />
        </TabsContent>

        {/* Video Formats */}
        <TabsContent value="video" className="space-y-4">
          <FormatCard
            name="Common Video"
            description="Standard video formats compatible with most devices and platforms."
            extensions={["mp4", "avi"]}
            icon={<FileVideo className="text-red-600" />}
          />
          <FormatCard
            name="Professional Video"
            description="Video formats used in professional video production."
            extensions={["mov", "wmv"]}
            icon={<FileVideo className="text-orange-600" />}
          />
          <FormatCard
            name="High-Quality & Web Video"
            description="Modern formats designed for high quality and web streaming."
            extensions={["mkv", "webm"]}
            icon={<FileVideo className="text-blue-600" />}
          />
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-secondary/50 p-6 rounded-lg">
        <h2 className="text-xl font-medium mb-2">
          Need to convert a specific format?
        </h2>
        <p className="mb-4 text-muted-foreground">
          We're always expanding our list of supported formats. If you have
          specific conversion needs, give it a try or contact us for assistance.
        </p>
        <Button asChild>
          <Link to="/converter">Go to Converter</Link>
        </Button>
      </div>
    </div>
  );
};

export default Formats;
