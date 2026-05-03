import { TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const AboutMeTab = ({ language }: { language: string }) => {
  const isEnglish = language === "en";

  return (
    <TabsContent value="user" className="mt-0 outline-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <p className="text-muted-foreground">
            {isEnglish
              ? "A clear, practical profile focused on software development, systems integration and knowledge sharing."
              : "Un profil concret centré sur le développement logiciel, l’intégration de systèmes et la transmission."}
          </p>
        </div>

        <div className="space-y-8 text-base leading-7">
          <section>
            <h3 className="text-xl font-semibold mb-3">
              {isEnglish ? "Who I Am" : "Qui je suis"}
            </h3>
            <p>
              {isEnglish
                ? "I am a Master’s student at ISTIC – Université de Rennes 1, specializing in software development and systems integration. I work at the intersection of technical execution, knowledge sharing and initiative."
                : "Je suis étudiant en Master à l’ISTIC – Université de Rennes 1, spécialisé en développement logiciel et intégration des systèmes. Mon profil se situe à l’intersection entre technique, transmission de connaissances et prise d’initiative."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              {isEnglish ? "What I Enjoy" : "Ce que j’aime"}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                {isEnglish
                  ? "Software development for web and systems"
                  : "Le développement logiciel (web et systèmes)"}
              </li>
              <li>
                {isEnglish
                  ? "Integration challenges and information systems"
                  : "Les problématiques d’intégration applicative et de systèmes d’information"}
              </li>
              <li>
                {isEnglish
                  ? "Automation, CI/CD and workflow optimization"
                  : "L’automatisation (CI/CD, DevOps, optimisation des workflows)"}
              </li>
              <li>
                {isEnglish
                  ? "Sharing knowledge and helping others progress"
                  : "Le partage de connaissances et l’accompagnement des autres"}
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              {isEnglish ? "How I Work" : "Ma façon de travailler"}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                {isEnglish
                  ? "Pragmatic: I focus on concrete solutions."
                  : "Pragmatique : je vais à l’essentiel, avec des solutions concrètes."}
              </li>
              <li>
                {isEnglish
                  ? "Autonomous: I learn quickly and grow independently."
                  : "Autonome : capable d’apprendre rapidement et de monter en compétence seul."}
              </li>
              <li>
                {isEnglish
                  ? "Collaborative: I thrive in teams and support others."
                  : "Collaboratif : à l’aise en équipe, avec une capacité à encadrer."}
              </li>
              <li>
                {isEnglish
                  ? "Pedagogical: I explain complex ideas simply."
                  : "Pédagogue : j’explique simplement des concepts complexes."}
              </li>
              <li>
                {isEnglish
                  ? "Continuous improvement is central to my approach."
                  : "Amélioration continue : je cherche constamment à optimiser ma façon de travailler."}
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              {isEnglish ? "Key Achievements" : "Mes réalisations"}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-4 bg-card/80">
                <p className="font-semibold mb-2">
                  {isEnglish
                    ? "Professional Experience"
                    : "Expérience professionnelle"}
                </p>
                <p className="text-muted-foreground">
                  {isEnglish
                    ? "2 years as a full-stack web developer at INFINTUS, building applications and managing databases."
                    : "2 ans comme développeur web Full Stack chez INFINTUS, développement d’applications et gestion de bases de données."}
                </p>
              </div>
              <div className="rounded-2xl border border-border p-4 bg-card/80">
                <p className="font-semibold mb-2">
                  {isEnglish ? "Leadership & Mentoring" : "Leadership"}
                </p>
                <p className="text-muted-foreground">
                  {isEnglish
                    ? "Tech Lead for a team of 3 developers, organizing work and guiding technical decisions."
                    : "Tech Lead d’une équipe de 3 développeurs, organisation du travail et accompagnement technique."}
                </p>
              </div>
              <div className="rounded-2xl border border-border p-4 bg-card/80">
                <p className="font-semibold mb-2">
                  {isEnglish
                    ? "Teaching & Coaching"
                    : "Transmission & pédagogie"}
                </p>
                <p className="text-muted-foreground">
                  {isEnglish
                    ? "Private tutoring in math, physics and programming plus workshops on Docker and web development."
                    : "Cours particuliers en mathématiques, physique et programmation, et animation d’atelier Docker."}
                </p>
              </div>
              <div className="rounded-2xl border border-border p-4 bg-card/80">
                <p className="font-semibold mb-2">
                  {isEnglish ? "Technical Skills" : "Compétences techniques"}
                </p>
                <p className="text-muted-foreground">
                  {isEnglish
                    ? "Web/mobile development, CI/CD with Jenkins, Docker and GitHub Actions."
                    : "Développement web et mobile, CI/CD : Jenkins, Docker, GitHub Actions."}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              {isEnglish ? "Aspirations" : "Mes aspirations"}
            </h3>
            <p>
              {isEnglish
                ? "I want to work on complex, impactful systems, optimize business processes and keep learning in an environment that values both technical mastery and teaching."
                : "Je souhaite évoluer dans un environnement où je peux travailler sur des systèmes complexes et à fort impact, comprendre et optimiser les processus métiers, et continuer à apprendre auprès d’experts."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              {isEnglish ? "What I Want to Build" : "Ce que je veux construire"}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                {isEnglish
                  ? "Build solid expertise in development and systems integration."
                  : "Construire une expertise solide en développement et en intégration de systèmes."}
              </li>
              <li>
                {isEnglish
                  ? "Create impact by sharing knowledge and building useful solutions."
                  : "Avoir un impact en partageant mes connaissances et en créant des solutions utiles."}
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              {isEnglish
                ? "AI in My Development Process"
                : "L'IA dans mon processus de développement"}
            </h3>
            <p className="mb-4 text-muted-foreground">
              {isEnglish
                ? "I integrate AI regularly into my workflow to boost productivity and code quality:"
                : "J'intègre régulièrement l'IA dans mon processus de développement pour augmenter ma productivité et la qualité du code :"}
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold text-foreground min-w-fit">
                  {isEnglish ? "GitHub Copilot:" : "GitHub Copilot :"}
                </span>
                <span>
                  {isEnglish
                    ? "Code completion and debugging assistance"
                    : "Complétion de code et assistance debugging"}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground min-w-fit">
                  {isEnglish
                    ? "ChatGPT / Perplexity:"
                    : "ChatGPT / Perplexity :"}
                </span>
                <span>
                  {isEnglish
                    ? "Technical reasoning, architecture decisions, bug resolution"
                    : "Réflexion technique, choix d'architecture, résolution de bugs"}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground min-w-fit">
                  {isEnglish ? "Claude / Cursor:" : "Claude / Cursor :"}
                </span>
                <span>
                  {isEnglish
                    ? "Code generation and improvement with context awareness"
                    : "Génération et amélioration de code avec contexte"}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground min-w-fit">
                  {isEnglish ? "Stitch / Bolt:" : "Stitch / Bolt :"}
                </span>
                <span>
                  {isEnglish
                    ? "Rapid prototyping and mockup generation"
                    : "Génération rapide de maquettes et prototypes"}
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              {isEnglish
                ? "I use these tools strategically to enhance my workflow while maintaining full control and critical thinking."
                : "J'utilise ces outils de manière stratégique pour améliorer mon flux de travail tout en conservant le contrôle et l'esprit critique."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              {isEnglish ? "In Short" : "En résumé"}
            </h3>
            <p className="text-muted-foreground">
              {isEnglish
                ? "A technical profile with a strong human side: I build, organize, teach and focus on impact."
                : "Un profil technique avec une forte dimension humaine : je développe, je structure, je transmets et je cherche à avoir de l’impact."}
            </p>
          </section>
        </div>
      </motion.div>
    </TabsContent>
  );
};

export default AboutMeTab;
