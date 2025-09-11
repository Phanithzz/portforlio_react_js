import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionPaper from '../../components/SectionPaper';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql, SiSpringboot } from 'react-icons/si';


gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Springboot', percent: 70, logo: <SiSpringboot size={24} color="green" /> },
  { name: 'React', percent: 65, logo: <FaReact size={24} color="#61DBFB" /> },
  { name: 'Postgres', percent: 60, logo: <SiPostgresql size={24} color="#336791" /> },
  { name: 'Git/Github', percent: 60, logo: <FaGitAlt size={24} color="#f34f29" /> },
];

const SkillHomePage = ({ scrollerRef }) => {
  const barsRef = useRef([]);

  useEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const timer = setTimeout(() => {
      const scrollEl = scrollerRef?.current?.getScrollElement?.() || scrollerRef?.current || window;

      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        gsap.fromTo(
          bar,
          { width: 0 },
          {
            width: bar.dataset.percent + '%',
            scrollTrigger: {
              trigger: bar,
              scroller: scrollEl,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            ease: 'power2.out',
            duration: 1.2,
          }
        );
      });

      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, [scrollerRef]);

  return (
    <SectionPaper title="Skills">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {skills.map((skill, idx) => (
          <div key={skill.name} style={{}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem' }}>
              {skill.logo}
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                {skill.name} — {skill.percent}%
              </span>
            </div>

            <div
              style={{
                height: '18px',
                width: '100%',
                background: '#eee',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <div
                ref={(el) => (barsRef.current[idx] = el)}
                data-percent={skill.percent}
                style={{
                  height: '100%',
                  width: 0,
                  background: 'linear-gradient(90deg, #3452ff, #00c6ff)',
                  borderRadius: '12px',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </SectionPaper>
  );
};

export default SkillHomePage;
