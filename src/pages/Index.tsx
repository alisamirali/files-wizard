import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Image,
  FileAudio,
  FileSpreadsheet,
  CheckCircle,
  Zap,
} from "lucide-react";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-converter-primary to-converter-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Transform Files with Ease
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Convert any file to any format. Fast, secure, and free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-converter-primary hover:bg-white/90"
              >
                <Link to="/converter">Convert Now</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-converter-primary transition-colors"
              >
                <Link to="/formats">Supported Formats</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-converter-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our powerful conversion engine makes it easy to transform files in
              just a few clicks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-converter-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-converter-primary">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-medium text-center mb-2">
                  Upload Your File
                </h3>
                <p className="text-center text-muted-foreground">
                  Drag & drop or browse to select the file you want to convert.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-converter-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-converter-primary">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-medium text-center mb-2">
                  Choose Format
                </h3>
                <p className="text-center text-muted-foreground">
                  Select your desired output format from our wide range of
                  options.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-converter-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-converter-primary">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-medium text-center mb-2">
                  Download Result
                </h3>
                <p className="text-center text-muted-foreground">
                  Instantly download your newly converted file. No email
                  required!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-gradient-to-r from-converter-primary to-converter-secondary hover:opacity-90"
            >
              <Link to="/converter" className="flex items-center">
                Start Converting <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supported Formats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Convert between all major file formats with our powerful
              conversion engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              to="/documents"
              className="bg-white p-6 rounded-lg shadow-sm border hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded mr-3">
                  <FileText size={24} className="text-blue-600" />
                </div>
                <h3 className="font-medium text-lg">Documents</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> PDF
                  to DOCX
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> DOCX
                  to PDF
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> RTF
                  to TXT
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> And
                  many more...
                </li>
              </ul>
            </Link>

            <Link
              to="/images"
              className="bg-white p-6 rounded-lg shadow-sm border hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded mr-3">
                  <Image size={24} className="text-green-600" />
                </div>
                <h3 className="font-medium text-lg">Images</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> JPG
                  to PNG
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> PNG
                  to WebP
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> SVG
                  to PNG
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> And
                  many more...
                </li>
              </ul>
            </Link>

            <Link
              to="/audio"
              className="bg-white p-6 rounded-lg shadow-sm border hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded mr-3">
                  <FileAudio size={24} className="text-purple-600" />
                </div>
                <h3 className="font-medium text-lg">Audio</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> MP3
                  to WAV
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> WAV
                  to MP3
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> OGG
                  to MP3
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> And
                  many more...
                </li>
              </ul>
            </Link>

            <Link
              to="/spreadsheets"
              className="bg-white p-6 rounded-lg shadow-sm border hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-2 rounded mr-3">
                  <FileSpreadsheet size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-medium text-lg">Spreadsheets</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> XLSX
                  to CSV
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> CSV
                  to XLSX
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> XLSX
                  to ODS
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> And
                  many more...
                </li>
              </ul>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/formats">View All Supported Formats</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-converter-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose FilesWizard?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our file conversion platform offers numerous advantages for all
              your document needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Zap size={28} className="text-converter-secondary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Lightning Fast</h3>
              <p className="text-white/70">
                Our powerful servers convert your files in seconds, not minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-converter-secondary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Secure Conversion</h3>
              <p className="text-white/70">
                Your files are encrypted and automatically deleted after
                conversion.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-converter-secondary"
                >
                  <path d="M18 8V7c0-1.1-.9-2-2-2H8a2 2 0 0 0-2 2v1" />
                  <path d="M9 8h6" />
                  <path d="M10 5.5V8" />
                  <path d="M14 5.5V8" />
                  <path d="M18 11.5v6.9A2.6 2.6 0 0 1 15.4 21H8.6A2.6 2.6 0 0 1 6 18.4v-6.9" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Free to Use</h3>
              <p className="text-white/70">
                No hidden fees or subscriptions required. Convert as many files
                as you need.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-white text-converter-dark hover:bg-white/90"
            >
              <Link to="/converter">Try It Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-converter-primary to-converter-secondary rounded-xl p-8 md:p-12 max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Convert Your Files?
            </h2>
            <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
              Join thousands of users who trust FilesWizard for their file
              conversion needs. No registration required!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-converter-primary hover:bg-white/90"
            >
              <Link to="/converter">Start Converting Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
