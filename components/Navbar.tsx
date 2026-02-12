import Link from 'next/link';
import Image from 'next/image';

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
        <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.webp"
                        alt="KDM Logo"
                        width={120}
                        height={120}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-8 text-lg font-medium text-gray-700">
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
            </div>
        </nav>
    );
};
