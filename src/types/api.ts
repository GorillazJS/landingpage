export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

// array
export type TechIcons = {
  title: string
  icon: {
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcons[]
}
// end of sectionTech

export type Concepts = {
  title: string
}
export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

// end od concepts

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type LandinPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
}
