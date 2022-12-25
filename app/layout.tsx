import { ReactQueryProvider } from '@/src/context/ReactQueryContext';
import { UIProvider } from '@/src/context/UIContext';
import '@/styles/dist.css';
// import '@/styles/globals.css';
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
      
      </head>
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
