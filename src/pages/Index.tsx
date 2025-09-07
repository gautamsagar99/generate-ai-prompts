import { Header } from "@/components/Header";
import { PromptOptimizer } from "@/components/PromptOptimizer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <PromptOptimizer />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
