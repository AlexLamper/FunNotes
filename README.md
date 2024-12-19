# FunNotes

**FunNotes** is an innovative web application that allows users to enhance their notes by making them more fun, readable, and structured. Powered by AI, FunNotes can correct spelling, suggest emojis, and improve the overall presentation of notes.

---

## Features

- **AI-Powered Text Improvement**: Enhance readability and structure.
- **Emoji Suggestions**: Add relevant emojis to your notes.
- **Spelling and Grammar Correction**: Automatically fix errors.
- **User-Friendly Interface**: Easily paste, edit, and save your notes.

---

## Tech Stack

- **Frontend**: Next.js (with TypeScript, App Router), TailwindCSS, ShadCN.
- **Backend**: Supabase (optional for database), Stripe (for payments if needed).
- **AI Integration**: OpenAI API (or similar).
- **Deployment**: Vercel.
- **Icons**: React-icons.

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or later)
- **Git**
- **A Vercel Account** (for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd funnotes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:
   ```
   OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   STRIPE_API_KEY=your_stripe_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Branching Strategy

- **`main`**: Production-ready branch.
- **`dev`**: Active development branch.
- **`feature/<name>`**: Feature-specific branches.

### Current Branches

- `dev`: The primary development branch.
- `feature/editor-pages`: Adding the note editor functionality.

---

## Usage

1. Paste your notes into the editor.
2. Click on **"Make My Notes Fun!"** to process.
3. Review and save the improved notes.

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/<your-feature>
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/<your-feature>
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Developer**: [AlexLamper]
- **Email**: [devlamper06@gmail.com]
- **Website**: [funnotes.vercel.app]
