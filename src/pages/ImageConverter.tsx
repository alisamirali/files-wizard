import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Image, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ImageConverter = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Image size={32} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Image Converter</h1>
          <p className="text-lg text-muted-foreground">
            Convert your images between different formats with ease
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Supported Formats</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="font-medium">JPG/JPEG</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="font-medium">PNG</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="font-medium">WebP</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="font-medium">GIF</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="font-medium">SVG</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="font-medium">BMP</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-converter-primary to-converter-secondary"
          >
            <Link to="/converter?type=images" className="flex items-center">
              Start Converting <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageConverter;
