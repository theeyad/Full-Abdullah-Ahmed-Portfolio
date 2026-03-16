import { User, MapPin, Briefcase, Zap } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const infoItems = [
  { icon: User, label: "Name", value: "Abdullah Ahmed Mohamed" },
  { icon: MapPin, label: "Location", value: "Mansoura, Egypt" },
  { icon: Briefcase, label: "Role", value: "Full Stack Developer (MERN Stack) & Desktop App Developer" },
  { icon: Zap, label: "Status", value: "Open to opportunities" },
];


export default function About() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`relative section-about-gradient ${isDark ? "section-about-gradient--dark" : "section-about-gradient--light"}`}
    >
      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-6">
            <div>
              <p className="section-label">About Me</p>
              <h2 className={`section-title ${isDark ? "" : "text-text-light-main"}`}>
                Crafting Digital Experiences<br />
                <span className="gradient-text">with Purpose</span>
              </h2>
              <div className="glow-line" />
            </div>

            <div className={`space-y-4 text-base leading-relaxed ${isDark ? "text-text-muted" : "text-gray-600"}`}>
              <p>
                Hello, I'm <span className={`font-semibold ${isDark ? "text-text-main" : "text-gray-900"}`}>Abdullah Ahmed Mohamed</span> — 
                Full Stack Developer (MERN Stack) & Desktop Application Developer.
              </p>
              <p>
                I design and develop responsive web applications that blend technology with creativity. 
                I'm passionate about crafting seamless digital experiences using modern full-stack frameworks.
              </p>
              <p>
                I'm focused on delivering innovative, scalable, and user-centric solutions that solve 
                real problems and leave a lasting impression.
              </p>
              <p>
                I also have experience in developing ERP systems and Odoo customization, 
                helping businesses streamline their operations through tailored software solutions.
              </p>
            </div>
          </div>

          {/* Right: Info + Stats */}
          <div className="space-y-8">
            {/* Info grid */}
            <div
              className={`rounded-2xl p-6 border space-y-4 ${
                isDark
                  ? "bg-bg-surface border-white/5"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-widest ${isDark ? "text-text-muted" : "text-gray-400"}`}>
                Quick Info
              </h3>
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-mint/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-mint" />
                  </div>
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-0.5 ${isDark ? "text-text-muted/60" : "text-gray-400"}`}>
                      {label}
                    </p>
                    <p className={`text-sm font-medium ${isDark ? "text-text-main" : "text-gray-800"}`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Arabic values */}
            <div className="flex flex-wrap justify-center gap-4" dir="rtl">
              {["محترم", "شاطر", "اخلاق عاليه", "بار بوالديه"].map((val) => (
                <span
                  key={val}
                  className={`font-aligarh px-6 py-3 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "border-white/15 text-text-main hover:border-mint/40 hover:text-mint bg-bg-surface"
                      : "border-gray-300 text-gray-800 hover:border-mint/50 hover:text-mint bg-white shadow-sm"
                  }`}
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
