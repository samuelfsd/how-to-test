// Não teste implementação e sim teste comportamento !!!!

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from  'vitest'
import { App } from './App'

describe('Render App', () => {
    it('should be render App component', () => {
        render(<App />)
        const headingElement = screen.getByRole('heading', {name: 'bora'});
        expect(headingElement).toBeDefined();
    })
})