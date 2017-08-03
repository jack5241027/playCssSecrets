import React from 'react'
import { storiesOf } from '@storybook/react'
import SquareCase from './SquareCase'
import '../sass/main.scss'

storiesOf('SquareCase', module)
  .add('basic', () => (
      <SquareCase />
  ))
