import React from 'react'
import { useState } from 'react'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'

import { SectionModulesProps } from 'types/api'

const SectionModules = ({ title, modules }: SectionModulesProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Heading reverseColor>{title}</Heading>
      <AnimateSharedLayout>
        <motion.div layout initial={{ borderRadius: 0 }}>
          <motion.div
            layout
            onClick={toggleOpen}
            initial={{ borderRadius: 0, cursor: 'pointer' }}
          >
            <S.Content>
              {modules.map(({ title, subtitle, description }, index) => (
                <CardModule key={index} title={title} subTitle={subtitle}>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    )}
                  </AnimatePresence>
                </CardModule>
              ))}
            </S.Content>
          </motion.div>
        </motion.div>
      </AnimateSharedLayout>
    </Container>
  )
}

export default SectionModules
