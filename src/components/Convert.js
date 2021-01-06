import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {

  const [translated, setTranslated] = useState("");
  const [debouncedText, setDeboucedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeboucedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    }
  }, [text])

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
          }
        }
      );

      setTranslated(data.data.translations[0].translatedText)

    };

    translate();

  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">
        {translated}
      </h1>
    </div>
  )
}

export default Convert;