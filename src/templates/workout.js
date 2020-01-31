import React, { useState } from "react"
import Layout from "../components/layout"
import { Row } from "../components/summary"

export default ({ data }) => {
  const { markdownRemark } = data
  const { title, excercises } = markdownRemark.frontmatter
  // const [excercise, setExcercise] = useState(0)
  const [set, setSet] = useState(0)

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>Set: {set + 1}</h2>
      <div>
        {excercises.map(ex => <Row {...ex} />)}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}></div>
      <div></div>
      {set > 0 && <button onClick={() => setSet(set - 1)}>Previous Set</button>}
      {set >= 0 && set < 3 && (
        <button onClick={() => setSet(set + 1)}>Next Set</button>
      )}
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
