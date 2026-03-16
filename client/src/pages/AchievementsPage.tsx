import { useEffect } from "react";
import { Trophy } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const achievementSections = [
  {
    badge: "DEPI · Digital Egypt Pioneers Initiative",
    title: "Top Achiever",
    subtitle: "One of the Top 5 Graduation Projects on the React Track",
    description:
      "During my participation in the Digital Egypt Pioneers Initiative (DEPI) — one of Egypt's most competitive national programs for developing elite software engineers — I was recognized as one of the Top Achievers and honored at the program's conclusion.",
    secondaryDescription:
      "My graduation project was officially ranked among the Top 5 Projects on the React Track across the entire cohort and evaluated for code quality, architecture, and real-world impact.",
    points: [
      "Recognized as one of the Top Achievers in DEPI",
      "Graduation project ranked among the Top 5 on the React Track",
      "Evaluated for code quality, architecture, and real-world impact",
    ],
    images: [
      { src: "/image/ach1.jpeg", alt: "DEPI Round 3 Certificate" },
      { src: "/image/ach2.jpeg", alt: "Best Project Award" },
      { src: "/image/ach3.jpeg", alt: "Top 5 React Track" },
      { src: "/image/ach9.png", alt: "DEPI ceremony and recognition" },
    ],
  },
  {
    badge: "Problem Solving · Codeforces",
    title: "Problem Solving Achievements — Codeforces",
    subtitle: "Earned Pupil and Specialist ranks on Codeforces",
    description:
      "I earned both the Pupil and Specialist ranks on Codeforces through continuous practice, virtual participation, and real contest experience on one of the most competitive problem solving platforms.",
    secondaryDescription:
      "I also solved nearly 500 problems on the platform, which helped me build strong algorithmic thinking, cleaner implementation skills, and deeper competitive programming experience.",
    points: [
      "Earned Pupil and Specialist ranks on Codeforces",
      "Solved nearly 500 problems on the platform",
      "Developed strong algorithmic and competitive programming skills",
    ],
    images: [
      { src: "/image/ach4.png", alt: "Codeforces rank achievement" },
      { src: "/image/ach5.png", alt: "Codeforces solved problems achievement" },
    ],
  },
  {
    badge: "Competitive Programming · ICPC Mansoura",
    title: "Competitive Programming — Game of Coders",
    subtitle: "Participated in the Game of Coders, organized by ICPC Mansoura",
    description:
      "I participated in the Game of Coders contest, organized by ICPC Mansoura, gaining hands-on experience with team-based competitive programming in a real contest environment.",
    secondaryDescription:
      "The event strengthened my problem-solving mindset, speed under pressure, and collaboration skills while working through challenging algorithmic problems with my teammates.",
    points: [
      "Participated in the Game of Coders contest by ICPC Mansoura",
      "Practiced team-based problem solving under real contest conditions",
      "Improved speed, accuracy, and communication in competitive programming",
    ],
    images: [
      { src: "/image/ach6.png", alt: "Game of Coders contest photo 1" },
      { src: "/image/ach7.png", alt: "Game of Coders contest photo 2" },
      { src: "/image/ach8.png", alt: "Game of Coders contest photo 3" },
    ],
  },
];

export default function AchievementsPage() {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen wave-layout">
      {/* Page Hero */}
      <section
        className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at top, rgba(211,218,217,0.14) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(113,90,90,0.2) 0%, transparent 60%)"
            : "radial-gradient(ellipse at top, rgba(155,15,6,0.18) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(238,217,185,0.18) 0%, transparent 60%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(211,218,217,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(113,90,90,0.06) 1px, transparent 1px)`
              : `linear-gradient(rgba(213,62,15,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,0,6,0.05) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-20 -left-10 sm:left-10 w-28 sm:w-40 h-28 sm:h-40 bg-mint/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 -right-10 sm:right-20 w-36 sm:w-56 h-36 sm:h-56 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-mint" />
            <h1
              style={{ fontFamily: "'BlueVoltage', sans-serif" }}
              className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none ${isDark ? "text-text-main" : "text-gray-900"}`}
            >
              Achievements
            </h1>
          </div>

          <p className={`font-aligarh text-2xl sm:text-3xl lg:text-4xl leading-relaxed max-w-3xl mx-auto px-2 sm:px-0 ${isDark ? "text-text-main" : "text-gray-800"}`}>
            جزء من إنجازاتي  أقل حاجة عندي. وكدا
          </p>
        </div>
      </section>

      {/* Content: description + images */}
      <section className="w-full py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {achievementSections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-start gap-12 lg:gap-16`}
              >
                <div className="w-full lg:w-2/5 lg:sticky lg:top-28 space-y-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold ${
                    isDark ? "bg-mint/10 text-mint border-mint/20" : "bg-mint/10 text-mint border-mint/25"
                  }`}>
                    <Trophy className="w-3.5 h-3.5" />
                    {section.badge}
                  </div>

                  <h2 className={`text-2xl sm:text-3xl font-extrabold leading-tight ${isDark ? "text-text-main" : "text-gray-900"}`}>
                    {section.title}
                  </h2>

                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-text-muted" : "text-gray-600"}`}>
                    {section.description}
                  </p>

                  <h3 className={`text-lg sm:text-xl font-bold leading-tight ${isDark ? "text-text-main" : "text-gray-900"}`}>
                    {section.subtitle}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-text-muted" : "text-gray-600"}`}>
                    {section.secondaryDescription}
                  </p>

                  <div className={`w-12 h-1 rounded-full ${isDark ? "bg-mint/40" : "bg-mint/60"}`} />

                  <div className="flex flex-col gap-3">
                    {section.points.map((point) => (
                      <div key={point} className="flex items-start gap-2.5">
                        <div className="mt-1 w-4 h-4 rounded-full bg-mint/15 flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-mint" />
                        </div>
                        <p className={`text-sm ${isDark ? "text-text-muted" : "text-gray-600"}`}>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-3/5 flex flex-col gap-6">
                  {section.images.map((img) => (
                    <div
                      key={img.src}
                      className={`relative rounded-2xl overflow-hidden border ${
                        isDark ? "border-white/10" : "border-gray-200 shadow-md"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
