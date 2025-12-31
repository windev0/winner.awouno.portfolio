import React from "react";
import { TabsTrigger } from "../ui/tabs";
import { Layers } from "lucide-react";

interface TriggerProps {
    value: string;
  label: string;
}
const CustomTabTrigger = ({ label, value }: TriggerProps) => {
  return (
    <TabsTrigger
      value={value}
      className="rounded-lg text-xs sm:text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
    >
      <Layers className="w-4 h-4 mr-1 md:mr-2 hidden sm:inline" />
      {/* {language === "en" ? "Experience" : "Expérience"} */}
      {label}
    </TabsTrigger>
  );
};

export default CustomTabTrigger;
