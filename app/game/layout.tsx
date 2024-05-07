import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Armory & Machine',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-slate-900'>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow md:overflow-y-auto ">{children}</div>
    </div>
    <script src="./node_modules/flowbite/dist/flowbite.min.js"></script>
    </div>
  );
}