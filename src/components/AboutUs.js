import React from "react"

import * as A from "../styled/AboutUs/styles"

const PINK = "pink"
const GREEN = "green"
const YELLOW = "yellow"
const BLUE = "blue"

const articles = [
  {
    id: 1,
    title: "",
    description: `Zamujemy się profesjonalnym żywieniem dzieci zarówno
  w wieku przedszkolnym jak i szkolnym. Swoją ofertę kierujemy
  do prywatnych oraz państwowych placówek oświatowych.
  Wszystkie wydawne przez nas posiłki przygotowane są według
  <span style="color:${PINK};">wewnętrznych, rygorystycznych standardów,</span> co pozwala
  nieprzerwanie zachować ich <span style="color:${GREEN};>najwyższą jakość oraz świeżość.</span>
  Jesteśmy w stanie przygotować posiłki dla alergików - <span style="color:${PINK};>do każdej 
  obsługiwanej placówki podchodzimy indywidualnie.</span> Posiłki 
  dostarczamy w specjalnie przeznaczonych do tego bemarach 
  termicznych, według ustalonego z kierownictwem placówki 
  harmonogramu. 
  <br/>
  <br/>
  Oprócz codziennego żywienia przedszkolaków i uczniów,
  zajmujemy się również organizacją imprez  dla najmłodszych
  - szczególnie ich cateringową częścią. 
  `,
  },
  {
    id: 2,
    title: "Nasza oferta",
    description: `Nasza oferta obejmuje dwa pakiety żywienia dostarczane
    codziennie do placówek oświatowych. Naszym klientom dajemy
    do wyboru pakiet dwu lub trzy posiłkowy. <span style="color:${YELLOW};">W przypadku pakietu
    3-posiłkowego dodajemy do zamówień gratisowe napoje dla
    każdego dziecka.</span>
    <br/>
  <br/>
    Szczegółowe warunki oferty, takie jak preferowane jadłospsy,
    harmonogramy dostaw, wykluczenia produktów oraz listę
    alergenów - uzgadniami indywidualnie z kierownictwem
    danej placówki. <span style="color:${BLUE};">Jesteśmy elastyczni i otwarci na propozycję,
    staramy się ograniczyć liczbę mogących pojawić się podczas
    współpracy problemów do minimum.</span> Zapoznaj się z naszą ofertą
    lub skontaktuj się z nami aby poznać szczegóły.`,
  },
]

const createDesc = desc => ({ __html: desc })

const AboutUs = () => {
  return (
    <A.Wrapper>
      <A.Header>Fit Kids - catering dla dzieci</A.Header>
      <A.Articles>
        {articles.map(({ id, title, description }, index) => {
          return (
            <A.Article key={id}>
              {title && <A.HeaderSmall>{title}</A.HeaderSmall>}
              <A.Description
                dangerouslySetInnerHTML={createDesc(description)}
              />
            </A.Article>
          )
        })}
      </A.Articles>
    </A.Wrapper>
  )
}

export default AboutUs
