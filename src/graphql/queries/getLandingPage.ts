import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment logo on LandinPage {
    logo {
      alternativeText
      url
    }
  }
  fragment header on LandinPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionAboutProject on LandinPage {
    sectionAboutProject {
      title
      description
      image {
        url
        alternativeText
      }
    }
  }
  fragment sectionTech on LandinPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }

  fragment sectionConcepts on LandinPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandinPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landinPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
    }
  }
`

export default GET_LANDING_PAGE
