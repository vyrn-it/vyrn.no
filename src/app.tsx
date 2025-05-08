import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createResource, createSignal, Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import Footer from "./components/Footer";
import * as i18n from "@solid-primitives/i18n";

import { dict as en_dict } from "./i18n/en.js";

export type Locale = "en" | "no";
export type RawDictionary = typeof en_dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
  const dict: RawDictionary = (await import(`./i18n/${locale}.ts`)).dict;
  return i18n.flatten(dict);
}

export default function App() {
  const [locale, setLocale] = createSignal<Locale>("en");
  const [dict] = createResource(locale, fetchDictionary, {
    initialValue: en_dict,
  });

  dict();

  const t = i18n.translator(dict);
  return (
    <Router
      root={(props) => (
        <>
          <div class="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            <Nav />
            <div class="grow">
              <Suspense>{props.children}</Suspense>
            </div>
            <Footer />
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
