import React from 'react';
import { cn } from '../../utils/cn';

const Tabs = ({ className, defaultValue, children, ...props }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const contextValue = React.useMemo(
    () => ({ activeTab, setActiveTab }),
    [activeTab]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn("flex flex-col gap-2", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsContext = React.createContext();

const TabsList = ({ className, children, ...props }) => (
  <div
    className={cn(
      "bg-gray-100 text-gray-600 inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const TabsTrigger = ({ className, value, children, ...props }) => {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-white text-gray-900 shadow-sm"
          : "text-gray-600 hover:text-gray-900",
        className
      )}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ className, value, children, ...props }) => {
  const { activeTab } = React.useContext(TabsContext);
  
  if (activeTab !== value) return null;

  return (
    <div
      className={cn("flex-1 outline-none", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
