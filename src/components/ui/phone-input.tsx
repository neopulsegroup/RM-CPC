import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

export const COUNTRY_CODES = [
  { code: 'PT', name: 'Portugal', dial_code: '+351', flag: '🇵🇹' },
  { code: 'BR', name: 'Brasil', dial_code: '+55', flag: '🇧🇷' },
  { code: 'AO', name: 'Angola', dial_code: '+244', flag: '🇦🇴' },
  { code: 'MZ', name: 'Moçambique', dial_code: '+258', flag: '🇲🇿' },
  { code: 'CV', name: 'Cabo Verde', dial_code: '+238', flag: '🇨🇻' },
  { code: 'GW', name: 'Guiné-Bissau', dial_code: '+245', flag: '🇬🇼' },
  { code: 'ST', name: 'São Tomé e Príncipe', dial_code: '+239', flag: '🇸🇹' },
  { code: 'TL', name: 'Timor-Leste', dial_code: '+670', flag: '🇹🇱' },
  { code: 'UA', name: 'Ucrânia', dial_code: '+380', flag: '🇺🇦' },
  { code: 'IN', name: 'Índia', dial_code: '+91', flag: '🇮🇳' },
  { code: 'FR', name: 'França', dial_code: '+33', flag: '🇫🇷' },
  { code: 'GB', name: 'Reino Unido', dial_code: '+44', flag: '🇬🇧' },
  { code: 'ES', name: 'Espanha', dial_code: '+34', flag: '🇪🇸' },
  { code: 'US', name: 'EUA', dial_code: '+1', flag: '🇺🇸' },
];

interface PhoneInputProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function PhoneInput({ value = '', onChange, placeholder, className }: PhoneInputProps) {
  const [open, setOpen] = React.useState(false)
  
  // Helper to find country from full phone string
  const findCountryFromValue = (val: string) => {
    if (!val) return COUNTRY_CODES[0]; // Default: Portugal
    // Try to match dial codes, sorted by length descending to match longest prefix first
    // (though our list is small, +1 vs +123 matters)
    const sortedCodes = [...COUNTRY_CODES].sort((a, b) => b.dial_code.length - a.dial_code.length);
    const country = sortedCodes.find(c => val.startsWith(c.dial_code));
    return country || COUNTRY_CODES[0];
  };

  const [selectedCountry, setSelectedCountry] = React.useState(() => findCountryFromValue(value));

  // Sync selected country if external value changes drastically (e.g. initial load)
  React.useEffect(() => {
    const derivedCountry = findCountryFromValue(value);
    // Only update if the current selected country doesn't match the value's prefix anymore
    // This prevents jitter while typing if user types something that temporarily doesn't match
    if (!value.startsWith(selectedCountry.dial_code)) {
       setSelectedCountry(derivedCountry);
    }
  }, [value, selectedCountry.dial_code]);

  const getPhoneNumber = () => {
    if (!value) return '';
    const prefix = selectedCountry.dial_code;
    if (value.startsWith(prefix)) {
      return value.slice(prefix.length).trim();
    }
    return value;
  };

  const handleCountrySelect = (country: typeof COUNTRY_CODES[0]) => {
    const currentNumber = getPhoneNumber();
    setSelectedCountry(country);
    setOpen(false);
    onChange(`${country.dial_code} ${currentNumber}`);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    // Allow only numbers and spaces/dashes if desired, but for now just raw input
    // Maybe strip non-numeric except space/dash?
    // Let's keep it simple as text for now to match user expectation of free input
    onChange(`${selectedCountry.dial_code} ${newNumber}`);
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[140px] justify-between px-3 shrink-0"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="text-lg">{selectedCountry.flag}</span>
              <span className="text-muted-foreground">{selectedCountry.dial_code}</span>
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Procurar país..." />
            <CommandList>
              <CommandEmpty>Nenhum país encontrado.</CommandEmpty>
              <CommandGroup>
                {COUNTRY_CODES.map((country) => (
                  <CommandItem
                    key={country.code}
                    value={`${country.name} ${country.dial_code}`}
                    onSelect={() => handleCountrySelect(country)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCountry.code === country.code ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span className="mr-2 text-lg">{country.flag}</span>
                    <span className="font-medium flex-1">{country.name}</span>
                    <span className="text-muted-foreground ml-2">{country.dial_code}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Input
        type="tel"
        placeholder={placeholder || "912 345 678"}
        value={getPhoneNumber()}
        onChange={handlePhoneChange}
        className="flex-1"
      />
    </div>
  )
}
