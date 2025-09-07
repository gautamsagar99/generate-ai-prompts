import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
// Replacing Radix Select with native select for Chrome extension compatibility
import { useToast } from "@/hooks/use-toast";
import { Copy, Sparkles, Wand2 } from "lucide-react";

const LLM_MODELS = [
  { id: "gpt-4", name: "ChatGPT (GPT-4)", company: "OpenAI" },
  { id: "claude", name: "Claude", company: "Anthropic" },
  { id: "gemini", name: "Gemini Pro", company: "Google" },
  { id: "llama", name: "Llama 3", company: "Meta" },
  { id: "perplexity", name: "Perplexity", company: "Perplexity AI" },
];

const PROMPT_TEMPLATES = {
  "gpt-4": {
    prefix:
      "You are an expert assistant. I need you to help me with the following task.",
    structure:
      "Please provide a comprehensive and well-structured response that includes:\n1. A clear explanation\n2. Step-by-step guidance if applicable\n3. Practical examples\n4. Any important considerations or limitations\n\nTask: ",
    suffix: "\n\nPlease be thorough yet concise in your response.",
  },
  claude: {
    prefix: "I'd like your help with something important.",
    structure:
      "Please approach this systematically and provide:\n- Clear reasoning behind your approach\n- Detailed explanations\n- Practical examples where relevant\n- Any caveats or considerations\n\nHere's what I need help with: ",
    suffix:
      "\n\nThank you for taking the time to provide a thoughtful response.",
  },
  gemini: {
    prefix: "Hello! I need assistance with a specific task.",
    structure:
      "Could you please help me by:\n• Breaking down the problem clearly\n• Providing step-by-step guidance\n• Including relevant examples\n• Highlighting key points to remember\n\nThe task is: ",
    suffix: "\n\nI appreciate your detailed and helpful response!",
  },
  llama: {
    prefix: "I'm looking for help with a particular challenge.",
    structure:
      "Please provide a detailed response that covers:\n1. Core concepts and explanations\n2. Actionable steps or methods\n3. Real-world examples or applications\n4. Important tips or warnings\n\nMy request: ",
    suffix:
      "\n\nPlease ensure your response is both comprehensive and practical.",
  },
  perplexity: {
    prefix: "I need research and analysis on the following topic.",
    structure:
      "Please provide:\n- Current and accurate information\n- Multiple perspectives where relevant\n- Sources and references\n- Analysis and insights\n\nTopic/Question: ",
    suffix: "\n\nPlease include recent developments and cite reliable sources.",
  },
};

export const PromptOptimizer = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateOptimizedPrompt = () => {
    if (!userInput.trim() || !selectedModel) {
      toast({
        title: "Missing Information",
        description: "Please enter your request and select a model.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate generation delay for better UX
    setTimeout(() => {
      const template =
        PROMPT_TEMPLATES[selectedModel as keyof typeof PROMPT_TEMPLATES];
      const optimized = `${template.prefix}\n\n${template.structure}${userInput}\n${template.suffix}`;
      setOptimizedPrompt(optimized);
      setIsGenerating(false);

      toast({
        title: "Prompt Optimized!",
        description: "Your prompt has been optimized for the selected model.",
      });
    }, 1500);
  };

  const copyToClipboard = async () => {
    if (!optimizedPrompt) return;

    try {
      await navigator.clipboard.writeText(optimizedPrompt);
      toast({
        title: "Copied!",
        description: "Optimized prompt copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Please select and copy the text manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AI Prompt Optimizer
          </h1>
        </div>
        <p className="text-muted-foreground">
          Transform your simple requests into perfect prompts for any AI model
        </p>
      </div>

      {/* Input Section */}
      <Card className="p-6 bg-gradient-secondary border-border/50 shadow-soft">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              What do you want to achieve?
            </label>
            <Textarea
              placeholder="e.g., Help me write a professional email to my boss about a project delay..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="min-h-24 bg-background/50 border-border/30 focus:border-primary/50 transition-smooth"
            />
          </div>

          <div>
            <label
              className="text-sm font-medium text-foreground block mb-2"
              htmlFor="model-select"
            >
              Target AI Model
            </label>
            <select
              id="model-select"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full h-10 rounded-md border border-border/30 bg-background/50 px-3 py-2 text-sm focus:border-primary/50 focus:outline-none text-foreground transition-smooth shadow-glow"
              style={{
                background: "hsl(var(--background) / 0.95)",
                color: "hsl(var(--foreground))",
                borderColor: "hsl(var(--border))",
                boxShadow: "0 0 8px hsl(var(--primary) / 0.15)",
              }}
            >
              <option
                value=""
                disabled
                style={{
                  background: "hsl(var(--background) / 0.95)",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                Choose your AI model...
              </option>
              {LLM_MODELS.map((model) => (
                <option
                  key={model.id}
                  value={model.id}
                  style={{
                    background: "hsl(var(--background) / 0.98)",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  {model.name} ({model.company})
                </option>
              ))}
            </select>
          </div>

          <Button
            onClick={generateOptimizedPrompt}
            disabled={isGenerating || !userInput.trim() || !selectedModel}
            className="w-full bg-gradient-primary hover:opacity-90 shadow-glow transition-smooth"
          >
            {isGenerating ? (
              <>
                <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                Optimizing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Optimize Prompt
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Output Section */}
      {optimizedPrompt && (
        <Card className="p-6 bg-gradient-secondary border-border/50 shadow-soft">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                Optimized Prompt
              </h3>
              <Button
                onClick={copyToClipboard}
                variant="secondary"
                size="sm"
                className="hover:bg-primary/10 transition-smooth"
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
            </div>
            <div className="bg-background/50 border border-border/30 rounded-lg p-4">
              <pre className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed">
                {optimizedPrompt}
              </pre>
            </div>
            <div className="text-xs text-muted-foreground">
              ✨ This prompt has been optimized for{" "}
              {LLM_MODELS.find((m) => m.id === selectedModel)?.name}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
