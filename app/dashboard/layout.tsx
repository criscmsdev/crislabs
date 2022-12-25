
import { UIProvider } from '@/src/context/UIContext';
import HeaderDashboard from '@/ui/tailwindCSS/header/HeaderDashboard';
import { Fragment } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <UIProvider>
      <HeaderDashboard />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </div>
      </UIProvider>
  );
}
