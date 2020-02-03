import React from "react"
import Layout from "../components/layout"
import { ExcerciseList } from "../components/summary"
import { StoreContainer } from "../components/state/store"
import ProgressButtons from "../components/progress-buttons"
import TotalSets from "../components/total-sets"

export default ({ data }) => {
  const { markdownRemark } = data
  const { title, excercises } = markdownRemark.frontmatter

  return (
    <Layout>
      <StoreContainer.Provider initialState={excercises}>
        <h1>{title}</h1>
        <ExcerciseList />
        <TotalSets />
        <ProgressButtons />
      </StoreContainer.Provider>
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
