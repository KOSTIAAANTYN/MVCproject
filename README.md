### Tytuł projektu:
Kino-Kolekcja

### Spis treści:
1. Opis projektu
2. Funkcjonalności
3. Instrukcje obsługi
4. Kod źródłowy

### Opis projektu:
Projekt "Kino-Kolekcja" ma na celu umożliwienie użytkownikom przeglądania i zarządzania swoją kolekcją ulubionych filmów. Użytkownicy będą mogli dodawać nowe filmy, oznaczać je jako obejrzane oraz dodawać recenzje.

### Funkcjonalności:
- Dodawanie nowych filmów do kolekcji
- Oznaczanie filmów jako obejrzane
- Dodawanie recenzji filmów
- Przeglądanie listy filmów w kolekcji

### Instrukcje obsługi:
1. Sklonuj repozytorium na swój komputer.
2. Zainstaluj wymagane pakiety za pomocą komendy `npm install`.
3. Uruchom serwer za pomocą komendy `node server.js`.
4. Otwórz przeglądarkę i przejdź pod adres `http://localhost:3000`.

### Kod źródłowy:
Kod źródłowy podzielony jest na następujące części:
- Modele (`models`): Definicja modelu filmu (np. tytuł, reżyser, ocena).
- Kontrolery (`controllers`): Obsługa żądań HTTP, interakcja z modelem i przekazywanie danych do widoku.
- Widoki (`views`): Wyświetlanie listy filmów, formularz dodawania nowego filmu, formularz edycji informacji o filmie.
