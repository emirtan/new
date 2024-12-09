import { useTheme } from "@/providers/ThemeProvider";
import { SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className="inline-flex items-center">
      <SunIcon className="w-4 h-4 mr-2" />
      <select
        name="themeSwitch"
        value={theme}
        onChange={e => toggleTheme(e.target.value)}
        >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
