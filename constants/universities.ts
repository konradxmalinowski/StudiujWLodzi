export type UniversityField = {
  name: string;
  description: string;
};

export type University = {
  title: string;
  content: string;
  fields: UniversityField[];
  type: 'publiczna' | 'artystyczna';
};

export const UNIVERSITIES: University[] = [
  {
    title: 'Politechnika Łódzka',
    content:
      'Lider innowacji i techniki, którego absolwenci są wysoko cenieni przez pracodawców zarówno w Polsce, jak i na rynkach międzynarodowych.',
    type: 'publiczna',
    fields: [
      { name: 'Informatyka', description: 'Nowoczesne laboratoria, współpraca z firmami IT i wysokie zarobki po studiach.' },
      { name: 'Automatyka i Robotyka', description: 'Projektowanie inteligentnych systemów i robotów przyszłości.' },
      { name: 'Budownictwo', description: 'Tworzenie nowoczesnych konstrukcji i infrastruktury miejskiej.' },
      { name: 'Elektrotechnika', description: 'Zastosowanie energii elektrycznej w przemyśle, energetyce i nowoczesnych technologiach.' },
      { name: 'Inżynieria Materiałowa', description: 'Badanie i projektowanie nowych materiałów dla przemysłu i medycyny.' },
      { name: 'Transport', description: 'Projektowanie systemów transportowych i zarządzanie logistyką.' },
      { name: 'Architektura', description: 'Kształtowanie przestrzeni miejskiej i projektowanie nowoczesnych budynków.' },
      { name: 'Mechatronika', description: 'Integracja mechaniki, elektroniki i informatyki w nowoczesnych urządzeniach.' },
      { name: 'Energetyka', description: 'Pozyskiwanie i zarządzanie energią w sposób zrównoważony.' },
      { name: 'Inżynieria Biomedyczna', description: 'Technologie wspierające medycynę i rehabilitację.' },
    ],
  },
  {
    title: 'Uniwersytet Łódzki',
    content:
      'Kształci 32 tys. studentów na 104 kierunkach, z programami wymiany w 28 krajach Europy, zapewniającymi globalne doświadczenie.',
    type: 'publiczna',
    fields: [
      { name: 'Prawo', description: 'Prestiżowy kierunek otwierający drzwi do kariery w sądownictwie i biznesie.' },
      { name: 'Ekonomia', description: 'Analiza rynków finansowych i strategii gospodarczych w globalnym świecie.' },
      { name: 'Psychologia', description: 'Zrozumienie ludzkiego umysłu i zachowań w teorii i praktyce klinicznej.' },
      { name: 'Filologia Angielska', description: 'Zaawansowana znajomość języka angielskiego i kultury krajów anglojęzycznych.' },
      { name: 'Zarządzanie', description: 'Nowoczesne metody kierowania zespołami i przedsiębiorstwami.' },
      { name: 'Informatyka', description: 'Programowanie, analiza danych i technologie informacyjne w biznesie.' },
      { name: 'Finanse i Rachunkowość', description: 'Zarządzanie finansami przedsiębiorstw i analiza ekonomiczna.' },
      { name: 'Dziennikarstwo i Komunikacja Społeczna', description: 'Media, PR i nowoczesne formy komunikacji.' },
      { name: 'Socjologia', description: 'Badanie społeczeństwa, jego struktur i współczesnych zjawisk społecznych.' },
      { name: 'Biotechnologia', description: 'Zastosowanie nauk biologicznych i chemicznych w medycynie i przemyśle.' },
    ],
  },
  {
    title: 'Uniwersytet Medyczny',
    content:
      'Instytucja wyróżnia się nowoczesnymi laboratoriami i jako jedyna w Polsce prowadzi kształcenie lekarzy wojskowych, co świadczy o jej wyjątkowości i prestiżu.',
    type: 'publiczna',
    fields: [
      { name: 'Kierunek Lekarski', description: 'Elitarny program kształcący przyszłych lekarzy i specjalistów.' },
      { name: 'Farmacja', description: 'Badania nad nowymi lekami i ich wpływem na zdrowie człowieka.' },
      { name: 'Kosmetologia', description: 'Połączenie wiedzy medycznej z nowoczesnymi technologiami w dziedzinie urody.' },
      { name: 'Pielęgniarstwo', description: 'Opieka nad pacjentem i współpraca z zespołem medycznym.' },
      { name: 'Dietetyka', description: 'Zasady zdrowego odżywiania i profilaktyki chorób dietozależnych.' },
      { name: 'Fizjoterapia', description: 'Rehabilitacja i przywracanie sprawności ruchowej pacjentów.' },
      { name: 'Analityka Medyczna', description: 'Diagnostyka laboratoryjna i analiza biologiczna próbek.' },
      { name: 'Zdrowie Publiczne', description: 'Zarządzanie systemem ochrony zdrowia i profilaktyką chorób.' },
      { name: 'Położnictwo', description: 'Profesjonalna opieka nad kobietami w ciąży i noworodkami.' },
    ],
  },
  {
    title: 'Akademie Artystyczne',
    content:
      'Akademia Sztuk Pięknych i Akademia Muzyczna stanowią centra kreatywności, aktywnie angażujące się w międzynarodowe projekty i organizujące prestiżowe wydarzenia artystyczne.',
    type: 'artystyczna',
    fields: [
      { name: 'Wzornictwo', description: 'Kreatywne projekty, międzynarodowe warsztaty i możliwość tworzenia dla znanych marek.' },
      { name: 'Malarstwo', description: 'Rozwijanie własnego stylu artystycznego pod okiem wybitnych twórców.' },
      { name: 'Fotografia', description: 'Sztuka opowiadania historii za pomocą obrazu, od technik analogowych po cyfrowe.' },
      { name: 'Grafika', description: 'Projektowanie graficzne, ilustracja i sztuka cyfrowa.' },
      { name: 'Architektura Wnętrz', description: 'Projektowanie funkcjonalnych i estetycznych przestrzeni użytkowych.' },
      { name: 'Rzeźba', description: 'Tworzenie form przestrzennych z wykorzystaniem różnorodnych materiałów.' },
      { name: 'Muzyka', description: 'Kształcenie w zakresie kompozycji, wykonawstwa i teorii muzyki.' },
      { name: 'Dyrygentura', description: 'Przygotowanie do prowadzenia zespołów muzycznych i orkiestr.' },
      { name: 'Instrumentalistyka', description: 'Indywidualne doskonalenie gry na instrumentach klasycznych.' },
    ],
  },
];
