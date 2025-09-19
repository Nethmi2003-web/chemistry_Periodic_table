import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';
import Input from './ui/Input';
import { Label } from './ui/Label';
import Button from './ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';
import { Badge } from './ui/Badge';
import { Separator } from './ui/Separator';
import { Calculator, Beaker, Atom, Thermometer, X, Zap, Target } from 'lucide-react';
import { 
  StoichiometryCalculator, 
  BufferCalculator, 
  TitrationCalculator, 
  KineticsCalculator, 
  ThermodynamicsCalculator, 
  SpectroscopyCalculator 
} from './AdvancedChemTools';

const ToolsWindow = ({ onClose }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto h-[600px] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Chemistry Tools
          </CardTitle>
          <CardDescription>
            Essential calculators and utilities for chemistry students
          </CardDescription>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        )}
      </CardHeader>
      
      <CardContent className="flex-1 overflow-hidden">
        <Tabs defaultValue="calculators" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="calculators">Basic</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="converters">Converters</TabsTrigger>
            <TabsTrigger value="references">References</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          
          <div className="flex-1 overflow-y-auto">
            <TabsContent value="calculators" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MolarityCalculator />
                <FormulaMassCalculator />
                <GasLawCalculator />
                <ConcentrationCalculator />
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StoichiometryCalculator />
                <BufferCalculator />
                <TitrationCalculator />
                <KineticsCalculator />
                <ThermodynamicsCalculator />
                <SpectroscopyCalculator />
              </div>
            </TabsContent>
            
            <TabsContent value="converters" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UnitConverter />
                <TemperatureConverter />
                <PressureConverter />
                <EnergyConverter />
              </div>
            </TabsContent>
            
            <TabsContent value="references" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CommonConstants />
                <CommonFormulas />
                <PeriodicTrends />
                <ElectronConfigurations />
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <EquationBalancer />
                <ElectronConfigGenerator />
                <IonChargeCalculator />
                <PHCalculator />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

