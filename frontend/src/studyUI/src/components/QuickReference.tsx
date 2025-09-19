import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

const groups = [
  { number: 1, name: "Alkali Metals", elements: ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"] },
  { number: 2, name: "Alkaline Earth Metals", elements: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"] },
  { number: 17, name: "Halogens", elements: ["F", "Cl", "Br", "I", "At"] },
  { number: 18, name: "Noble Gases", elements: ["He", "Ne", "Ar", "Kr", "Xe", "Rn"] },
];

const periods = [
  { number: 1, elements: ["H", "He"] },
  { number: 2, elements: ["Li", "Be", "B", "C", "N", "O", "F", "Ne"] },
  { number: 3, elements: ["Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"] },
];

const trends = [
  {
    name: "Atomic Radius",
    description: "Decreases across a period, increases down a group",
    example: "Li > Na > K (down group 1), Li > Be > B (across period 2)"
  },
  {
    name: "Ionization Energy",
    description: "Increases across a period, decreases down a group",
    example: "He has highest, Cs has lowest"
  },
  {
    name: "Electronegativity",
    description: "Increases across a period, decreases down a group",
    example: "F is most electronegative (4.0), Cs is least (0.7)"
  },
  {
    name: "Metallic Character",
    description: "Decreases across a period, increases down a group",
    example: "Metals on left, nonmetals on right"
  }
];

export function QuickReference() {
  return (
    <Card className="p-6">
      <h3 className="mb-4">Quick Reference</h3>
      
      <Tabs defaultValue="groups" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="periods">Periods</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="groups" className="space-y-4">
          {groups.map((group) => (
            <Card key={group.number} className="p-4">
              <h4 className="mb-2">Group {group.number}: {group.name}</h4>
              <div className="flex flex-wrap gap-2">
                {group.elements.map((element) => (
                  <Badge key={element} variant="outline">
                    {element}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="periods" className="space-y-4">
          {periods.map((period) => (
            <Card key={period.number} className="p-4">
              <h4 className="mb-2">Period {period.number}</h4>
              <div className="flex flex-wrap gap-2">
                {period.elements.map((element) => (
                  <Badge key={element} variant="outline">
                    {element}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-4">
          {trends.map((trend) => (
            <Card key={trend.name} className="p-4">
              <h4 className="mb-2">{trend.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{trend.description}</p>
              <p className="text-xs text-muted-foreground">
                <strong>Example:</strong> {trend.example}
              </p>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
}