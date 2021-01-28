import React from "react";
import styled from "components/shared/globalTheme";
import { useSelector, useDispatch } from "src/state";
import { ITranslationKeys } from "client-tools/translate";
import { setLanguage } from "src/state/localeReducer/localeActions";
import useTranslate from "client-tools/useTranslate";

interface IFooterProps {
  navbarHeight: number;
}

const languages: Record<ITranslationKeys, string> = {
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
  ko: "Korean",
  ru: "Russian",
  zh: "Chinese",
};

const Container = styled.footer<IFooterProps>`
  height: ${({ navbarHeight }) => navbarHeight}rem;
  background: ${({ theme }) => theme.navbar.background};
  color: ${({ theme }) => theme.navbar.textColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0rem 2rem;
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      font-size: 1.75rem;
      margin: 0rem 1rem;
    }
  }
`;

export default function () {
  const { navbarHeight } = useSelector((state) => state.themeReducer);
  const { currentLanguage } = useSelector((state) => state.localeReducer);

  const translate = useTranslate();

  const dispatch = useDispatch();

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    const { value } = event.target;
    const languageId = (Object.keys(languages).find(
      (key) => languages[(key as any) as ITranslationKeys] === value
    ) as any) as ITranslationKeys;
    if (languageId) {
      dispatch(setLanguage(languageId));
    }
  }

  return (
    <Container navbarHeight={navbarHeight}>
      <p>&copy;2021 Devin Bidwell</p>
      <section className="links">
        <label htmlFor="languages">{translate.get('options.language')}</label>
        <select
          name="languages"
          id="languages"
          defaultValue={languages[currentLanguage]}
          onChange={handleLanguageChange}
        >
          {Object.keys(languages).map((language) => {
            return (
              <option key={language}>
                {languages[(language as any) as ITranslationKeys]}
              </option>
            );
          })}
        </select>
      </section>
    </Container>
  );
}
