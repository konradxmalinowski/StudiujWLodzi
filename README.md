# 🎓 Studiuj w Łodzi - Twój niezbędnik studenta

Witaj w **Studiuj w Łodzi**, aplikacji mobilnej stworzonej z myślą o każdym studencie w Łodzi! 🇵🇱 Aplikacja ta ma być Twoim głównym źródłem informacji i pomocy w nawigacji po studenckim życiu, od spraw akademickich po aktywności towarzyskie.

![App Screenshot](https://placehold.co/600x400/png?text=App+Screenshot)

## ✨ Funkcjonalności

Nasza aplikacja jest wyposażona w funkcje, które ułatwią i uprzyjemnią Ci życie studenckie:

- 🏠 **Ekran główny:** Twoje centrum dowodzenia, zapewniające szybki dostęp do wszystkich funkcji aplikacji.
- 📖 **Przewodnik po uczelniach:** Kompleksowy przewodnik po uczelniach w Łodzi.
- 🏙️ **O Łodzi:** Odkryj miasto, jego atrakcje i dowiedz się, dlaczego jest to świetne miejsce do studiowania.
- 💰 **Stypendia i życie studenckie:** Znajdź informacje o dostępnych stypendiach i poznaj tajniki życia studenckiego, w tym imprezy i wydarzenia.
- 💸 **Kalkulator kosztów życia:** Oszacuj swoje miesięczne wydatki dzięki naszemu poręcznemu kalkulatorowi.
- 🏷️ **Zniżki studenckie:** Lista miejsc, w których możesz uzyskać zniżki studenckie.

## 📂 Struktura Projektu

Projekt ma przejrzystą i skalowalną strukturę folderów, która ułatwia rozwój i konserwację:

```
StudiujWLodzi/
├── app/                # Główna logika aplikacji i routing
│   ├── (tabs)/         # Definicje ekranów poszczególnych zakładek
│   └── _layout.tsx     # Główny layout aplikacji
├── assets/             # Obrazy, czcionki i inne zasoby statyczne
├── components/         # Komponenty UI wielokrotnego użytku
├── constants/          # Stałe wartości (np. kolory, dane uczelni)
├── hooks/              # Niestandardowe hooki Reacta
├── scripts/            # Skrypty pomocnicze
└── ...                 # Pliki konfiguracyyjne (package.json, tsconfig.json, etc.)
```

## 🚀 Stos technologiczny

Projekt został zbudowany przy użyciu najnowszych technologii, aby zapewnić nowoczesne i płynne działanie:

- **React Native:** Do budowy wieloplatformowej aplikacji mobilnej.
- **Expo:** Do usprawnienia procesu deweloperskiego.
- **TypeScript:** Dla bezpieczeństwa typów w JavaScript.
- **React Navigation:** Do obsługi routingu i nawigacji.
- **Reanimated:** Do tworzenia płynnych animacji.
- **I wiele innych...**

## 🏁 Pierwsze kroki

Aby uruchomić lokalną kopię projektu, postępuj zgodnie z poniższymi krokami.

### Wymagania

Upewnij się, że masz zainstalowane [Node.js](https://nodejs.org/) i [npm](https://www.npmjs.com/) na swoim komputerze.

### Instalacja

1. Sklonuj repozytorium
   ```sh
   git clone https://github.com/your_username/StudiujWLodzi.git
   ```
2. Zainstaluj pakiety NPM
   ```sh
   npm install
   ```

### Uruchamianie aplikacji

Uruchom serwer deweloperski za pomocą:

```sh
npm start
```

Spowoduje to otwarcie narzędzi deweloperskich Expo w przeglądarce. Następnie możesz uruchomić aplikację na:

- Emulatorze lub urządzeniu z systemem Android
- Symulatorze lub urządzeniu z systemem iOS
- W przeglądarce internetowej

## 🤝 Kontrybucje

Kontrybucje sprawiają, że społeczność open source jest tak niesamowitym miejscem do nauki, inspiracji i tworzenia. Wszelkie kontrybucje, które wniesiesz, są **bardzo mile widziane**.

Jeśli masz sugestię, która mogłaby ulepszyć ten projekt, prosimy o utworzenie forka repozytorium i stworzenie pull requesta. Możesz również po prostu otworzyć zgłoszenie z tagiem "enhancement".

Nie zapomnij dać projektowi gwiazdki! Dzięki jeszcze raz! ⭐

1. Utwórz fork projektu
2. Stwórz swoją gałąź funkcji (`git checkout -b feature/AmazingFeature`)
3. Zatwierdź swoje zmiany (`git commit -m 'Add some AmazingFeature'`)
4. Wypchnij zmiany do gałęzi (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

Dystrybuowane na podstawie licencji MIT. Zobacz `LICENSE`, aby uzyskać więcej informacji.
