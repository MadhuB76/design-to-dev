import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

// Ported from the :3000 CaseStudyHero, re-skinned to the light palette.
export default function CaseStudyHero({ project }) {
  const cs = project.caseStudy;

  return (
    <header className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-sm text-[#221429]/60 transition-colors hover:text-[#221429]"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All work
        </Link>
      </motion.div>

      <div className="flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          className="font-mono text-xs uppercase tracking-wider text-[#FD2E35]"
        >
          {project.client} · {project.year}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.1 }}
          className="max-w-3xl text-4xl font-semibold tracking-tight text-[#221429] md:text-6xl"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.15 }}
          className="max-w-2xl text-lg leading-relaxed text-[#221429]/65"
        >
          {cs.intro}
        </motion.p>
      </div>

      {/* meta strip */}
      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease, delay: 0.2 }}
        className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-[#221429]/12 py-6 md:grid-cols-4"
      >
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-[#221429]/60">
            Role
          </dt>
          <dd className="mt-1.5 text-sm font-medium text-[#221429]">{cs.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-[#221429]/60">
            Timeline
          </dt>
          <dd className="mt-1.5 text-sm font-medium text-[#221429]">
            {cs.timeline}
          </dd>
        </div>
        <div className="col-span-2">
          <dt className="font-mono text-xs uppercase tracking-wider text-[#221429]/60">
            Services
          </dt>
          <dd className="mt-1.5 flex flex-wrap gap-1.5">
            {cs.services.map((s) => (
              <span
                key={s}
                className="rounded-full bg-[#E9E4E0] px-2.5 py-1 text-xs font-medium text-[#221429]"
              >
                {s}
              </span>
            ))}
          </dd>
        </div>
      </motion.dl>

      {/* hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.25 }}
        className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#221429]/12 bg-[#E9E4E0]"
      >
        <img
          src={project.image}
          alt={`${project.title} — ${project.client}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      {/* stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease, delay: 0.3 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {cs.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-[#221429]/12 bg-white p-6"
          >
            <p className="text-3xl font-semibold tracking-tight text-[#FD2E35] md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-sm text-[#221429]/60">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {cs.liveUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.35 }}
        >
          <a
            href={cs.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#221429] px-5 py-2.5 text-sm font-medium text-[#F7F4F2] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Visit live site
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      )}
    </header>
  );
}
