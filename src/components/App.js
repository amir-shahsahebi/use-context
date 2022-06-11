import { useState } from "react";
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
      <UserCreate />
    </div>
  );
};

export default App;
