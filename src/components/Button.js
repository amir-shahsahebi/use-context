import { useContext } from "react";
import languageContext from "../contexts/languageContext";
const Button = () => {
  const context = useContext(languageContext);
  const text = context === "english" ? "Submit" : "Voorleggen";
  return <button className="ui button primary">{text}</button>;
};

export default Button;
