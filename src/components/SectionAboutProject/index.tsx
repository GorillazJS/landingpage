import React from 'react'
import DOMPurify from 'isomorphic-dompurify'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProps } from 'types/api'
import { imageUrl } from 'utils/imageUrl'

const SectionAboutProject = ({
  title,
  description,
  image
}: SectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={imageUrl(image.url)}
          alt={image.alternativeText}
          loading="lazy"
        />

        <div>
          <Heading>{title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description)
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
