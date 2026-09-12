import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToggler, { ThemeProvider } from "./components/ThemeToggler"

type Section = {
  id: string;
  label: string;
  icon: string;
}

function Navigation() {
  // const isDark = true;

  const sections: Section[] = [
    {id: 'basic', label: 'Basic Props', icon: '📦'},
    {id: 'children', label: 'Children Props', icon: '👶'},
    {id: 'complex', label: 'Complex Props', icon: '🧩'},
    {id: 'ref', label: 'Ref Props', icon: '🔗'},
    {id: 'theme', label: 'Theme Toggler', icon: '🌓'},
  ]

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div className="mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-2">
          {sections.map(section => (
            <button className={`px-4 py-2 rounded-md bg-blue-600 text-white m-2 font-normal hover:bg-blue-500 transition-all`} key={section.id}>
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navigation />
        <BasicProps />
        <ChildrenProps />
        <ComplexProps />
        <RefProps />
        <ThemeToggler />
      </ThemeProvider>
    </div>
  );
}

export default App