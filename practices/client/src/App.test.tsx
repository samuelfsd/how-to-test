// Não teste implementação e sim teste comportamento !!!!

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from  'vitest'
import { App } from './App'

describe('Render App', () => {
    it('should be render App component', () => {
        const { container } = render(<App />)

        const headingElement = screen.getByRole('heading', { name: 'Olá mundo!' })

        expect(container).toMatchSnapshot();
        expect(headingElement).toBeDefined();
    })
})