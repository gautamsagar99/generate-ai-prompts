import { Header } from "@/components/Header";
import { PromptOptimizer } from "@/components/PromptOptimizer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />


      <main className="container py-8">
        <section className="mb-8 p-6 rounded-lg bg-background/70 border border-border/30 shadow-glow">
          <h2 className="text-2xl font-bold mb-2 text-foreground">How it works</h2>
          <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1">
            <li>Describe your request or task in plain language.</li>
            <li>Select your target AI model (e.g., ChatGPT, Claude, Gemini, etc.).</li>
            <li>Click <b>Optimize Prompt</b> to instantly generate a model-specific prompt.</li>
            <li>Copy the optimized prompt and use it in your favorite AI tool.</li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">PromptCraft helps you get the best results from each AI model by tailoring your prompt for their unique strengths.</p>
        </section>
        <PromptOptimizer />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
