import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLocation, useSearchParams } from "react-router-dom";

interface ConversionSettingsProps {
  type: string;
  onSettingsChange: (settings: any) => void;
}

const ConversionSettings: React.FC<ConversionSettingsProps> = ({
  type,
  onSettingsChange,
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const path = location.pathname;
  const converterType = searchParams.get("type");

  // Document settings
  const [documentSettings, setDocumentSettings] = React.useState({
    keepFonts: true,
    preserveLinks: true,
    pageMargin: 20,
  });

  // Image settings
  const [imageSettings, setImageSettings] = React.useState({
    quality: 85,
    resize: false,
    width: 800,
    height: 600,
    preserveAspectRatio: true,
  });

  // Audio settings
  const [audioSettings, setAudioSettings] = React.useState({
    bitrate: 192,
    sampleRate: 44100,
    channels: "2",
  });

  // Spreadsheet settings
  const [spreadsheetSettings, setSpreadsheetSettings] = React.useState({
    includeHeaders: true,
    delimiter: ",",
    encoding: "UTF-8",
  });

  // Update settings based on changes
  const updateDocumentSettings = (
    newSettings: Partial<typeof documentSettings>
  ) => {
    const updated = { ...documentSettings, ...newSettings };
    setDocumentSettings(updated);
    onSettingsChange(updated);
  };

  const updateImageSettings = (newSettings: Partial<typeof imageSettings>) => {
    const updated = { ...imageSettings, ...newSettings };
    setImageSettings(updated);
    onSettingsChange(updated);
  };

  const updateAudioSettings = (newSettings: Partial<typeof audioSettings>) => {
    const updated = { ...audioSettings, ...newSettings };
    setAudioSettings(updated);
    onSettingsChange(updated);
  };

  const updateSpreadsheetSettings = (
    newSettings: Partial<typeof spreadsheetSettings>
  ) => {
    const updated = { ...spreadsheetSettings, ...newSettings };
    setSpreadsheetSettings(updated);
    onSettingsChange(updated);
  };

  // Determine which settings to show based on the current page or query parameter
  const getSettingsContent = () => {
    if (
      path === "/documents" ||
      converterType === "documents" ||
      type.match(/pdf|docx|doc|rtf|txt|odt|html|md/i)
    ) {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="keep-fonts" className="flex-grow">
              Preserve Fonts
            </Label>
            <Switch
              id="keep-fonts"
              checked={documentSettings.keepFonts}
              onCheckedChange={(checked) =>
                updateDocumentSettings({ keepFonts: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="preserve-links" className="flex-grow">
              Preserve Hyperlinks
            </Label>
            <Switch
              id="preserve-links"
              checked={documentSettings.preserveLinks}
              onCheckedChange={(checked) =>
                updateDocumentSettings({ preserveLinks: checked })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Page Margin (mm)</Label>
            <Slider
              value={[documentSettings.pageMargin]}
              min={0}
              max={50}
              step={1}
              onValueChange={(value) =>
                updateDocumentSettings({ pageMargin: value[0] })
              }
            />
            <div className="text-xs text-right text-muted-foreground">
              {documentSettings.pageMargin}mm
            </div>
          </div>
        </div>
      );
    } else if (
      path === "/images" ||
      converterType === "images" ||
      type.match(/jpg|jpeg|png|gif|webp|bmp|tiff|svg/i)
    ) {
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Quality</Label>
            <Slider
              value={[imageSettings.quality]}
              min={10}
              max={100}
              step={5}
              onValueChange={(value) =>
                updateImageSettings({ quality: value[0] })
              }
            />
            <div className="text-xs text-right text-muted-foreground">
              {imageSettings.quality}%
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="resize-image" className="flex-grow">
              Resize Image
            </Label>
            <Switch
              id="resize-image"
              checked={imageSettings.resize}
              onCheckedChange={(checked) =>
                updateImageSettings({ resize: checked })
              }
            />
          </div>

          {imageSettings.resize && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="width">Width (px)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={imageSettings.width}
                    onChange={(e) =>
                      updateImageSettings({ width: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (px)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={imageSettings.height}
                    onChange={(e) =>
                      updateImageSettings({ height: Number(e.target.value) })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="aspect-ratio" className="flex-grow">
                  Preserve Aspect Ratio
                </Label>
                <Switch
                  id="aspect-ratio"
                  checked={imageSettings.preserveAspectRatio}
                  onCheckedChange={(checked) =>
                    updateImageSettings({ preserveAspectRatio: checked })
                  }
                />
              </div>
            </div>
          )}
        </div>
      );
    } else if (
      path === "/audio" ||
      converterType === "audio" ||
      type.match(/mp3|wav|ogg|flac|aac/i)
    ) {
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Bitrate (kbps)</Label>
            <Slider
              value={[audioSettings.bitrate]}
              min={64}
              max={320}
              step={32}
              onValueChange={(value) =>
                updateAudioSettings({ bitrate: value[0] })
              }
            />
            <div className="text-xs text-right text-muted-foreground">
              {audioSettings.bitrate} kbps
            </div>
          </div>

          <div className="space-y-2">
            <Label>Sample Rate (Hz)</Label>
            <select
              value={audioSettings.sampleRate}
              onChange={(e) =>
                updateAudioSettings({ sampleRate: Number(e.target.value) })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="22050">22050 Hz</option>
              <option value="44100">44100 Hz</option>
              <option value="48000">48000 Hz</option>
              <option value="96000">96000 Hz</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>Channels</Label>
            <select
              value={audioSettings.channels}
              onChange={(e) =>
                updateAudioSettings({ channels: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="1">Mono</option>
              <option value="2">Stereo</option>
            </select>
          </div>
        </div>
      );
    } else if (
      path === "/spreadsheets" ||
      converterType === "spreadsheets" ||
      type.match(/xlsx|xls|csv|ods/i)
    ) {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="include-headers" className="flex-grow">
              Include Headers
            </Label>
            <Switch
              id="include-headers"
              checked={spreadsheetSettings.includeHeaders}
              onCheckedChange={(checked) =>
                updateSpreadsheetSettings({ includeHeaders: checked })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Delimiter (for CSV)</Label>
            <select
              value={spreadsheetSettings.delimiter}
              onChange={(e) =>
                updateSpreadsheetSettings({ delimiter: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value=",">Comma (,)</option>
              <option value=";">Semicolon (;)</option>
              <option value="\t">Tab</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>File Encoding</Label>
            <select
              value={spreadsheetSettings.encoding}
              onChange={(e) =>
                updateSpreadsheetSettings({ encoding: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="UTF-8">UTF-8</option>
              <option value="UTF-16">UTF-16</option>
              <option value="ASCII">ASCII</option>
            </select>
          </div>
        </div>
      );
    }

    // Default empty settings when no specific ones apply
    return (
      <div className="py-2 text-center text-muted-foreground">
        No additional settings available for this format.
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">{getSettingsContent()}</CardContent>
    </Card>
  );
};

export default ConversionSettings;
