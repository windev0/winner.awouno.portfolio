import React from "react";

import { TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { AccomplishmentCard } from "../AccomplishmentCard";
interface AccomplishmentTabProps {
  accomplishments:
    | {
        date: string;
        id: number;
        type: string;
        descriptionEn: string;
        descriptionFr: string;
        titleEn: string;
        titleFr: string;
        link?: string | null | undefined;
        organization?: string | null | undefined;
      }[]
    | undefined;
  language: string;
}
const AccomplishmentTab = ({
  accomplishments,
  language,
}: AccomplishmentTabProps) => {
  return (
    <TabsContent value="accomplishments" className="mt-0 outline-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {language === "en" ? "Accomplishments" : "Accomplissements"}
          </h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "Certifications, workshops, and training."
              : "Certifications, ateliers et formations."}
          </p>
        </div>

        {accomplishments && accomplishments.length > 0 && (
          <div className="space-y-4">
            {accomplishments.map((accomplishment, idx) => (
              <AccomplishmentCard
                key={accomplishment.id}
                accomplishment={{
                  ...accomplishment,
                  organization: accomplishment.organization ?? "",
                  link: accomplishment.link ?? "",
                }}
                index={idx}
                language={language}
              />
            ))}
          </div>
        )}
      </motion.div>
    </TabsContent>
  );
};

export default AccomplishmentTab;
