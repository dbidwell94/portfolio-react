import dotenv from "dotenv";
import path from "path";
import axios, { AxiosError } from "axios";
import enStrings from "../src/static/translation/en/strings.json";
import fs from "fs";

const jsonFileName = "strings.json";

type ITranslationStrings = keyof typeof enStrings;

(async () => {
  const dirs = await fs.promises.readdir(
    path.join(__dirname, "../src/static/translation")
  );
  dirs.forEach(async (langTo) => {
    if (langTo === "en") {
      return;
    }

    const toTranslate = Object.values(enStrings);
    const translatedObject = {} as any;
    const translations = await getTranslation(toTranslate, langTo);
    Object.keys(enStrings).forEach((key, index) => {
        translatedObject[key] = translations[index].translatedText;
    });

    fs.writeFileSync(
      path.join(__dirname, "../src/static/translation", langTo, jsonFileName),
      JSON.stringify(translatedObject, null, 4)
    );
  });
})();

dotenv.config();

interface ITranslation {
  translatedText: string;
  detectedSourceLanguage: string;
}

interface ITranslationResponse {
  data: { translations: ITranslation[] };
}

const googleApiKey = process.env.cloudApiKey;

async function getTranslation(
  stringsToTranslate: string[],
  languageTo: string
) {
  if (!googleApiKey) {
    throw new Error("Need a google cloud api key for this function to work");
  }
  const postData = { q: stringsToTranslate };
  const translationResult = await axios.post<ITranslationResponse>(
    `https://translation.googleapis.com/language/translate/v2?target=${languageTo}&key=${googleApiKey}`,
    postData
  );
  return translationResult.data.data.translations;
}
