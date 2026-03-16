import { useTheme } from "../../hooks/useTheme";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`border-t py-16 ${
        isDark ? "bg-bg-surface border-white/5" : "bg-white border-gray-200"
      }`}
    >
      <div className="w-full px-4 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <img src="/image/palestine.ico" alt="Palestine" className="footer-flag-img" />
          <p
            className={`font-aligarh footer-poem ${
              isDark ? "text-text-main" : "text-gray-800"
            }`}
          >
            وَلِلحُرِّيَةِ الحَمراءِ بابٌ &nbsp;—&nbsp; وَلِكُلِّ يَدٍ مُضَرَّجَةٍ يُدَقُّ
          </p>
          <img src="/image/palestine.ico" alt="Palestine" className="footer-flag-img" />
        </div>
      </div>
    </footer>
  );
}
