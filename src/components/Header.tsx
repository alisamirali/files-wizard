import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FileText, Image, FileAudio, FileSpreadsheet } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between bg-background/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-r from-converter-primary to-converter-secondary rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
              <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
              <path d="M12 7v10" />
              <path d="m9 7 3-3 3 3" />
              <path d="m9 17 3 3 3-3" />
            </svg>
          </div>
          <span className="text-xl font-bold hidden sm:inline-block">
            FilesWizard
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Converters</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                  <div className="grid gap-2">
                    <Link
                      to="/documents"
                      className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      <FileText className="w-4 h-4 text-blue-600" />
                      <div className="text-sm font-medium">Documents</div>
                    </Link>
                    <Link
                      to="/images"
                      className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      <Image className="w-4 h-4 text-green-600" />
                      <div className="text-sm font-medium">Images</div>
                    </Link>
                    <Link
                      to="/audio"
                      className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      <FileAudio className="w-4 h-4 text-purple-600" />
                      <div className="text-sm font-medium">Audio</div>
                    </Link>
                    <Link
                      to="/spreadsheets"
                      className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                      <div className="text-sm font-medium">Spreadsheets</div>
                    </Link>
                  </div>
                  <div className="p-4 bg-accent rounded-lg">
                    <h4 className="text-sm font-medium mb-2">Quick Convert</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Choose your converter and start transforming your files
                      instantly.
                    </p>
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-gradient-to-r from-converter-primary to-converter-secondary"
                    >
                      <Link to="/converter">Convert Now</Link>
                    </Button>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Button
        size="sm"
        className="bg-gradient-to-r from-converter-primary to-converter-secondary hover:opacity-90"
      >
        <Link to="/converter">Convert Now</Link>
      </Button>
    </header>
  );
};

export default Header;
