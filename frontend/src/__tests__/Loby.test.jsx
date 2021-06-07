import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM, render } from '@testing-library/react'
import LobyView from '../modules/loby/LobyView'

test('Render Loby ', () => {
  const component = render(<LobyView />).container

  console.log(prettyDOM(component))

  component.getByText('Users connected')
})
