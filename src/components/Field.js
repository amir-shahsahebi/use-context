import { useContext } from "react";
import languageContext from "../contexts/languageContext";

const Field = () => {
  const context = useContext(languageContext);
  const text = context === "english" ? "Name" : "Naam";
  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
};

export default Field;
