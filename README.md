
# Whisper Prompts – Chrome Extension
## 🧩 Chrome Extension Installation & Usage

### Install from Chrome Web Store

1. Visit the Chrome Web Store page for Whisper Prompts (link coming soon).
2. Click **Add to Chrome**.
3. Pin the extension for quick access.

### Manual Installation (Development Build)

1. Run `npm run build` to generate the extension files in the `dist/` folder.
2. Open `chrome://extensions` in your browser.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the `dist/` folder.
5. The extension will appear in your Chrome toolbar.

### How to Use

1. Click the Whisper Prompts icon in your Chrome toolbar.
2. Enter your request and select a target AI model.
3. Click **Optimize Prompt** to generate a model-specific prompt.
4. Copy the optimized prompt with one click.

## 📸 Screenshots & Demo

> _Add screenshots and a demo GIF here for your Chrome Web Store listing._

---

## Project info

**URL**: https://lovable.dev/projects/f8a7c04b-9818-4439-b463-56b8e0c068f1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f8a7c04b-9818-4439-b463-56b8e0c068f1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd generate-ai-prompts

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.


## Features

- Multi-model prompt optimization (ChatGPT, Claude, Gemini, Llama, Perplexity)
- One-click copy to clipboard
- Responsive, modern UI (shadcn-ui, Tailwind CSS)
- Free & privacy-friendly
- Chrome extension ready

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f8a7c04b-9818-4439-b463-56b8e0c068f1) and click on Share -> Publish.


## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
