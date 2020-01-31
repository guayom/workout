import React, { useState } from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  const { markdownRemark } = data
  const { title, excercises } = markdownRemark.frontmatter
  const [set, setSet] = useState(0)

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>Set: {set + 1}</h2>
      <div>
        {excercises.map(({ title, reps }) => (
          <div>
            <div>{title}</div>
            <div>Reps: {reps[set]}</div>
          </div>
        ))}
      </div>
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
        }
      }
    }
  }
`
