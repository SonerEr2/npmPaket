import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import Divider  from '../components/Divider'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Divider />)
  })
})