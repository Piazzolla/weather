import { useState } from 'react'
import { ClimaPage } from './pages/ClimaPage'
import './styles.css'

export function WeatherApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="WeatherApp">
      <ClimaPage />
    </div>
  )
}

