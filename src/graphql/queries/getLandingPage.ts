import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment logo on LandinPage {
    logo {
      alternativeText
      url
    }
  }
  query GET_LANDING_PAGE {
    landinPage {
      ...logo
    }
  }
`

export default GET_LANDING_PAGE
