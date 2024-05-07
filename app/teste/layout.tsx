import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página de testes',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="">{children}</div>
  );
}