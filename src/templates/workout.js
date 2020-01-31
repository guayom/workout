import React, { useState } from "react"
import Layout from "../components/layout"
import { Row } from "../components/summary"

export default ({ data }) => {
  const { markdownRemark } = data
  const { title, excercises } = markdownRemark.frontmatter
  const [excercise, setExcercise] = useState(0)
  // const [set, setSet] = useState(0)

  const Move = (excercise, amount) => {
    setExcercise(excercise + amount)
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>Excercise: {excercise + 1}</h2>
      <div>
        {excercises.map(ex => (
          <Row {...ex} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {excercise > 0 && (
            <button onClick={() => Move(excercise, -1)}>Previous</button>
          )}
        </div>
        <div>
          {excercise >= 0 && excercise < 3 && (
            <button onClick={() => Move(excercise, 1)}>Next</button>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excercises {
          title
          notes
          reps
          rest
        }
      }
    }
  }
`
