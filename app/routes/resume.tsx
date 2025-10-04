import type { Route } from "./+types/resume";
import { ResumeContent } from "@/components/ResumeContent";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Printer } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas-pro";
import { pdf } from "@react-pdf/renderer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume | RohitSoni.dev" },
    {
      name: "description",
      content:
        "View Rohit Soni's resume - Full-Stack MERN Developer with React Native expertise",
    },
  ];
}

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show PDF viewer after component mounts (client-side only)
    setShowPdf(true);
  }, []);

  const handleDownloadImage = async () => {
    if (resumeRef.current) {
      try {
        // Use html2canvas to capture the resume content
        const canvas = await html2canvas(resumeRef.current, {
          scale: 2, // Higher scale for better quality
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
        });

        // Convert canvas to image data
        const imgData = canvas.toDataURL("image/png");

        // Create a temporary link for download
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "Rohit_Soni_Resume.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error generating image:", error);
        // Fallback to direct download
        window.open("/resume.pdf", "_blank");
      }
    } else {
      // Fallback to direct download if resumeRef is not available
      window.open("/resume.pdf", "_blank");
    }
  };

  const handleDownloadPDF = async () => {
    try {
      const blob = await pdf(<ResumeContent />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Rohit_Soni_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Fallback to direct download
      window.open("/resume.pdf", "_blank");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Resume Header */}
      <div className="pt-16 pb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Portfolio</span>
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gradient">My Resume</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={handlePrint}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </Button>
              <Button
                onClick={handleDownloadImage}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Image</span>
              </Button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview Container */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-sm text-gray-600">
                Rohit_Soni_Resume.pdf
              </span>
            </div>
          </div>
          <div className="max-h-[800px] overflow-auto bg-gray-50">
            {showPdf ? (
              <div ref={resumeRef}>
                <ResumeContent />
              </div>
            ) : (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
