import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import FAQItem from './FAQItems/FAQItem';

import './FAQ.css';

const questionsAndAnswersList = [
    {
        id: uuidv4(),
        question: 'Czy muszę korzystać ze wszystkich funkcji tej aplikacji?',
        answer: 'Oczywiście, że nie. Aplikacja jest w pełni dopasowywalna do Twoich potrzeb i łatwo jest skroić ją na Twoją miarę.'
    },
    {
        id: uuidv4(),
        question: 'Czy ja lub moi Klienci muszą coś pobierać i instalować na swoich komputerach, żeby korzystać z tej aplikacji?',
        answer: 'Nie ma takiej potrzeby. Niczego nie instalujesz, niczego nie ściągasz. Wszystko, czego potrzebujesz to przeglądarka internetowa. Każda ogólnie dostępna jest dobra, np. Chrome, Firefox, Microsoft Edge.'
    },
    {
        id: uuidv4(),
        question: 'Czy to działa na telefonie? Czy wszystkie funkcje tej aplikacji są dostępne z pozycji telefonu?',
        answer: 'Oczywiście, że tak. Podobnie jak pracując na laptopie czy desktopie, wszystko, czego potrzebujesz to przeglądarka internetowa. Znów każda ogólnie dostępna jest dobra, np. Chrome, Firefox, Microsoft Edge.'
    },
    {
        id: uuidv4(),
        question: 'Potrzebuję funkcjonalności, której tutaj nie znajduję. I co teraz?',
        answer: 'Dobrze się składa, bo jesteśmy gotowi to dla Ciebie stworzyć. Jasne, że nie przewidzimy wszystkiego, czego potrzebuje Twój biznes, ale dopiszemy tę funkcję na Twoje zamówienie.'
    },
    {
        id: 'faq',
        question: 'Ile kosztuje stworzenie takiej funkcjonalności, którą potrzebuje mój biznes, a której pierwotnie w tej aplikacji nie było?',
        answer: 'Nic. Plan abonamentowy ma tę zaletę, że wszystkie aktualizacje są robione dla Ciebie bezpłatnie. I nieważne, czy pomysł na zminę wyszedł od nas, czy od Ciebie.'
    },
    {
        id: uuidv4(),
        question: 'No to ile to w ogóle kosztuje?',
        answer: 'Wszysko zależy od Twoich potrzeb i rodzaju planu abonamentowego. Standardowa umowa podpisywana jest na dwa lata. Możesz też od razu chcieć mieć umowę na czas nieokreślony. W standardowej cenie zawarte są wszystkie koszty jakie musisz ponieść, by aplikacja działała w sieci, tzn. koszty utrzymania serwerów, domeny, bazy danych, serwisu, aktualizacji czy mailing do Klientów. Możesz również chcieć prowadzić zakrojone na szeroką skalę mailowe kampanie marketingowe skierowane do swoich Klientów z pozycji tej aplikacji. A dlaczego by nie korzystać z serwisu SMS, by móc wysyłać Klientom (ale i otrzymywać) wiadomości tekstowe? A co z komunikacją przez media społecznościowe - WhatsApp i Messenger? Te i inne usługi zainstalujemy na żądanie. Skontaktuj się z nami, a pokażemy Ci, jak to działa i przedstawimy spersonalizowaną ofertę.'
    },
    {
        id: uuidv4(),
        question: 'Czy mogę zapłacić za aplikację jednorazowo, czy muszę korzystać z planu abonamentowego?',
        answer: 'Nie sprzedajemy naszej aplikacji jednorazowo. Podpisując umowę terminową lub bezterminową płacisz miesięczny abonament. Trochę tak, jak w przypadku abonamentu za telefon. W zamian otrzymujesz produkt, który podlega stałemu serwisowi i nieustannemu rozwojowi. Masz zawsze aktualną aplikację. Nawet jeśli Twoja umowa została podpisana dawno temu, masz dostęp do funkcji, których jeszcze wtedy nie wdrożyliśmy.'
    },
    {
        id: uuidv4(),
        question: 'Jak długo zajmuje wdrożenie tej aplikacji do mojego biznesu?',
        answer: 'Standardowo dajemy sobie na to trzy dni robocze. W praktyce udaje się skrócić ten czas do jednego dnia.'
    },
    {
        id: uuidv4(),
        question: 'Naprawdę mogę wypróbować ten produkt za darmo, zanim podpiszę umowę?',
        answer: 'Oczywiście - nie ma najmniejszego problemu. Podpiszemy umowę na okres próbny, w którym obniżymy Twój abonament do 0 złotych. Po tym czasie możesz przestać korzystać z aplikacji bez podawania jakichkolwiek przyczyn.'
    },
    {
        id: uuidv4(),
        question: 'Naprawdę macie odpowiedź na wszystko?',
        answer: 'Tak. No dobrze, prawie na wszystko. A jeśli czegoś tu nie znajdziesz, zadzwoń lub napisz. Będziemy szukać odpowiedzi tak długo, aż się tego dowiemy.'
    }
]

const FAQ = props => {



    const questionsAndAnswers = questionsAndAnswersList.map(faq => (
        <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            id={faq.id}
        />
    ));

    return (
        <div className='faq' name='section two'>
            {questionsAndAnswers}
        </div>
    );
}

export default FAQ;