import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('renders the default Vite message', () => {
    render(<App />)
    // Verifica que algún texto que viene por defecto aparezca
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })
})