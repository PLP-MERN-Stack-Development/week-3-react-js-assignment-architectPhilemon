import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="secondary"
      className="ml-2 px-2 py-1 text-sm"
      aria-label="Switch theme"
      onClick={toggleTheme}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </Button>
  );
}