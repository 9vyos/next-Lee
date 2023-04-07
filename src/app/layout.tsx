import Header from "./Ui/Header";
import Sidebar from "./Ui/Sidebar";
import "tailwindcss/tailwind.css";
import "./globals.css";
import "react-quill/dist/quill.snow.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Sidebar />
          <div className="app">{children}</div>
        </div>
      </body>
    </html>
  );
}
