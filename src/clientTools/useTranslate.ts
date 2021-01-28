import translate from "./translate";
import { useSelector } from "src/state";

export default function useTranslate() {
  const { currentLanguage } = useSelector((state) => state.localeReducer);

  return new translate(currentLanguage);
}
