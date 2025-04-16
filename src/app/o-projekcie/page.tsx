import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: 'url(/_next/static/media/flaga-ue-tlo.a9057970.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                O projekcie
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className=" mt-4 mb-15">
                    <p>Wartość projektu: <span className="fw-bold">726 306,48 zł</span> </p>
                    <p>Wysokość wkładu Funduszy Europejskich:<span className="fw-bold"> 617 360,50 zł</span></p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Głównym celem projektu jest kompleksowa aktywizacja zawodowa 58 osób (53
                        kobiet i 5 mężczyzn) pozostających bez pracy (bezrobotnych i biernych zawodowo),
                        powyżej 18 roku życia, zamieszkałych na obszarze woj. lubelskiego w rozumieniu
                        KC, ukierunkowana na wsparcie zrównoważonego udziału w rynku pracy, zwłaszcza
                        kobiet poprzez m.in. wsparcie doradcze, psychologiczne, szkoleniowe, stażowe, co
                        przyczyni się do zwiększenia możliwości ich zatrudnienia i poprawę ich pozycji na

                        rynku pracy (zwłaszcza kobiet i osób znajdujących się w trudnej sytuacji na rynku
                        pracy z powodu trudności godzenia życia zawodowego z obowiązkami rodzinnymi/
                        opiekuńczymi) w okresie realizacji projektu tj. od 01.07.2024 r. do 31.08.2025 r. Co
                        najmniej 65% grupy mają stanowić kobiety powracające na rynek pracy.
                        <br />
                        Dzięki udziałowi w projekcie Uczestnicy uzyskają kwalifikacje zawodowe, podniosą
                        poziom wiedzy w zakresie równości kobiet i mężczyzn, poprawią swoją sytuację na
                        rynku pracy np. poprzez podjęcie kształcenia/szkolenia, podjęcie pracy, założenie
                        własnej działalności gospodarczej lub w przypadku osób biernych zawodowo
                        rozpoczęcie poszukiwania pracy.
                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/photo-1.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <p className="display-6 mb-3">Udział w projekcie obejmuje:</p>

                        <p className="lead fs-lg">
                            Wsparcie doradcze – identyfikację potrzeb Uczestnika/czki projektu, w tym
                            m.in. poprzez diagnozowanie potrzeb szkoleniowych lub walidacyjnych,
                            możliwości doskonalenia zawodowego oraz opracowanie/aktualizację dla
                            każdego/j Uczestnika/czki projektu Indywidualnego Planu Działania (IPD)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem wsparcia jest identyfikacja potrzeb Uczestników/czek projektu, w tym
                                        m.in. poprzez diagnozowanie potrzeb szkoleniowych, możliwości
                                        doskonalenia zawodowego oraz poprzez opracowanie dla każdego/j
                                        Uczestnika/czki projektu Indywidualnego Planu Działania (IPD).
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dzięki opracowaniu IPD każdy/a z Uczestników/czek projektu otrzyma ofertę
                                        wsparcia, obejmującą takie formy pomocy, które zostaną zidentyfikowane u
                                        niej jako najbardziej przydatne i pomocne w znalezieniu zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a Uczestnik/czka projektu otrzyma śr. 3 godz. zegarowe
                                        indywidualnego wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />Wsparciem zostanie objętych 58 Uczestników/czek.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2489860569.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Wsparcie psychologiczne
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" /> Celem wsparcia jest pomoc w zaplanowaniu ścieżki rozwoju kwalifikacji
                                        zawodowych Uczestnika/czki projektu, wzrost jego/jej samooceny
                                        i wzmocnienie jego/jej motywacji do poszukiwania pracy na regionalnym rynku
                                        pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" /> Psycholog szczegółowo przeanalizuje sytuację osoby objętej wsparciem,
                                        wskazując, co należy zrobić w sferze poprawy jego/jej obecnej sytuacji
                                        zawodowej i jej zmiany na lepszą. Będzie akcentował w sposób szczególny
                                        zasadę równości kobiet i mężczyzn, aby zarówno kobiety, jak i mężczyźni
                                        zdali sobie sprawę z tego, iż mają prawo do takiego samego startu na rynku
                                        pracy, takich samych wynagrodzeń na równorzędnych stanowiskach, mogą
                                        dzielić role wychowawcze pomiędzy obydwoje rodziców, tak by zarówno
                                        kobiety, jak i mężczyźni mogli spełniać się zawodowo.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />Każdy/a Uczestnik/czka projektu otrzyma śr. 2 godz. zegarowe
                                        indywidualnego wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />Wsparciem zostanie objętych 58 Uczestników/czek.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/ludzie.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Wsparcie szkoleniowe - szkolenia zgodne z IPD
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem szkolenia jest zdobycie przez Uczestnika/czkę kwalifikacji
                                        zawodowych, co polepszy jego/jej sytuację na rynku pracy oraz zwiększy
                                        możliwość zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szkolenia oferowane Uczestnikom/czkom projektu będą zgodne ze
                                        zdiagnozowanymi potrzebami i potencjałem Uczestnika/czki projektu
                                        (określonymi w Indywidualnym Planie Działania tworzonym dla każdego
                                        osoby), a także będą uwzględniały rzeczywiste potrzeby na określone
                                        kwalifikacje i umiejętności na regionalnym lub lokalnym rynku pracy, zgodnie z
                                        publikacją Barometr zawodów województwa lubelskiego.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Średnia liczba godzin kursu wyniesie 120 godzin szkoleniowych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Nabycie kwalifikacji będzie weryfikowane poprzez przeprowadzenie egzaminu
                                        zewnętrznego przez uprawnioną instytucję.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkolenia zawodowego Uczestnikom/czkom projektu
                                        przysługuje stypendium szkoleniowe, którego wysokość miesięcznie wyniesie
                                        120% zasiłku, o którym mowa w art. 72 ust. 1 pkt 1 ustawy o promocji
                                        zatrudnienia i instytucjach rynku pracy (obowiązującego w roku złożenia przez
                                        Beneficjenta wniosku o dofinansowanie w odpowiedzi na ogłoszony konkurs),
                                        jeżeli miesięczny wymiar godzin szkolenia wynosi co najmniej 150 godzin
                                        zegarowych; w przypadku niższego miesięcznego wymiaru godzin szkolenia,
                                        wysokość stypendium szkoleniowego ustala się proporcjonalnie, z tym, że
                                        stypendium to nie może być niższe niż 20% zasiłku, o którym mowa w art. 72
                                        ust. 1 pkt 1 ustawy o promocji zatrudnienia i instytucjach rynku pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnik/czka może ubiegać się o zwrot kosztów
                                        dojazdu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 58 Uczestników/czek.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_283445021_przyciete2.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "18rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Staże zawodowe służące nabywaniu lub uzupełnianiu doświadczenia
                            zawodowego oraz praktycznych umiejętności w zakresie wykonywania
                            danego zawodu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem staży jest polepszenie umiejętności praktycznych przez
                                        Uczestników/czki projektu oraz zdobycie doświadczenia zawodowego na
                                        stanowisku związanym z tematyką odbytego szkolenia. Staże będą
                                        realizowane w zawodach zgodnych z nowymi kwalifikacjami, które nabędą
                                        Uczestnicy/czki projektu w trakcie kursów/szkoleń.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Na staż zostaną skierowane osoby, które będą zainteresowane tego typu
                                        wsparciem, a ponadto będzie to wynikało również z ich IPD.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Czas pracy Uczestnika/czki odbywającego/j staż będzie trwał 8 godzin na
                                        dobę (40 godzin tygodniowo), w przypadku osoby z niepełnosprawnością (w
                                        stopniu znacznym lub umiarkowanym) 7 godzin na dobę (35 godzin
                                        tygodniowo), każdorazowo przez okres 3 miesięcy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />Staże odbywać się będą w firmach zlokalizowanych możliwie najbliżej miejsc
                                        zamieszkania Uczestników/czek projektu, na stanowiskach w zakresie jakich
                                        Uczestnik/czka projektu zdobył/a kwalifikacje, zgodnie z ustalonym
                                        programem stażu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnikom/czkom projektu w ramach stażu zostaną zapewnione badania
                                        lekarskie, polisa ubezpieczeniowa NNW oraz stypendium stażowe, którego
                                        wysokość miesięcznie wyniesie 120% zasiłku dla bezrobotnych, zgodnie
                                        z obowiązującymi, w roku złożenia przez beneficjenta wniosku
                                        o dofinansowanie w odpowiedzi na ogłoszony konkurs stawkami w tym
                                        zakresie (psz.praca.gov.pl), jeżeli liczba godzin stażu w miesiącu
                                        kalendarzowym wyniesie nie mniej niż 160 godzin miesięcznie. W przypadku
                                        niższego miesięcznego wymiaru godzin, wysokość stypendium ustala się
                                        proporcjonalnie.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a stażysta/tka będzie zdobywał doświadczenie pod opieką Opiekuna
                                        stażysty.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnicy/czki projektu mogą ubiegać się o zwrot
                                        kosztów dojazdu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie w postaci stażu kierowane będzie do 18 Uczestników/czek.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

