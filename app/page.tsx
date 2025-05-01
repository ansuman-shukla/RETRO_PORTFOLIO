"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Github, Linkedin, Mail, Phone, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import PixelAvatar from "@/components/pixel-avatar"
import PixelButton from "@/components/pixel-button"
import PixelWindow from "@/components/pixel-window"
import PixelSkillBar from "@/components/pixel-skill-bar"
import PixelNavigation from "@/components/pixel-navigation"
import PixelProjectCard from "@/components/pixel-project-card"
import PixelExperienceCard from "@/components/pixel-experience-card"
import PixelEducationCard from "@/components/pixel-education-card"
import PixelScanlines from "@/components/pixel-scanlines"
import PixelCursor from "@/components/pixel-cursor"
import Image from "next/image"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!isMounted) {
    // Avoid hydration mismatch by returning null or a loading state
    return null 
  }

  const isDarkMode = theme === "dark"

  return (
    <main
      className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen font-pixel relative overflow-x-hidden`}
    >
      <PixelScanlines className={isDarkMode ? "opacity-20" : "opacity-5"} />
      <PixelCursor />
      <PixelNavigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className="fixed top-4 right-20 z-50">
        <button
          onClick={toggleTheme}
          className={`w-12 h-12 ${isDarkMode ? "bg-white text-black" : "bg-black text-white"} flex items-center justify-center border-2 border-[#FF0004]`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="p-8 bg-transparent max-w-3xl w-full text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl mb-4 text-[#1E00FF] pixel-text animate-glitch`}>ANSUMAN</h1>
          <h2 className="text-xl md:text-2xl mb-6 text-[#FF0004] pixel-text">BUILDER & PROBLEM SOLVER</h2>
          <p className={`mb-8 text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
            Driven by curiosity and a passion for building. Exploring the intersection of AI and practical solutions.
          </p>
          <Image
            src="/images/profile.png" // Make sure this path is correct
            alt="Profile Picture"
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
            className="pixel-art-image w-100 h-100 object-cover mx-auto"// Added mx-auto for centering
          />
          <div className="mt-12">
            <a href="#about" className="animate-bounce inline-block">
              <ArrowDown className={`mx-auto ${isDarkMode ? "text-white" : "text-black"}`} size={32} />
              <p className={`text-sm mt-2 ${isDarkMode ? "text-white" : "text-black"}`}>PRESS DOWN TO CONTINUE</p>
            </a>
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t ${isDarkMode ? "from-black" : "from-white"} to-transparent`}
        ></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <PixelWindow title="MY JOURNEY" className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-black"}`}>
                I just love building stuff.
              </p>
              <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-black"}`}>
                Ever since I was a kid, I've been that person who breaks things just to see how they work. That
                curiosity turned into a full-blown obsession when I discovered Arduino at the age of 11.
              </p>
              <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-white" : "text-black"}`}>
                Then, in 2022, AI caught my attention. I built my first chatbot—a sarcastic one—just for fun. That one
                project pulled me into the world of AI.
              </p>
              <p className={`leading-relaxed ${isDarkMode ? "text-white" : "text-black"}`}>
                My approach is simple—if I see a problem, I try to solve it with tech.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="pixel-art-container w-full aspect-square"> {/* Changed h-full to aspect-square */}
                <img src="/images/pixel-boy.png" alt="Pixelated boy" className="pixel-art-image w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </PixelWindow>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <h2 className={`text-3xl text-center mb-12 pixel-text ${isDarkMode ? 'text-[#1E00FF]' : 'text-black'}`}>EXPERIENCE.EXE</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <PixelExperienceCard
            title="AI Research Intern"
            company="Project Dark Horse (PDH)"
            duration="Oct. 2024 – Jan 2025"
            location="Bengaluru, Karnataka"
            achievements={[
              "Engineered RAG pipeline with vector indexing, optimizing retrieval.",
              "Achieved 90% query cost reduction via model quantization & optimization.",
              "Fine-tuned transformer models for scalability & output diversity.",
            ]}
            isDarkMode={isDarkMode}
          />
          <PixelExperienceCard
            title="SDE Intern"
            company="Ziner"
            duration="Jan. 2025 – Present"
            location="Bengaluru, Karnataka"
            achievements={[
              "Developed scalable backend APIs using Node.js and Express.",
              "Implemented real-time features with WebSockets.",
              "Contributed to frontend development using React and TypeScript.",
            ]}
            isDarkMode={isDarkMode}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <h2 className={`text-3xl text-center mb-12 pixel-text ${isDarkMode ? 'text-[#1E00FF]' : 'text-black'}`}>PROJECTS.DAT</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <PixelProjectCard
            title="Ada - AI-Powered Personal Assistant"
            tech="Python, FastAPI, Google Gemini, MongoDB, Pinecone, React"
            description="Full-stack AI system for intelligent task management with hybrid RAG memory and multi-agent orchestration."
            repoUrl="https://github.com/ansuman-shukla/ada"
          />
          <PixelProjectCard
            title="Julep AI Wikipedia Research Agent"
            tech="Python, FastAPI, Julep AI, Gemini, Render"
            description="A FastAPI service AI Agent and a dynamically configured Julep Task to research topics on Wikipedia. Fetches content via the Wikipedia tool and formats it into on user request."
            repoUrl="https://github.com/ansuman-shukla/julep-web-search-agent"
          />
          <PixelProjectCard
          title="Intent Classification with DistilBERT & SVM Ensemble"
          tech="Python, DistilBERT, SVM, TF-IDF, Transformers, Scikit-learn"
          description="A hybrid intent classification system  of fine-tuned DistilBERT and a traditional TF-IDF + SVM model.."
          repoUrl="https://github.com/ansuman-shukla/intent-detection-model" // Replace # with the actual GitHub repository URL
        />
          <PixelProjectCard
            title="Hippocampus - AI-Powered Knowledge Base"
            tech="Python, Pinecone, JWT, MongoDB"
            description="Engineered hybrid RAG pipeline (90% recall), secure JWT auth, and modular backend. Used by 50+ users."
            repoUrl="https://github.com/ansuman-shukla/hippoCampus"
          />
          <PixelProjectCard
            title="MCP Server for Financial Data Analysis"
            tech="MCP (FastMCP), SmolAgents, LiteLLM, ChromaDB"
            description="MCP server for structured Yahoo Finance access via agent tools, using vector search for ticker resolution."
            repoUrl="https://github.com/ansuman-shukla/MCP_Finance"
          />
          <PixelProjectCard
            title="Medical Report Analyzer"
            tech="Streamlit, CREW AI, Contextual Embeddings, LangSmith"
            description="Multi-agent system for distributed medical anomaly detection using contextual embeddings and agent monitoring."
            repoUrl="https://github.com/ansuman-shukla/Medical_CREW"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <h2 className={`text-3xl text-center mb-12 pixel-text ${isDarkMode ? 'text-[#1E00FF]' : 'text-black'}`}>SKILLS.SYS</h2>
        <div className="max-w-4xl mx-auto">
          <PixelWindow title="LANGUAGES" className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <PixelSkillBar name="Python" level={90} isDarkMode={isDarkMode} />
              <PixelSkillBar name="Java" level={80} isDarkMode={isDarkMode} />
              <PixelSkillBar name="C/C++" level={75} isDarkMode={isDarkMode} />
              <PixelSkillBar name="JavaScript" level={85} isDarkMode={isDarkMode} />
              <PixelSkillBar name="SQL" level={70} isDarkMode={isDarkMode} />
              <PixelSkillBar name="R" level={65} isDarkMode={isDarkMode} />
            </div>
          </PixelWindow>

          <PixelWindow title="FRAMEWORKS/LIBRARIES" className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <PixelSkillBar name="React" level={85} isDarkMode={isDarkMode} />
              <PixelSkillBar name="FastAPI" level={90} isDarkMode={isDarkMode} />
              <PixelSkillBar name="TensorFlow" level={80} isDarkMode={isDarkMode} />
              <PixelSkillBar name="PyTorch" level={75} isDarkMode={isDarkMode} />
              <PixelSkillBar name="LangChain" level={95} isDarkMode={isDarkMode} />
              <PixelSkillBar name="CrewAI" level={90} isDarkMode={isDarkMode} />
            </div>
          </PixelWindow>

          <PixelWindow title="TOOLS/PLATFORMS" className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <PixelSkillBar name="Git" level={85} isDarkMode={isDarkMode} />
              <PixelSkillBar name="AWS" level={70} isDarkMode={isDarkMode} />
              <PixelSkillBar name="GCP" level={75} isDarkMode={isDarkMode} />
              <PixelSkillBar name="MongoDB" level={80} isDarkMode={isDarkMode} />
              <PixelSkillBar name="PostgreSQL" level={75} isDarkMode={isDarkMode} />
              <PixelSkillBar name="Pinecone" level={90} isDarkMode={isDarkMode} />
            </div>
          </PixelWindow>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <h2 className={`text-3xl text-center mb-12 pixel-text ${isDarkMode ? 'text-[#1E00FF]' : 'text-black'}`}>EDUCATION.TXT</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <PixelEducationCard
            degree="BSc + MSc in Computer Science"
            institution="Scaler School of Technology"
            dates="Aug. 2023 – May 2027"
            location="Bengaluru, India"
            isDarkMode={isDarkMode}
          />
          <PixelEducationCard
            degree="BSc in Data Science"
            institution="Birla Institute of Technology and Science, Pilani"
            dates="Aug. 2023 – May 2026"
            location="Pilani, India"
            isDarkMode={isDarkMode}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <h2 className={`text-3xl text-center mb-12 pixel-text ${isDarkMode ? 'text-[#1E00FF]' : 'text-black'}`}>CONNECT.EXE</h2>
        <PixelWindow title="CONTACT INFO" className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-white" : "text-black"}`}>
                Interested in collaborating or have a question? Feel free to reach out.
              </p>

              <div className="flex items-center mb-4">
                <Mail className="mr-3 text-[#FF0004]" />
                <a
                  href="mailto:ansuman.23bcs10072@ms.sst.scaler.com"
                  className={`hover:text-[#1E00FF] transition-colors text-sm md:text-base break-all ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  ansuman.23bcs10072@ms.sst.scaler.com
                </a>
              </div>

              <div className="flex items-center mb-4">
                <Phone className="mr-3 text-[#FF0004]" />
                <span className={isDarkMode ? "text-white" : "text-black"}>9262561716</span>
              </div>

              <div className="flex mt-8 space-x-4">
                <PixelButton>
                  <a href="https://github.com/ansuman-shukla" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                </PixelButton>
                <PixelButton>
                  <a
                    href="https://www.linkedin.com/in/ansuman-shukla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="mr-2" size={16} />
                    LinkedIn
                  </a>
                </PixelButton>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="pixel-message-icon">
                <div className="pixel-message-lines"></div>
              </div>
            </div>
          </div>
        </PixelWindow>
      </section>

      {/* Footer */}
      <footer
        className={`py-6 text-center text-sm border-t border-[#1E00FF] mt-12 ${isDarkMode ? "text-white" : "text-black"}`}
      >
        <p>© {new Date().getFullYear()} ANSUMAN KUMAR | MADE WITH PIXEL POWER</p>
        <p className="mt-2 text-xs text-gray-500">Press START to restart</p>
      </footer>
    </main>
  )
}
