"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Home,
  BookOpen,
  Info,
  MessageSquare,
  User,
  Menu,
  X,
  ChevronDown,
  Briefcase,
  BookCheck,
  Award,
  FolderGit2,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Courses", href: "/courses", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: "Career Support", href: "/career-support", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { name: "About Us", href: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
    { name: "Contact Us", href: "/contact", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
  ]

  const handleProfileOptionClick = (path: string) => {
    router.push(`/profile${path}`)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white py-3",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/01/srm-logo.svg.gzip"
              alt="SRM Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Profile Button */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-0 overflow-hidden">
                <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Profile Picture"
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-primary object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="font-bold text-gray-800">John Doe</h3>
                  <p className="text-xs text-gray-500">john.doe@example.com</p>
                </div>

                <DropdownMenuSeparator />

                <div className="p-1">
                  <DropdownMenuItem className="py-2 cursor-pointer" onClick={() => handleProfileOptionClick("")}>
                    <User className="h-4 w-4 mr-2" />
                    <span>My Profile</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="py-2 cursor-pointer"
                    onClick={() => handleProfileOptionClick("/courses")}
                  >
                    <BookCheck className="h-4 w-4 mr-2" />
                    <span>Courses Completed</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="py-2 cursor-pointer"
                    onClick={() => handleProfileOptionClick("/certificates")}
                  >
                    <Award className="h-4 w-4 mr-2" />
                    <span>Certificates</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="py-2 cursor-pointer"
                    onClick={() => handleProfileOptionClick("/projects")}
                  >
                    <FolderGit2 className="h-4 w-4 mr-2" />
                    <span>Projects</span>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="py-2 text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <Link
                href="/profile"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-4 w-4 mr-2" />
                My Profile
              </Link>
              <Link
                href="/login"
                className="px-3 py-2 rounded-md text-sm font-medium text-red-500 hover:bg-red-50 transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

