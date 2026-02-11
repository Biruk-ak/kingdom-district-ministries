import Link from 'next/link';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Mission', href: '/mission' },
    { name: 'Programs', href: '/programs' },
    { name: 'Global Outreach', href: '/global-outreach' },
    { name: 'Give', href: '/give' },
    { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-end items-center bg-transparent">
            <div className="flex space-x-8 text-sm font-medium text-gray-700">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="hover:text-[#1E3A8A] transition-colors duration-200"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
