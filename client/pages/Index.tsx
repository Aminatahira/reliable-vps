import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Server, Shield, Zap, Mail, Globe } from "lucide-react";

export default function Index() {
  const plans = [
    {
      name: "Starter VPS",
      price: "$12.50",
      description: "Great for small websites, test apps, and simple tools.",
    },
    {
      name: "Value VPS",
      price: "$16.00",
      description:
        "Reliable hosting for personal portfolios or small business operations.",
    },
    {
      name: "Essential VPS",
      price: "$34.00",
      description:
        "Run CRM tools, eCommerce sites, or small platforms with ease.",
    },
    {
      name: "Comfort VPS",
      price: "$54.00",
      description: "Designed for consistent performance under daily use.",
    },
    {
      name: "Elite VPS",
      price: "$60.00",
      description:
        "Perfect for large-scale apps, high-volume sites, and professional systems.",
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-brand" />,
      title: "99.99% Uptime – Guaranteed",
      description:
        "We keep your websites, apps, and services running 24/7, backed by real uptime monitoring.",
    },
    {
      icon: <Mail className="w-6 h-6 text-brand" />,
      title: "Email-Ready Hosting (Port 25 Open)",
      description:
        "Send marketing campaigns, transactional emails, and system notifications—freely and securely.",
    },
    {
      icon: <Server className="w-6 h-6 text-brand" />,
      title: "Full Root Access",
      description:
        "You have complete control to install, configure, or remove anything you need.",
    },
    {
      icon: <Zap className="w-6 h-6 text-brand" />,
      title: "One-Click Scaling",
      description:
        "Increase resources instantly as your traffic or data needs grow—no migrations needed.",
    },
    {
      icon: <Shield className="w-6 h-6 text-brand" />,
      title: "Private & Secure Environments",
      description:
        "Every VPS is fully isolated with firewalls, access controls, and secure data practices.",
    },
    {
      icon: <Globe className="w-6 h-6 text-brand" />,
      title: "Global Accessibility",
      description:
        "Manage your server from anywhere in the world with fast response times.",
    },
  ];

  const useCases = [
    {
      icon: "🛍️",
      title: "Online Stores",
      description:
        "Avoid checkout crashes and keep product pages loading smoothly—day and night.",
    },
    {
      icon: "💼",
      title: "Small Business Dashboards",
      description:
        "Host internal tools, reporting systems, or CRM platforms securely.",
    },
    {
      icon: "💻",
      title: "Agency Projects",
      description:
        "Launch client websites and testing environments without delays or crashes.",
    },
    {
      icon: "📨",
      title: "Email Marketing Tools",
      description: "Create and manage your own secure email infrastructure.",
    },
    {
      icon: "🎮",
      title: "Gaming & Streaming",
      description:
        "Reliable performance and low latency for real-time media and multiplayer experiences.",
    },
  ];

  const testimonials = [
    {
      rating: "⭐️⭐️⭐️⭐️⭐️",
      text: "Zero downtime in over 9 months of use. It just works. And when we need help, support is immediate.",
      author: "Martin S., UK",
    },
    {
      rating: "⭐️⭐️⭐️⭐️⭐️",
      text: "I use the VPS to host multiple apps and services for clients—it's fast and never lags under pressure.",
      author: "Zehra A., UAE",
    },
    {
      rating: "⭐️⭐️⭐️⭐️⭐️",
      text: "After struggling with shared hosting, switching to this VPS saved our business. Reliable is an understatement!",
      author: "Jason C., USA",
    },
  ];

  const faqs = [
    {
      question: "How quickly is my VPS set up after purchase?",
      answer: "Immediately! Most servers are live within 5 minutes of payment.",
    },
    {
      question: "Do I need to be a developer to manage a VPS?",
      answer:
        "Not at all. Our control panel makes it easy to handle your server—even if you're not tech-savvy.",
    },
    {
      question: "Is support available if I get stuck?",
      answer:
        "Absolutely. Our 24/7 support team is here to guide you at any time.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes! You can upgrade your VPS anytime with no downtime or hassle.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Reliable VPS Hosting
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Built for Stability. Designed for Performance. Trusted Worldwide.
          </p>
          <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
            If your business depends on staying online, you need a{" "}
            <a
              href="https://arzhost.com/"
              className="underline hover:no-underline"
            >
              VPS host
            </a>{" "}
            that delivers more than just speed—you need stability, control, and
            unmatched uptime. Our{" "}
            <a
              href="https://arzhost.com/hosting/cheap-vps-server-hosting-dallas/"
              className="underline hover:no-underline"
            >
              vps hosting hong kong
            </a>{" "}
            combines performance, security, and peace of mind so you can focus
            on your business while we keep you online. Learn more about{" "}
            <a
              href="https://en.wikipedia.org/wiki/Virtual_private_server"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              virtual private server technology
            </a>{" "}
            and its benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <span className="text-sm">🚀 Instant Setup</span>
            <span className="text-sm">📨 Outbound Email Enabled</span>
            <span className="text-sm">🔒 Private & Secure VPS</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://arzhost.com/vps/">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-gray-100 px-8 py-3"
              >
                👉 Get Started Instantly
              </Button>
            </a>
            <a href="https://www.arzhost.com/contact-us/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand px-8 py-3"
              >
                💬 Talk to a Hosting Expert
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What Makes Us Reliable Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              🔍 What Makes Our VPS So Reliable?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Reliable VPS means more than being "just fast." It means
              consistent performance, rock-solid infrastructure, and no
              surprises. We've built our platform with enterprise-grade data
              centers, full isolation, and real-time monitoring to deliver
              hosting you can depend on—day or night.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Whether you're a small business, developer, agency, or enterprise,
              our VPS helps you launch, grow, and scale without downtime or
              technical limitations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            ✅ Key Benefits of Our Reliable VPS Hosting
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              💰 Reliable VPS Hosting Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from flexible plans that deliver power and peace of mind.
              Easy to start, simple to scale:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-xl text-charcoal mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-brand mb-4">
                  {plan.price}
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <a href="https://arzhost.com/vps/">
                  <Button className="w-full bg-brand hover:bg-brand/90">
                    Choose Plan
                  </Button>
                </a>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://arzhost.com/vps/">
              <Button
                size="lg"
                className="bg-brand hover:bg-brand/90 px-8 py-3"
              >
                👉 Select Your Plan Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            💼 Real-World Use Cases
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our clients use Reliable VPS Hosting for a variety of needs:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="font-semibold text-charcoal mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Reliability Matters */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🌍 Why Reliability Matters
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            When your server goes down, you lose sales, credibility, and
            momentum. A reliable VPS ensures:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-4">
              <p className="font-semibold">Your business stays open 24/7</p>
            </div>
            <div className="p-4">
              <p className="font-semibold">
                Your emails are delivered, not blocked
              </p>
            </div>
            <div className="p-4">
              <p className="font-semibold">
                Your apps perform smoothly, even during high traffic
              </p>
            </div>
            <div className="p-4">
              <p className="font-semibold">
                Your reputation grows, not your downtime
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-300">
            Invest in infrastructure that performs consistently, not just
            occasionally.
          </p>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            🗣️ Customer Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">{testimonial.rating}</div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-charcoal">
                  — {testimonial.author}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">
                  Q{index + 1}: {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Buy Your VPS Server Online?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're starting fresh or migrating an existing project, we
            make it easy to launch your VPS with confidence.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <span>✓ Instant Setup</span>
            </div>
            <div className="flex items-center justify-center">
              <span>✓ No Resource Sharing</span>
            </div>
            <div className="flex items-center justify-center">
              <span>✓ Free IP Address</span>
            </div>
            <div className="flex items-center justify-center">
              <span>✓ Always-On Support</span>
            </div>
            <div className="flex items-center justify-center">
              <span>✓ Starting at Just $12.50/month</span>
            </div>
          </div>
          <a href="https://arzhost.com/vps/">
            <Button
              size="lg"
              className="bg-white text-brand hover:bg-gray-100 px-8 py-3"
            >
              Buy Now at ARZ Host – and get online in minutes!
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
