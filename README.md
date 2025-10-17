# 🎓 Studiuj w Łodzi - Twój niezbędnik studenta

Witaj w **Studiuj w Łodzi**, aplikacji mobilnej stworzonej z myślą o każdym studencie w Łodzi! 🇵🇱 Aplikacja ta ma być Twoim głównym źródłem informacji i pomocy w nawigacji po studenckim życiu, od spraw akademickich po aktywności towarzyskie.

![App Screenshot](https://placehold.co/600x400/png?text=Studiuj+w+Łodzi)

## 📜 Spis treści

- [O Projekcie](#-o-projekcie)
- [Funkcjonalności](#-funkcjonalności)
- [Stos technologiczny](#-stos-technologiczny)
- [Struktura Projektu](#-struktura-projektu)
- [Pierwsze kroki](#-pierwsze-kroki)
- [Dostępne skrypty](#-dostępne-skrypty)
- [Kontrybucje](#-kontrybucje)
- [Licencja](#-licencja)

## 🌟 O Projekcie

Celem aplikacji "Studiuj w Łodzi" jest zebranie w jednym miejscu wszystkich kluczowych informacji potrzebnych studentom. Od wyboru uczelni, przez codzienne życie w mieście, aż po kwestie finansowe i możliwości rozwoju.

## ✨ Funkcjonalności

- 🏠 **Ekran główny:** Twoje centrum dowodzenia, zapewniające szybki dostęp do wszystkich funkcji aplikacji.
- 📖 **Przewodnik po uczelniach:** Kompleksowy przewodnik po uczelniach w Łodzi.
- 🏙️ **O Łodzi:** Odkryj miasto, jego atrakcje i dowiedz się, dlaczego jest to świetne miejsce do studiowania.
- 💰 **Stypendia i życie studenckie:** Znajdź informacje o dostępnych stypendiach i poznaj tajniki życia studenckiego.
- 💸 **Kalkulator kosztów życia:** Oszacuj swoje miesięczne wydatki dzięki naszemu poręcznemu kalkulatorowi.
- 🏷️ **Zniżki studenckie:** Baza miejsc, w których możesz uzyskać zniżki studenckie.

## 🚀 Stos technologiczny

Projekt został zbudowany przy użyciu nowoczesnych technologii, aby zapewnić jak najlepsze wrażenia z użytkowania:

- **Framework:** [React Native](https://reactnative.dev/) & [Expo](https://expo.dev/)
- **Język:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [Expo Router](https://expo.github.io/router/)
- **Nawigacja:** [React Navigation](https://reactnavigation.org/)
- **Animacje:** [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Ikony:** [Lucide React Native](https://lucide.dev/) & [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- **Stylowanie:** StyleSheet, Expo Linear Gradient
- **Linting:** [ESLint](https://eslint.org/)

## 📂 Struktura Projektu

Projekt ma przejrzystą i skalowalną strukturę folderów, która ułatwia rozwój i konserwację:

```
StudiujWLodzi/
├── app/                # Główna logika aplikacji i routing (oparty na plikach)
│   ├── (tabs)/         # Ekrany dostępne w dolnym pasku nawigacji
│   │   ├── index.tsx   # Ekran główny
│   │   ├── study.tsx   # Przewodnik po uczelniach
│   │   ├── lodz.tsx    # Informacje o Łodzi
│   │   ├── scholarship.tsx # Stypendia i życie studenckie
│   │   ├── costs.tsx   # Kalkulator kosztów
│   │   └── discounts.tsx # Zniżki studenckie
│   └── _layout.tsx     # Główny layout aplikacji
├── assets/             # Obrazy, czcionki i inne zasoby statyczne
├── components/         # Komponenty UI wielokrotnego użytku
├── constants/          # Stałe wartości (np. motywy, dane uczelni)
├── hooks/              # Niestandardowe hooki Reacta
└── ...                 # Pliki konfiguracyjne
```

## 🏁 Pierwsze kroki

Aby uruchomić lokalną kopię projektu, postępuj zgodnie z poniższymi krokami.

### Wymagania

Upewnij się, że masz zainstalowane [Node.js](https://nodejs.org/) (wersja LTS) i [npm](https://www.npmjs.com/) na swoim komputerze.

### Instalacja

1.  Sklonuj repozytorium (jeśli jeszcze tego nie zrobiłeś):
    ```sh
    git clone https://github.com/twoja-nazwa-uzytkownika/StudiujWLodzi.git
    cd StudiujWLodzi
    ```
2.  Zainstaluj wszystkie zależności projektu:
    ```sh
    npm install
    ```

### Uruchamianie aplikacji

Po zainstalowaniu zależności możesz uruchomić aplikację:

```sh
npm start
```

Spowoduje to otwarcie narzędzi deweloperskich Expo w przeglądarce. Następnie możesz uruchomić aplikację na:

- Emulatorze lub urządzeniu z systemem Android (wymaga Android Studio)
- Symulatorze lub urządzeniu z systemem iOS (wymaga Xcode na macOS)
- W przeglądarce internetowej

## 📜 Dostępne skrypty

W projekcie dostępne są następujące skrypty:

- `npm start`: Uruchamia serwer deweloperski Expo.
- `npm run android`: Uruchamia aplikację na emulatorze/urządzeniu Android.
- `npm run ios`: Uruchamia aplikację na symulatorze/urządzeniu iOS.
- `npm run web`: Uruchamia aplikację w przeglądarce internetowej.
- `npm run lint`: Uruchamia lintera ESLint w celu znalezienia i naprawienia problemów w kodzie.
- `npm run reset-project`: Resetuje stan projektu (skrypt niestandardowy).
