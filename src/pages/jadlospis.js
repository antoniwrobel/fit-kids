import React, { Fragment } from "react"

import Layout from "./layout"

const MenuPage = ({
  data: {
    allDatoCmsMenu: { nodes: menu },
  },
}) => {
  return (
    <Layout>
      <section>
        <h1>JADŁOSPIS</h1>

        {menu.map(({ day, breakfast, dinner, tea, date }) => {
          return (
            <Fragment key={day}>
              <strong>
                {day}:{date}
              </strong>

              <ul>
                <li>śniadanie: {breakfast}</li>
                <li>obiad: {dinner}</li>
                <li>podwieczorek: {tea}</li>
              </ul>
            </Fragment>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsMenu(sort: { fields: pos, order: ASC }) {
      nodes {
        breakfast
        date(formatString: "DD-MM-YYYY")
        day
        dinner
        tea
      }
    }
  }
`

export default MenuPage
