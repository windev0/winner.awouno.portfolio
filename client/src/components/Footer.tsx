import React from "react";
import { ContactDialog } from "./ContactDialog";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Footer = ({ language }: { language: string }) => {
  return (
    <div className="space-y-4 w-full">
      <ContactDialog />
      <a
        href="https://drive.google.com/file/d/19cYH39OpHOkhPOKCUXpvOuZVM2Kk-E3m/view?usp=sharing"
        download="AWOUNO_WINNER_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="w-full mt-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5"
        >
          <Download className="w-4 h-4 mr-2" />
          {language === "en" ? "Download CV" : "Télécharger CV"}
        </Button>
      </a>
    </div>
  );
};

export default Footer;
