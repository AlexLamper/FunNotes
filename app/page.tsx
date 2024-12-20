import FunNotesForm from '@/components/fun-notes-form'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { WandIcon as MagicWandIcon, SparklesIcon, PencilIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">FunNotes</h1>
          <ThemeSwitcher />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 mt-8 mb-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Transform Your Notes into Fun, Readable Content</h2>
          <p className="text-xl text-muted-foreground mb-6">Unleash the power of AI to make your notes more engaging and easier to understand.</p>
          <Button size="lg" className="font-semibold">
            Get Started
            <SparklesIcon className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <Separator className="my-8" />

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Paste Your Notes", icon: PencilIcon, description: "Simply paste your existing notes into our editor." },
              { title: "AI Magic", icon: MagicWandIcon, description: "Our AI processes your notes, adding structure and flair." },
              { title: "Enjoy Fun Notes", icon: SparklesIcon, description: "Get back your transformed, more engaging notes!" },
            ].map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <step.icon className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Try It Out</h3>
          <Card>
            <CardHeader>
              <CardTitle>Transform Your Notes</CardTitle>
              <CardDescription>Paste your notes below and watch the magic happen!</CardDescription>
            </CardHeader>
            <CardContent>
              <FunNotesForm />
            </CardContent>
          </Card>
        </section>

        <Separator className="my-8" />

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Features</h3>
          <Tabs defaultValue="emojis" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="emojis">Emojis</TabsTrigger>
              <TabsTrigger value="structure">Better Structure</TabsTrigger>
              <TabsTrigger value="spelling">Spelling Check</TabsTrigger>
            </TabsList>
            <TabsContent value="emojis">
              <Card>
                <CardHeader>
                  <CardTitle>Add Fun Emojis 😄🎉</CardTitle>
                  <CardDescription>Spice up your notes with relevant emojis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI intelligently adds emojis to your notes, making them more expressive and fun to read!</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="structure">
              <Card>
                <CardHeader>
                  <CardTitle>Improve Structure 📝</CardTitle>
                  <CardDescription>Organize your thoughts better</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>FunNotes helps restructure your notes, adding headings, bullet points, and paragraphs where needed.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="spelling">
              <Card>
                <CardHeader>
                  <CardTitle>Fix Spelling ✔️</CardTitle>
                  <CardDescription>Say goodbye to typos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI automatically corrects spelling mistakes, ensuring your notes are error-free.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="my-8" />

        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Make Your Notes Fun?</h3>
          <p className="text-xl text-muted-foreground mb-6">Join thousands of users who have transformed their note-taking experience.</p>
          <Button size="lg" className="font-semibold">
            Start Transforming Notes
            <SparklesIcon className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2023 FunNotes. All rights reserved.</p>
          <div className="flex space-x-4">
            {["Terms", "Privacy", "Contact"].map((item) => (
              <a key={item} href="#" className="text-sm text-muted-foreground hover:text-primary">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

