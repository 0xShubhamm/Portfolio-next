import React from 'react'
import { AnimatedSpan, Terminal, TypingAnimation } from './magicui/terminal'

export default function AboutTerminal() {
    return (
        <Terminal >
            <TypingAnimation className="w-full ">&gt; shubham info --fetch</TypingAnimation>

            <AnimatedSpan delay={1200} className="text-green-500">
                <span>✔ Name: Shubham Lad</span>
            </AnimatedSpan>

            <AnimatedSpan delay={1600} className="text-green-500">
                <span>✔ Role: Full-stack Developer</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-green-500">
                <span>✔ Focus: Building scalable & modern web apps</span>
            </AnimatedSpan>

            <TypingAnimation delay={2500} className="w-full">&gt; shubham skills --list</TypingAnimation>

            <AnimatedSpan delay={3000} className="text-blue-400">
                <span>Frontend 🚀</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3400} className="text-green-500 pl-4">
                <span>React.js | Next.js | Tailwind CSS | TypeScript</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3800} className="text-blue-400">
                <span>Backend ⚡</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4200} className="text-green-500 pl-4">
                <span>Node.js | Express.js | Prisma ORM</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4600} className="text-blue-400">
                <span>Database 🛢️</span>
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-green-500 pl-4">
                <span>MongoDB | PostgreSQL | Neon.tech</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5400} className="text-blue-400">
                <span>DevOps & Tools 🛠️</span>
            </AnimatedSpan>
            <AnimatedSpan delay={5800} className="text-green-500 pl-4">
                <span>Git | Vercel | Render | JWT Auth</span>
            </AnimatedSpan>

            <TypingAnimation delay={6200} className="w-full">&gt; mission --show</TypingAnimation>

            <AnimatedSpan delay={6600} className="text-muted-foreground">
                <span>Craft impactful products. Learn. Inspire.</span>
            </AnimatedSpan>
        </Terminal>

    )
}

