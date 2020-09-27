import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

import Contact from "../components/ContactUs"
import Footer from "../components/Footer"

import * as K from "../styled/Offer/styles"
import {
  wrapper,
  details,
  detail,
  desc as descClass,
} from "../styles/offer.module.css"

const description = [
  {
    id: 1,
    desc: `
      Skontaktuj się z nami, aby uzyskać spersonalizowaną ofertę lub odpowiedź na dodatekowe pytania, które Cię nurtują. Gwarantujemy,
      że nie zostawimy żadnego zapytania bez odpowiedzi. Nasza obsługa jest dostępna Twojej dyspozycji od poniedziałku do piątku 
      w godzinach  08:00 - 16:00. 
    `,
  },
  {
    id: 2,
    desc: `
      Jeżeli jesteś naszym klientem i potrzebujesz pilnego kontaktu w godzinach, gdy nasze biuro jest  zamknięte - skorzystaj
      z bezpośredniego numeru telefonu do swojego indywidualnego opiekuna.
    `,
  },
]

const createDesc = desc => ({ __html: desc })

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | kontakt" />
      <Hero />
      <K.Wrapper className={wrapper}>
        <h2>Skontaktuj się z nami</h2>
        <K.Descriptions>
          {description.map(({ id, desc }) => {
            return (
              <K.Desc
                key={id}
                dangerouslySetInnerHTML={createDesc(desc)}
                className={descClass}
              />
            )
          })}
        </K.Descriptions>
        <K.Details className={details}>
          <K.Detail className={detail}>
            <h4>Dane firmy</h4>
            <div>
              <p>Fit Kids</p>
              <p>Fit Perfect Patryk Knap</p>
              <p> Warszawska 20</p>
              <p>21-400 Łuków</p>
            </div>
            <div>
              <p>NIP: 825-218-14-07</p>
              <p>REGON: 368952592</p>
            </div>
          </K.Detail>
          <K.Detail className={detail}>
            <h4>Dane kontaktowe</h4>
            <div>
              <p>
                Telefon: <span>570 498 498</span>
              </p>
              <p>
                Mail: <span>kontakt@kidsfit.pl</span>
              </p>
            </div>
            <h4>Godziny otwarcia</h4>
            <div>
              <p>
                Pn - Pt: <strong>8:00 - 16:00</strong>
              </p>
              <p>
                Sb - N: <strong>zamknięte</strong>
              </p>
            </div>
          </K.Detail>
        </K.Details>
      </K.Wrapper>

      <Contact title="Formularz kontaktowy" fromContactPage />
      <Footer />
    </Layout>
  )
}

export default ContactPage