function MolarityCalculator() {
  const [moles, setMoles] = useState('');
  const [volume, setVolume] = useState('');
  const [molarity, setMolarity] = useState('');

  const calculate = () => {
    const m = parseFloat(moles);
    const v = parseFloat(volume);
    if (m && v) {
      setMolarity((m / v).toFixed(4));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Beaker className="w-4 h-4" />
          Molarity Calculator
        </CardTitle>
        <CardDescription>Calculate molarity (M = mol/L)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="moles">Moles of solute</Label>
          <Input
            id="moles"
            value={moles}
            onChange={(e) => setMoles(e.target.value)}
            placeholder="Enter moles"
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="volume">Volume (L)</Label>
          <Input
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Enter volume in liters"
            type="number"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate</Button>
        {molarity && (
          <div className="p-3 bg-gray-100 rounded-lg">
            <p>Molarity: <strong>{molarity} M</strong></p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function FormulaMassCalculator() {
  const [formula, setFormula] = useState('');
  const [mass, setMass] = useState('');

  const calculate = () => {
    if (formula.toLowerCase() === 'h2o') {
      setMass('18.015');
    } else if (formula.toLowerCase() === 'nacl') {
      setMass('58.443');
    } else if (formula.toLowerCase() === 'co2') {
      setMass('44.010');
    } else {
      setMass('Enter a valid formula (H2O, NaCl, CO2)');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Formula Mass Calculator</CardTitle>
        <CardDescription>Calculate molecular/formula mass</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="formula">Chemical Formula</Label>
          <Input
            id="formula"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            placeholder="e.g., H2O, NaCl, CO2"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate</Button>
        {mass && (
          <div className="p-3 bg-gray-100 rounded-lg">
            <p>Formula Mass: <strong>{mass} g/mol</strong></p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function GasLawCalculator() {
  const [pressure, setPressure] = useState('');
  const [volume, setVolume] = useState('');
  const [temperature, setTemperature] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const p = parseFloat(pressure);
    const v = parseFloat(volume);
    const t = parseFloat(temperature);
    
    if (p && v && !t) {
      const temp = (p * v) / 0.0821;
      setResult(`Temperature: ${temp.toFixed(2)} K`);
    } else if (p && t && !v) {
      const vol = 0.0821 * t / p;
      setResult(`Volume: ${vol.toFixed(4)} L`);
    } else if (v && t && !p) {
      const pres = 0.0821 * t / v;
      setResult(`Pressure: ${pres.toFixed(4)} atm`);
    } else {
      setResult('Please leave one field empty to calculate');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ideal Gas Law Calculator</CardTitle>
        <CardDescription>PV = nRT (assuming n = 1 mol)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="pressure">Pressure (atm)</Label>
          <Input
            id="pressure"
            value={pressure}
            onChange={(e) => setPressure(e.target.value)}
            placeholder="Leave empty to calculate"
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="volume">Volume (L)</Label>
          <Input
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Leave empty to calculate"
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="temperature">Temperature (K)</Label>
          <Input
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Leave empty to calculate"
            type="number"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate</Button>
        {result && (
          <div className="p-3 bg-gray-100 rounded-lg">
            <p><strong>{result}</strong></p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ConcentrationCalculator() {
  const [mass, setMass] = useState('');
  const [volume, setVolume] = useState('');
  const [concentration, setConcentration] = useState('');

  const calculate = () => {
    const m = parseFloat(mass);
    const v = parseFloat(volume);
    if (m && v) {
      setConcentration((m / v * 1000).toFixed(2));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Concentration Calculator</CardTitle>
        <CardDescription>Calculate concentration (mg/L)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="mass">Mass (g)</Label>
          <Input
            id="mass"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            placeholder="Enter mass in grams"
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="volume">Volume (L)</Label>
          <Input
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Enter volume in liters"
            type="number"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate</Button>
        {concentration && (
          <div className="p-3 bg-gray-100 rounded-lg">
            <p>Concentration: <strong>{concentration} mg/L</strong></p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function UnitConverter() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('g');
  const [toUnit, setToUnit] = useState('kg');
  const [result, setResult] = useState('');

  const massConversions = {
    g: 1,
    kg: 0.001,
    mg: 1000,
    lb: 0.00220462,
    oz: 0.035274
  };

  const convert = () => {
    const val = parseFloat(value);
    if (val) {
      const baseValue = val / massConversions[fromUnit];
      const convertedValue = baseValue * massConversions[toUnit];
      setResult(convertedValue.toFixed(6));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unit Converter</CardTitle>
        <CardDescription>Convert between mass units</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="value">Value</Label>
          <Input
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
            type="number"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="g">Grams (g)</SelectItem>
                <SelectItem value="kg">Kilograms (kg)</SelectItem>
                <SelectItem value="mg">Milligrams (mg)</SelectItem>
                <SelectItem value="lb">Pounds (lb)</SelectItem>
                <SelectItem value="oz">Ounces (oz)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>To</Label>
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="g">Grams (g)</SelectItem>
                <SelectItem value="kg">Kilograms (kg)</SelectItem>
                <SelectItem value="mg">Milligrams (mg)</SelectItem>
                <SelectItem value="lb">Pounds (lb)</SelectItem>
                <SelectItem value="oz">Ounces (oz)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={convert} className="w-full">Convert</Button>
        {result && (
          <div className="p-3 bg-gray-100 rounded-lg">
            <p><strong>{result} {toUnit}</strong></p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const convertFromCelsius = (c) => {
    setFahrenheit((c * 9/5 + 32).toFixed(2));
    setKelvin((c + 273.15).toFixed(2));
  };

  const convertFromFahrenheit = (f) => {
    const c = (f - 32) * 5/9;
    setCelsius(c.toFixed(2));
    setKelvin((c + 273.15).toFixed(2));
  };

  const convertFromKelvin = (k) => {
    const c = k - 273.15;
    setCelsius(c.toFixed(2));
    setFahrenheit((c * 9/5 + 32).toFixed(2));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Thermometer className="w-4 h-4" />
          Temperature Converter
        </CardTitle>
        <CardDescription>Convert between temperature scales</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="celsius">Celsius (°C)</Label>
          <Input
            id="celsius"
            value={celsius}
            onChange={(e) => {
              setCelsius(e.target.value);
              const val = parseFloat(e.target.value);
              if (val !== undefined && !isNaN(val)) convertFromCelsius(val);
            }}
            placeholder="Enter temperature"
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="fahrenheit">Fahrenheit (°F)</Label>
          <Input
            id="fahrenheit"
            value={fahrenheit}
            onChange={(e) => {
              setFahrenheit(e.target.value);
              const val = parseFloat(e.target.value);
              if (val !== undefined && !isNaN(val)) convertFromFahrenheit(val);
            }}
            placeholder="Enter temperature"
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="kelvin">Kelvin (K)</Label>
          <Input
            id="kelvin"
            value={kelvin}
            onChange={(e) => {
              setKelvin(e.target.value);
              const val = parseFloat(e.target.value);
              if (val !== undefined && !isNaN(val)) convertFromKelvin(val);
            }}
            placeholder="Enter temperature"
            type="number"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function PressureConverter() {
  const [atm, setAtm] = useState('');
  const [result, setResult] = useState({});

  const convert = () => {
    const val = parseFloat(atm);
    if (val) {
      setResult({
        pa: (val * 101325).toFixed(0),
        torr: (val * 760).toFixed(2),
        psi: (val * 14.696).toFixed(2),
        bar: (val * 1.01325).toFixed(4)
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pressure Converter</CardTitle>
        <CardDescription>Convert from atmospheres</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="atm">Pressure (atm)</Label>
          <Input
            id="atm"
            value={atm}
            onChange={(e) => setAtm(e.target.value)}
            placeholder="Enter pressure in atm"
            type="number"
          />
        </div>
        <Button onClick={convert} className="w-full">Convert</Button>
        {Object.keys(result).length > 0 && (
          <div className="p-3 bg-gray-100 rounded-lg space-y-1">
            <p>Pascals (Pa): <strong>{result.pa}</strong></p>
            <p>Torr: <strong>{result.torr}</strong></p>
            <p>PSI: <strong>{result.psi}</strong></p>
            <p>Bar: <strong>{result.bar}</strong></p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function EnergyConverter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Energy Converter</CardTitle>
        <CardDescription>Convert between energy units</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-4 text-gray-500">
          Coming soon...
        </div>
      </CardContent>
    </Card>
  );
}

function CommonConstants() {
  const constants = [
    { name: "Avogadro's Number", symbol: "NA", value: "6.022 × 10²³ mol⁻¹" },
    { name: "Gas Constant", symbol: "R", value: "8.314 J/(mol·K)" },
    { name: "Planck's Constant", symbol: "h", value: "6.626 × 10⁻³⁴ J·s" },
    { name: "Speed of Light", symbol: "c", value: "2.998 × 10⁸ m/s" },
    { name: "Electron Mass", symbol: "me", value: "9.109 × 10⁻³¹ kg" },
    { name: "Proton Mass", symbol: "mp", value: "1.673 × 10⁻²⁷ kg" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Physical Constants</CardTitle>
        <CardDescription>Important chemistry constants</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {constants.map((constant, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
              <div>
                <p className="font-medium">{constant.name}</p>
                <Badge variant="secondary">{constant.symbol}</Badge>
              </div>
              <p className="font-mono text-sm">{constant.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CommonFormulas() {
  const formulas = [
    { name: "Ideal Gas Law", formula: "PV = nRT" },
    { name: "Molarity", formula: "M = mol/L" },
    { name: "Density", formula: "ρ = m/V" },
    { name: "Concentration", formula: "C = n/V" },
    { name: "pH", formula: "pH = -log[H⁺]" },
    { name: "Energy of Photon", formula: "E = hf" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Common Formulas</CardTitle>
        <CardDescription>Essential chemistry equations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {formulas.map((item, index) => (
            <div key={index} className="p-3 bg-gray-100 rounded-lg">
              <p className="font-medium">{item.name}</p>
              <p className="font-mono text-lg">{item.formula}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function PeriodicTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Periodic Trends</CardTitle>
        <CardDescription>Key patterns in the periodic table</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Atomic Radius</p>
            <p className="text-sm">Decreases across period, increases down group</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Ionization Energy</p>
            <p className="text-sm">Increases across period, decreases down group</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Electronegativity</p>
            <p className="text-sm">Increases across period, decreases down group</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Metallic Character</p>
            <p className="text-sm">Decreases across period, increases down group</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ElectronConfigurations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Electron Configuration Rules</CardTitle>
        <CardDescription>Aufbau principle and orbital filling</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Orbital Order</p>
            <p className="font-mono text-sm">1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s...</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Maximum Electrons</p>
            <p className="text-sm">s: 2, p: 6, d: 10, f: 14</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Hund's Rule</p>
            <p className="text-sm">Fill orbitals singly before pairing</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function EquationBalancer() {
  const [equation, setEquation] = useState('');
  const [balanced, setBalanced] = useState('');

  const balance = () => {
    const examples = {
      'h2 + o2 -> h2o': '2H₂ + O₂ → 2H₂O',
      'ch4 + o2 -> co2 + h2o': 'CH₄ + 2O₂ → CO₂ + 2H₂O',
      'na + cl2 -> nacl': '2Na + Cl₂ → 2NaCl'
    };

    const normalized = equation.toLowerCase().replace(/\s+/g, ' ');
    setBalanced(examples[normalized] || 'Enter a simple equation (H2 + O2 -> H2O)');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Equation Balancer</CardTitle>
        <CardDescription>Balance chemical equations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="equation">Chemical Equation</Label>
          <Input
            id="equation"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            placeholder="e.g., H2 + O2 -> H2O"
          />
        </div>
        <Button onClick={balance} className="w-full">Balance</Button>
        {balanced && (
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-mono">{balanced}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ElectronConfigGenerator() {
  const [element, setElement] = useState('');
  const [config, setConfig] = useState('');

  const generate = () => {
    const configs = {
      'h': '1s¹',
      'he': '1s²',
      'li': '1s² 2s¹',
      'be': '1s² 2s²',
      'b': '1s² 2s² 2p¹',
      'c': '1s² 2s² 2p²',
      'n': '1s² 2s² 2p³',
      'o': '1s² 2s² 2p⁴',
      'f': '1s² 2s² 2p⁵',
      'ne': '1s² 2s² 2p⁶'
    };

    const el = element.toLowerCase();
    setConfig(configs[el] || 'Element not found (try H, He, Li, etc.)');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Atom className="w-4 h-4" />
          Electron Configuration
        </CardTitle>
        <CardDescription>Generate electron configurations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="element">Element Symbol</Label>
          <Input
            id="element"
            value={element}
            onChange={(e) => setElement(e.target.value)}
            placeholder="e.g., H, He, Li, C"
          />
        </div>
        <Button onClick={generate} className="w-full">Generate</Button>
        {config && (
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-mono">{config}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function IonChargeCalculator() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ion Charge Calculator</CardTitle>
        <CardDescription>Calculate ionic charges and formulas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-4 text-gray-500">
          Coming soon...
        </div>
      </CardContent>
    </Card>
  );
}

function PHCalculator() {
  const [concentration, setConcentration] = useState('');
  const [ph, setPh] = useState('');

  const calculate = () => {
    const conc = parseFloat(concentration);
    if (conc > 0) {
      const phValue = -Math.log10(conc);
      setPh(phValue.toFixed(2));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>pH Calculator</CardTitle>
        <CardDescription>Calculate pH from H⁺ concentration</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label htmlFor="concentration">[H⁺] Concentration (M)</Label>
          <Input
            id="concentration"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
            placeholder="e.g., 0.001"
            type="number"
            step="any"
          />
        </div>
        <Button onClick={calculate} className="w-full">Calculate pH</Button>
        {ph && (
          <div className="p-3 bg-gray-100 rounded-lg">
            <p>pH: <strong>{ph}</strong></p>
            <p className="text-sm text-gray-500">
              {parseFloat(ph) < 7 ? 'Acidic' : parseFloat(ph) === 7 ? 'Neutral' : 'Basic'}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ToolsWindow;
