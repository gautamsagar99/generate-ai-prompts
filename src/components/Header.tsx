import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <img
                src="/magic-wand-sparkle-32.svg"
                alt="PromptCraft Magic Wand Icon"
                className="h-5 w-5"
                style={{ display: 'block' }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PromptCraft</h1>
              <p className="text-xs text-muted-foreground">
                AI Prompt Optimizer
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs px-2 py-1">
            Free Version
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth cursor-not-allowed opacity-70"
            disabled
          >
            <Crown className="h-4 w-4 mr-2" />
            Pro (Coming Soon)
          </Button>
        </div>
      </div>
    </header>
  );
};
