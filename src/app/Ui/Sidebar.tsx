import { CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import "../globals.css";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Editor", href: "editor", icon: UsersIcon, current: false },
  { name: "Graph", href: "graph", icon: FolderIcon, current: false },
  { name: "Setting", href: "setting", icon: FolderIcon, current: false },
  { name: "Restful Api", href: "restful", icon: FolderIcon, current: false },
  { name: "GraphQL", href: "graphql", icon: FolderIcon, current: false },
  { name: "Board", href: "apple", icon: FolderIcon, current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img className="h-auto w-auto mt-5" src="/logo.png" alt="Your Company" />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    {item.name}
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
