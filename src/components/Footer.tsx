import { Heart, Code, Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">PromptCraft</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Optimize your AI interactions with perfectly crafted prompts for every major language model.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Code className="h-3 w-3" />
                <span>Free & Open Source</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>Fast & Efficient</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✨ Multi-model optimization</li>
              <li>⚡ Instant prompt generation</li>
              <li>📋 One-click copy to clipboard</li>
              <li>🎯 Model-specific templates</li>
              <li>🚀 Chrome extension ready</li>
            </ul>
          </div>

          {/* Coming Soon */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Coming Soon</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🔥 Advanced prompt engineering</li>
              <li>📊 Prompt performance analytics</li>
              <li>💾 Saved prompt library</li>
              <li>🤖 AI-powered suggestions</li>
              <li>👥 Team collaboration</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> for the AI community
          </p>
        </div>
      </div>
    </footer>
  );
};