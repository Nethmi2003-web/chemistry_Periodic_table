import React from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

const Select = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contextValue = React.useMemo(
    () => ({ value, onValueChange, isOpen, setIsOpen }),
    [value, onValueChange, isOpen]
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const SelectContext = React.createContext();

const SelectTrigger = ({ className, children, ...props }) => {
  const { isOpen, setIsOpen } = React.useContext(SelectContext);

  return (
    <button
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
};

const SelectValue = ({ placeholder }) => {
  const { value } = React.useContext(SelectContext);
  return <span>{value || placeholder}</span>;
};

const SelectContent = ({ className, children, ...props }) => {
  const { isOpen } = React.useContext(SelectContext);
  
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-full z-50 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const SelectItem = ({ className, value, children, ...props }) => {
  const { onValueChange, setIsOpen } = React.useContext(SelectContext);

  return (
    <div
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100",
        className
      )}
      onClick={() => {
        onValueChange(value);
        setIsOpen(false);
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
