import { useState } from "react";
import LanguageContext from "../contexts/languageContext";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");
  const inLanguageChange = (lang) => {
    setLanguage(lang);
  };
  return (
    <div className="ui container">
      <div>
        Select a Language:
        <i className="flag us" onClick={() => inLanguageChange("english")} />
        <i className="flag nl" onClick={() => inLanguageChange("dutch")} />
      </div>
      {/* only in UserCreate component need to context so only wrap it with context.provider*/}
      <LanguageContext.Provider value={language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
