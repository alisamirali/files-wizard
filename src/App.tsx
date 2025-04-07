import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Converter from "./pages/Converter";
import Formats from "./pages/Formats";
import NotFound from "./pages/NotFound";
import DocumentConverter from "./pages/DocumentConverter";
import ImageConverter from "./pages/ImageConverter";
import AudioConverter from "./pages/AudioConverter";
import SpreadsheetConverter from "./pages/SpreadsheetConverter";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/converter"
            element={
              <Layout>
                <Converter />
              </Layout>
            }
          />
          <Route
            path="/formats"
            element={
              <Layout>
                <Formats />
              </Layout>
            }
          />
          <Route
            path="/documents"
            element={
              <Layout>
                <DocumentConverter />
              </Layout>
            }
          />
          <Route
            path="/images"
            element={
              <Layout>
                <ImageConverter />
              </Layout>
            }
          />
          <Route
            path="/audio"
            element={
              <Layout>
                <AudioConverter />
              </Layout>
            }
          />
          <Route
            path="/spreadsheets"
            element={
              <Layout>
                <SpreadsheetConverter />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
