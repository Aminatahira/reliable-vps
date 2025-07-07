import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.location.href = "https://www.arzhost.com/terms-conditions/";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-charcoal mb-4">
          Redirecting to Terms and Conditions...
        </h1>
        <p className="text-gray-600">
          You will be redirected to our main Terms and Conditions page shortly.
        </p>
        <p className="mt-4">
          If you are not redirected automatically,{" "}
          <a
            href="https://www.arzhost.com/terms-conditions/"
            className="text-brand hover:underline"
          >
            click here
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
