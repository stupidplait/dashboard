'use client';

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

interface LinkInfo {
    name: string,
    href: string,
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & RefAttributes<SVGSVGElement>>,
};

const links: LinkInfo[] = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon, },
    { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon, },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon, },
];

export default function NavLinks() {
    const activePath = usePathname();

    return (
        <>
            {
                links.map(({ name, href, icon: Icon }) => (
                    <Link
                        key={name}
                        href={href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            { 'bg-sky-100 text-blue-600': activePath === href }
                        )}
                    >
                        <Icon className="w-6 transition" />
                        <p className="hidden transition md:block">{name}</p>
                    </Link>
                ))
            }
        </>
    );
};