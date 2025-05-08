import { createContext, createSignal, useContext } from "solid-js";

const I18nContext = createContext();

export const I18nProvider = (props: { children: Element }) => {
	const [locale, setLocale] = createSignal("en");

	return (
		<I18nContext.Provider value={{ locale }}>
			{props.children}
		</I18nContext.Provider>
	);
};

export const useI18n = () => useContext(I18nContext);

