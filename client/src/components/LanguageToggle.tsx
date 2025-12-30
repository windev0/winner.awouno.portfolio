import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-mono font-bold text-sm tracking-wider hover:bg-accent/20 transition-colors duration-200"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </Button>
  );
}
