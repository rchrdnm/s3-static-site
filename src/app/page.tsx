import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Cloud,
  HeadphonesIcon,
  ServerIcon,
  DatabaseIcon,
  ShieldIcon,
  GraduationCapIcon,
  BarChartIcon,
  UsersIcon,
  Globe,
} from "lucide-react"
import { NavBar } from "@/components/NavBar"
import { HeroButtons } from "@/components/HeroButtons"
import { ProjectButtons } from "@/components/ProjectButtons"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Updated for SPA feel and mobile responsiveness */}
      <NavBar />

      <main>
        {/* Hero Section */}
        <section id="home" className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold sm:text-5xl">Richard Nam</h1>
                <p className="text-xl text-gray-600">
                  Customer Support Specialist | Cloud Enthusiast | Future Cloud Developer
                </p>
                <p className="text-gray-600 max-w-[600px]">
                  Learning to build and support scalable cloud solutions with AWS.
                </p>
                <HeroButtons />
                <div className="flex gap-4 pt-2">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="mailto:contact@example.com" className="p-2 rounded-full hover:bg-gray-100">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-64 h-64 overflow-hidden rounded-full border -mt-0 md:-mt-24">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Richard Nam"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
                Aspiring AWS Cloud Support Engineer with a passion for customer service and cloud technologies.
              </p>
              <div className="mx-auto max-w-3xl space-y-4 text-left">
                <p>
                  I'm a dedicated Customer Support Specialist with a growing passion for cloud technologies,
                  particularly AWS. My background in customer support has equipped me with excellent communication
                  skills and a deep understanding of how to solve complex problems for users.
                </p>
                <p>
                  Currently, I'm on a journey to transition into cloud computing, focusing on becoming an AWS Cloud
                  Support Engineer. I'm actively learning and building projects that showcase my AWS skills and
                  demonstrate my ability to support and develop cloud solutions.
                </p>
                <p>
                  My goal is to combine my customer service expertise with technical cloud knowledge to help
                  organizations implement, maintain, and troubleshoot their cloud infrastructure. I believe my unique
                  blend of soft skills and technical abilities makes me well-suited for a role that bridges the gap
                  between users and complex cloud systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
                My professional journey and relevant experience.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-8">
              {/* Experience Item 1 */}
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                  <div>
                    <h3 className="font-bold text-xl">Customer Support Specialist</h3>
                    <p className="text-gray-600">Company Name</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Jan 2020 - Present</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p>
                    Providing exceptional technical support to customers, troubleshooting complex issues, and ensuring
                    high customer satisfaction.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Resolved an average of 50+ customer inquiries daily with a 95% satisfaction rate</li>
                    <li>
                      Developed internal knowledge base articles that reduced common ticket resolution time by 30%
                    </li>
                    <li>Collaborated with product teams to improve user experience based on customer feedback</li>
                    <li>Trained and mentored 5 new support team members</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                  <div>
                    <h3 className="font-bold text-xl">Technical Support Representative</h3>
                    <p className="text-gray-600">Previous Company</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Jun 2018 - Dec 2019</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p>
                    Provided first-line technical support for software products, assisting customers with installation,
                    configuration, and troubleshooting.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Maintained a first-call resolution rate of 75%</li>
                    <li>Recognized as "Support Rep of the Month" three times</li>
                    <li>Identified and documented software bugs, working closely with the development team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl">Skills & Expertise</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
                My technical skills and areas of expertise in cloud computing and customer support.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* AWS & Cloud Skills */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">AWS & Cloud Skills</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                      </svg>
                      <span>EC2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M22 12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8"></path>
                        <path d="M18 8v4"></path>
                        <path d="M6 8v4"></path>
                        <path d="m22 4-10 4L2 4"></path>
                        <path d="M4 2h16a2 2 0 0 1 2 2v4a10 10 0 0 1-10 4A10 10 0 0 1 2 8V4a2 2 0 0 1 2-2Z"></path>
                      </svg>
                      <span>S3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                        <line x1="6" x2="6" y1="6" y2="6"></line>
                        <line x1="6" x2="6" y1="18" y2="18"></line>
                      </svg>
                      <span>Lambda</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M22 12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8"></path>
                        <path d="M18 8v4"></path>
                        <path d="M6 8v4"></path>
                        <path d="m22 4-10 4L2 4"></path>
                        <path d="M4 2h16a2 2 0 0 1 2 2v4a10 10 0 0 1-10 4A10 10 0 0 1 2 8V4a2 2 0 0 1 2-2Z"></path>
                      </svg>
                      <span>RDS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                      <span>IAM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                      </svg>
                      <span>CloudFormation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                      <span>CloudWatch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                        <line x1="6" x2="6" y1="6" y2="6"></line>
                        <line x1="6" x2="6" y1="18" y2="18"></line>
                      </svg>
                      <span>VPC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support & Technical Skills */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Support & Technical Skills</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      </svg>
                      <span>Technical Troubleshooting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span>Customer Communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                      <span>Knowledge Base Creation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                        <line x1="6" x2="6" y1="6" y2="6"></line>
                        <line x1="6" x2="6" y1="18" y2="18"></line>
                      </svg>
                      <span>Linux/Unix</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                        <line x1="6" x2="6" y1="6" y2="6"></line>
                        <line x1="6" x2="6" y1="18" y2="18"></line>
                      </svg>
                      <span>Bash Scripting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                        <line x1="6" x2="6" y1="6" y2="6"></line>
                        <line x1="6" x2="6" y1="18" y2="18"></line>
                      </svg>
                      <span>Python</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                        <line x1="6" x2="6" y1="6" y2="6"></line>
                        <line x1="6" x2="6" y1="18" y2="18"></line>
                      </svg>
                      <span>Networking Fundamentals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                        <line x1="6" x2="6" y1="6" y2="6"></line>
                        <line x1="6" x2="6" y1="18" y2="18"></line>
                      </svg>
                      <span>CI/CD Pipelines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AWS Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Showcasing my hands-on experience with AWS services and cloud solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 lg:gap-8">
                {/* Project 1 */}
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 flex items-center justify-center bg-muted/50">
                      <div className="space-y-8">
                        <div className="flex items-center justify-center space-x-4">
                          <div className="flex flex-col items-center">
                            <Cloud className="h-16 w-16 text-primary mb-2" />
                            <span className="text-sm font-medium">S3 Bucket</span>
                            <span className="text-xs text-muted-foreground">Static Hosting</span>
                          </div>
                          <ArrowRight className="h-8 w-8" />
                          <div className="flex flex-col items-center">
                            <ServerIcon className="h-16 w-16 text-primary mb-2" />
                            <span className="text-sm font-medium">CloudFront</span>
                            <span className="text-xs text-muted-foreground">CDN Distribution</span>
                          </div>
                          <ArrowRight className="h-8 w-8" />
                          <div className="flex flex-col items-center">
                            <Globe className="h-16 w-16 text-primary mb-2" />
                            <span className="text-sm font-medium">Route 53</span>
                            <span className="text-xs text-muted-foreground">DNS Management</span>
                          </div>
                        </div>
                        <div className="text-sm text-center text-muted-foreground">
                          <p>Secure & Scalable Architecture</p>
                          <p>Global Content Delivery</p>
                          <p>Custom Domain with SSL</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-bold text-xl">Portfolio Website Infrastructure</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Built with modern web technologies and hosted on AWS
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Key Features:</h4>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                            <li>Static site hosting with S3 for reliable content storage</li>
                            <li>CloudFront CDN for fast global content delivery</li>
                            <li>Route 53 for domain management and DNS routing</li>
                            <li>SSL/TLS encryption for secure connections</li>
                            <li>Responsive design with Next.js and Tailwind CSS</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Next.js</Badge>
                          <Badge>React</Badge>
                          <Badge>Tailwind CSS</Badge>
                          <Badge>AWS S3</Badge>
                          <Badge>CloudFront</Badge>
                          <Badge>Route 53</Badge>
                        </div>
                        <ProjectButtons />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
              <Button variant="outline" asChild>
                <Link href="https://github.com/rchrdnm" target="_blank" rel="noopener noreferrer">
                  View More on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
                Interested in connecting or discussing cloud opportunities? Let's talk!
              </p>
              <div className="mx-auto grid w-full max-w-lg gap-6 mt-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Email Card - Now Clickable */}
                  <Link
                    href="mailto:contact@richardnam.dev"
                    className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-6 bg-white hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600 group-hover:scale-110 transition-transform duration-200"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <div className="space-y-1">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-gray-600">contact@richardnam.dev</p>
                    </div>
                    <span className="text-blue-600 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Send an email →
                    </span>
                  </Link>

                  {/* LinkedIn Card - Now Clickable */}
                  <Link
                    href="https://linkedin.com/in/richardnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-6 bg-white hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600 group-hover:scale-110 transition-transform duration-200"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <div className="space-y-1">
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-gray-600">linkedin.com/in/richardnam</p>
                    </div>
                    <span className="text-blue-600 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Connect on LinkedIn →
                    </span>
                  </Link>
                </div>

                {/* Optional: Add a GitHub card as well */}
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-6 bg-white hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 group-hover:scale-110 transition-transform duration-200"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <div className="space-y-1">
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-gray-600">github.com/richardnam</p>
                  </div>
                  <span className="text-blue-600 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View my projects →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-gray-600 md:text-left">
            © {new Date().getFullYear()} Richard Nam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
