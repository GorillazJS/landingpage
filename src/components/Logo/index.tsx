import React from 'react'
import { LogoProps } from 'types/api'
import { imageUrl } from 'utils/ImageUrl'
import * as S from './styles'

const Logo = ({ alternativeText, url }: LogoProps) => (
  console.log(url),
  (<S.LogoWrapper src={imageUrl(url)} alt={alternativeText} />)
)

export default Logo
