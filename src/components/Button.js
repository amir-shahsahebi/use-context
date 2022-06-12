// import { useContext } from "react";
import LanguageContext from "../contexts/languageContext";
const Button = () => {
  // const context = useContext(languageContext);
  // const text = context === "english" ? "Submit" : "Voorleggen";
  // return <button className="ui button primary">{text}</button>;
  return (
    <button className="ui button primary">
      <LanguageContext.Consumer>
        {(value) => (value === "english" ? "Submit" : "Voorleggen")}
      </LanguageContext.Consumer>
    </button>
  );
};

export default Button;
