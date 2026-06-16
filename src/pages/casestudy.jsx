import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import CaseStudyHero from "../components/casestudyhero";
import CaseStudyTimeline from "../components/casestudytimeline";
import Footer from "../components/footer";

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Jump to top whenever a new case study opens.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F7F4F2] text-[#221429]">
        <p className="font-mono text-xs uppercase tracking-wider text-[#221429]/60">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Project not found
        </h1>
        <Link
          to="/projects"
          className="rounded-full bg-[#221429] px-5 py-2.5 text-sm font-medium text-[#F7F4F2] transition-transform hover:scale-[1.03]"
        >
          Back to all work
        </Link>
      </div>
    );
  }

  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[#F7F4F2] text-[#221429]">
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-8 md:px-8">
        <CaseStudyHero project={project} />

        <div className="mt-20 md:mt-28">
          <CaseStudyTimeline
            sections={project.caseStudy.sections}
            mode={project.caseStudy.mode}
          />
        </div>

        {/* next project */}
        <Link
          to={`/projects/${next.id}`}
          className="group mt-24 flex flex-col gap-2 rounded-2xl border border-[#221429]/12 bg-white p-8 transition-colors hover:border-[#FD2E35] md:p-12"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-[#221429]/60">
            Next project
          </span>
          <span className="flex items-center gap-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {next.title}
            <ArrowRight className="size-7 text-[#221429]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FD2E35]" />
          </span>
          <span className="text-sm text-[#221429]/60">{next.client}</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
