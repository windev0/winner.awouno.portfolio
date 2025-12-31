import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ExperienceTimeline } from "../ExperienceTimeline";

interface ExperienceTabProps {
  experiences:
    | {
        id: number;
        roleEn: string;
        roleFr: string;
        company: string;
        period: string;
        descriptionEn: string;
        descriptionFr: string;
      }[]
    | undefined;
  language: string;
}

const ExperienceTab = ({ language, experiences }: ExperienceTabProps) => {
  return (
    <TabsContent value="experience" className="mt-0 outline-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {language === "en" ? "Work History" : "Parcours Professionnel"}
          </h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "My professional journey and career highlights."
              : "Mon parcours professionnel et mes réalisations."}
          </p>
        </div>
        {experiences && <ExperienceTimeline experiences={experiences} />}
      </motion.div>
    </TabsContent>
  );
};

export default ExperienceTab;
