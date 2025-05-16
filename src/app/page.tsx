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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Richard Nam</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-end">
            <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Experience
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Skills
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Richard Nam</h1>
                  <p className="text-xl text-muted-foreground">
                    Customer Support Specialist | Cloud Enthusiast | Future Cloud Developer
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
                    Learning to build and support scalable cloud solutions with AWS.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#projects">
                      View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/rchrdnm" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/richardnam93" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:contact@example.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border">
                  <Image
                    src="/images/profile_picture.jpg?height=600&width=600"
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
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Aspiring AWS Cloud Support Engineer with a passion for customer service and cloud technologies.
                </p>
              </div>
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
                  organisations implement, maintain, and troubleshoot their cloud infrastructure. I believe my unique
                  blend of soft skills and technical abilities makes me well-suited for a role that bridges the gap
                  between users and complex cloud systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  My professional journey and relevant experience.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl space-y-8">
                {/* Experience Item 1 */}
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                    <div>
                      <h3 className="font-bold text-xl">Customer Support Specialist</h3>
                      <p className="text-muted-foreground">HiBob</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>May 2025 - Present</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p>
                      Providing exceptional support to customers, troubleshooting complex issues, and ensuring
                      high customer satisfaction.
                    </p>
                    {/* <ul className="list-disc pl-5 space-y-1">
                      <li>Resolved an average of 50+ customer inquiries daily with a 95% satisfaction rate</li>
                      <li>
                        Developed internal knowledge base articles that reduced common ticket resolution time by 30%
                      </li>
                      <li>Collaborated with product teams to improve user experience based on customer feedback</li>
                      <li>Trained and mentored 5 new support team members</li>
                    </ul> */}
                  </div>
                </div>

                {/* Experience Item 2 */}
                <div className="rounded-lg border p-6">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                    <div>
                      <h3 className="font-bold text-xl">Mechant Support Specialist</h3>
                      <p className="text-muted-foreground">Auctane (ShipStation and ShipEngine)</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Oct 2022 - Apr 2025</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p>
                      Provided first-line technical support for eCommerce based SaaS products, assisting customers with
                      integration, configuration, and troubleshooting.
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
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  My technical skills and areas of expertise in cloud computing and customer support.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                {/* AWS & Cloud Skills */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">AWS & Cloud Skills</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex items-center gap-2">
                          <Cloud className="h-5 w-5 text-primary" />
                          <span>EC2</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DatabaseIcon className="h-5 w-5 text-primary" />
                          <span>S3</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ServerIcon className="h-5 w-5 text-primary" />
                          <span>Lambda</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DatabaseIcon className="h-5 w-5 text-primary" />
                          <span>RDS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldIcon className="h-5 w-5 text-primary" />
                          <span>IAM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Cloud className="h-5 w-5 text-primary" />
                          <span>CloudFormation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChartIcon className="h-5 w-5 text-primary" />
                          <span>CloudWatch</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ServerIcon className="h-5 w-5 text-primary" />
                          <span>VPC</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support & Technical Skills */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Support & Technical Skills</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex items-center gap-2">
                          <HeadphonesIcon className="h-5 w-5 text-primary" />
                          <span>Technical Troubleshooting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="h-5 w-5 text-primary" />
                          <span>Customer Communication</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCapIcon className="h-5 w-5 text-primary" />
                          <span>Knowledge Base Creation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ServerIcon className="h-5 w-5 text-primary" />
                          <span>Linux/Unix</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ServerIcon className="h-5 w-5 text-primary" />
                          <span>Bash Scripting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ServerIcon className="h-5 w-5 text-primary" />
                          <span>Python</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ServerIcon className="h-5 w-5 text-primary" />
                          <span>Networking Fundamentals</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ServerIcon className="h-5 w-5 text-primary" />
                          <span>CI/CD Pipelines</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                        <div className="pt-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://github.com/rchrdnm/s3-static-site" target="_blank" rel="noopener noreferrer">
                              View Source <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
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

        {/* Certifications & Learning Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Certifications & Learning
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  My educational journey in cloud computing and AWS.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {/* Certification 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <GraduationCapIcon className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold text-xl">AWS Cloud Practitioner</h3>
                        <p className="text-muted-foreground">In Progress</p>
                        <p className="text-sm">
                          Foundational understanding of AWS Cloud services, security, architecture, pricing, and
                          support.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Course 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <GraduationCapIcon className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold text-xl">AWS Solutions Architect Associate</h3>
                        <p className="text-muted-foreground">Future Goal</p>
                        <p className="text-sm">
                          Designing available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Course 2 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <GraduationCapIcon className="h-12 w-12 text-primary" />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold text-xl">AWS SysOps Administrator</h3>
                        <p className="text-muted-foreground">Future Goal</p>
                        <p className="text-sm">
                          Systems operations on the AWS platform, including deployment, management, and operations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Interested in connecting or discussing cloud opportunities? Let's talk!
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-lg gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-4">
                    <Mail className="h-6 w-6" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">hello@richardnam.dev</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-4">
                    <Linkedin className="h-6 w-6" />
                    <div className="space-y-1">
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/richardnam93</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Button className="w-full" asChild>
                    <Link href="mailto:contact@richardnam.dev">Send Me an Email</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://linkedin.com/in/richardnam93" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Richard Nam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/rchrdnm" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/richardnam93" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
