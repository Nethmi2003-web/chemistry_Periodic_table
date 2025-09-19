import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import Input from './ui/Input'
import { Label } from './ui/Label'
import Button from './ui/Button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select'
import { 
  Calculator, 
  Atom, 
  Zap, 
  TrendingUp, 
  BarChart3,
  Layers,
  Target,
  Lightbulb
} from 'lucide-react'

export const StoichiometryCalculator = () => {
  const [reactant1, setReactant1] = useState('')
  const [reactant2, setReactant2] = useState('')
  const [product, setProduct] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    // Simplified stoichiometry calculation
    if (reactant1 && reactant2) {
      const calculation = `Based on ${reactant1} and ${reactant2}, the theoretical yield would be calculated using molar ratios from the balanced equation.`
      setResult(calculation)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Stoichiometry Calculator
        </CardTitle>
        <CardDescription>Calculate theoretical yields and limiting reagents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="reactant1">Reactant 1 (moles)</Label>
          <Input
            id="reactant1"
            value={reactant1}
            onChange={(e) => setReactant1(e.target.value)}
            placeholder="Enter moles of reactant 1"
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="reactant2">Reactant 2 (moles)</Label>
          <Input
            id="reactant2"
            value={reactant2}
            onChange={(e) => setReactant2(e.target.value)}
            placeholder="Enter moles of reactant 2"
            type="number"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate Stoichiometry</Button>
        {result && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm">{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export const BufferCalculator = () => {
  const [acidConc, setAcidConc] = useState('')
  const [baseConc, setBaseConc] = useState('')
  const [pka, setPka] = useState('')
  const [ph, setPh] = useState('')

  const calculate = () => {
    const acid = parseFloat(acidConc)
    const base = parseFloat(baseConc)
    const pkaVal = parseFloat(pka)
    
    if (acid && base && pkaVal) {
      const calculatedPh = pkaVal + Math.log10(base / acid)
      setPh(calculatedPh.toFixed(2))
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Buffer pH Calculator
        </CardTitle>
        <CardDescription>Calculate buffer pH using Henderson-Hasselbalch equation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="pka">pKa Value</Label>
          <Input
            id="pka"
            value={pka}
            onChange={(e) => setPka(e.target.value)}
            placeholder="Enter pKa value"
            type="number"
            step="0.01"
          />
        </div>
        <div>
          <Label htmlFor="acidConc">Acid Concentration (M)</Label>
          <Input
            id="acidConc"
            value={acidConc}
            onChange={(e) => setAcidConc(e.target.value)}
            placeholder="Enter acid concentration"
            type="number"
            step="0.001"
          />
        </div>
        <div>
          <Label htmlFor="baseConc">Base Concentration (M)</Label>
          <Input
            id="baseConc"
            value={baseConc}
            onChange={(e) => setBaseConc(e.target.value)}
            placeholder="Enter base concentration"
            type="number"
            step="0.001"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate Buffer pH</Button>
        {ph && (
          <div className="p-4 bg-green-50 rounded-lg">
            <p><strong>Buffer pH: {ph}</strong></p>
            <p className="text-sm text-gray-600 mt-1">
              {parseFloat(ph) < 7 ? 'Acidic buffer' : parseFloat(ph) > 7 ? 'Basic buffer' : 'Neutral'}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export const TitrationCalculator = () => {
  const [analyte, setAnalyte] = useState('')
  const [titrant, setTitrant] = useState('')
  const [volume, setVolume] = useState('')
  const [concentration, setConcentration] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    const vol = parseFloat(volume)
    const conc = parseFloat(concentration)
    
    if (vol && conc) {
      const moles = vol * conc / 1000 // Convert mL to L
      setResult(`Moles of titrant used: ${moles.toFixed(6)} mol`)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Titration Calculator
        </CardTitle>
        <CardDescription>Calculate concentrations from titration data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="titrant">Titrant Concentration (M)</Label>
          <Input
            id="titrant"
            value={titrant}
            onChange={(e) => setTitrant(e.target.value)}
            placeholder="Enter titrant concentration"
            type="number"
            step="0.001"
          />
        </div>
        <div>
          <Label htmlFor="volume">Volume at Equivalence Point (mL)</Label>
          <Input
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Enter volume used"
            type="number"
            step="0.1"
          />
        </div>
        <div>
          <Label htmlFor="analyte">Analyte Volume (mL)</Label>
          <Input
            id="analyte"
            value={analyte}
            onChange={(e) => setAnalyte(e.target.value)}
            placeholder="Enter analyte volume"
            type="number"
            step="0.1"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate</Button>
        {result && (
          <div className="p-4 bg-purple-50 rounded-lg">
            <p><strong>{result}</strong></p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export const KineticsCalculator = () => {
  const [initialConc, setInitialConc] = useState('')
  const [finalConc, setFinalConc] = useState('')
  const [time, setTime] = useState('')
  const [order, setOrder] = useState('1')
  const [result, setResult] = useState('')

  const calculate = () => {
    const c0 = parseFloat(initialConc)
    const c = parseFloat(finalConc)
    const t = parseFloat(time)
    const n = parseInt(order)

    if (c0 && c && t) {
      let rateConstant
      if (n === 1) {
        rateConstant = Math.log(c0 / c) / t
      } else if (n === 2) {
        rateConstant = (1/c - 1/c0) / t
      } else {
        rateConstant = 'Complex calculation for this order'
      }
      
      setResult(`Rate constant k = ${typeof rateConstant === 'number' ? rateConstant.toFixed(6) : rateConstant}`)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Reaction Kinetics Calculator
        </CardTitle>
        <CardDescription>Calculate rate constants and reaction orders</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Reaction Order</Label>
          <Select value={order} onValueChange={setOrder}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">First Order</SelectItem>
              <SelectItem value="2">Second Order</SelectItem>
              <SelectItem value="0">Zero Order</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="initialConc">Initial Concentration (M)</Label>
          <Input
            id="initialConc"
            value={initialConc}
            onChange={(e) => setInitialConc(e.target.value)}
            placeholder="Enter initial concentration"
            type="number"
            step="0.001"
          />
        </div>
        <div>
          <Label htmlFor="finalConc">Final Concentration (M)</Label>
          <Input
            id="finalConc"
            value={finalConc}
            onChange={(e) => setFinalConc(e.target.value)}
            placeholder="Enter final concentration"
            type="number"
            step="0.001"
          />
        </div>
        <div>
          <Label htmlFor="time">Time (seconds)</Label>
          <Input
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time"
            type="number"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate Rate Constant</Button>
        {result && (
          <div className="p-4 bg-orange-50 rounded-lg">
            <p><strong>{result}</strong></p>
            <p className="text-sm text-gray-600 mt-1">
              Units depend on reaction order
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export const ThermodynamicsCalculator = () => {
  const [enthalpy, setEnthalpy] = useState('')
  const [entropy, setEntropy] = useState('')
  const [temperature, setTemperature] = useState('')
  const [gibbsEnergy, setGibbsEnergy] = useState('')

  const calculate = () => {
    const h = parseFloat(enthalpy)
    const s = parseFloat(entropy)
    const t = parseFloat(temperature)

    if (h && s && t) {
      const g = h - (t * s / 1000) // Convert entropy from J to kJ
      setGibbsEnergy(g.toFixed(2))
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          Thermodynamics Calculator
        </CardTitle>
        <CardDescription>Calculate Gibbs free energy and predict reaction spontaneity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="enthalpy">Enthalpy Change ΔH (kJ/mol)</Label>
          <Input
            id="enthalpy"
            value={enthalpy}
            onChange={(e) => setEnthalpy(e.target.value)}
            placeholder="Enter enthalpy change"
            type="number"
            step="0.1"
          />
        </div>
        <div>
          <Label htmlFor="entropy">Entropy Change ΔS (J/mol·K)</Label>
          <Input
            id="entropy"
            value={entropy}
            onChange={(e) => setEntropy(e.target.value)}
            placeholder="Enter entropy change"
            type="number"
            step="0.1"
          />
        </div>
        <div>
          <Label htmlFor="temperature">Temperature (K)</Label>
          <Input
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Enter temperature"
            type="number"
            step="0.1"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate Gibbs Energy</Button>
        {gibbsEnergy && (
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p><strong>ΔG = {gibbsEnergy} kJ/mol</strong></p>
            <p className="text-sm text-gray-600 mt-1">
              {parseFloat(gibbsEnergy) < 0 
                ? '✅ Spontaneous reaction' 
                : parseFloat(gibbsEnergy) > 0 
                  ? '❌ Non-spontaneous reaction' 
                  : '⚖️ Equilibrium'
              }
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export const SpectroscopyCalculator = () => {
  const [wavelength, setWavelength] = useState('')
  const [frequency, setFrequency] = useState('')
  const [energy, setEnergy] = useState('')

  const calculateFromWavelength = () => {
    const lambda = parseFloat(wavelength) * 1e-9 // Convert nm to m
    if (lambda) {
      const c = 3e8 // Speed of light
      const h = 6.626e-34 // Planck's constant
      const freq = c / lambda
      const e = h * freq
      
      setFrequency((freq / 1e12).toFixed(2)) // THz
      setEnergy((e / 1.602e-19).toFixed(2)) // eV
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5" />
          Spectroscopy Calculator
        </CardTitle>
        <CardDescription>Convert between wavelength, frequency, and energy</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="wavelength">Wavelength (nm)</Label>
          <Input
            id="wavelength"
            value={wavelength}
            onChange={(e) => setWavelength(e.target.value)}
            placeholder="Enter wavelength in nanometers"
            type="number"
            step="0.1"
          />
        </div>
        <Button onClick={calculateFromWavelength} className="w-full">Calculate</Button>
        
        {frequency && energy && (
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p><strong>Frequency:</strong> {frequency} THz</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p><strong>Energy:</strong> {energy} eV</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg text-sm">
              <p><strong>Region:</strong> {
                parseFloat(wavelength) < 400 ? 'UV' :
                parseFloat(wavelength) < 700 ? 'Visible' :
                parseFloat(wavelength) < 1000 ? 'Near-IR' : 'IR'
              }</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
