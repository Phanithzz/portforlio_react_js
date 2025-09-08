import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionPaper from '../../components/SectionPaper';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Java', percent: 70 },
  { name: 'React', percent: 65 },
  { name: 'Postgres', percent: 60 },
  { name: 'Git/Github', percent: 60 },
];

const SkillHomePage = ({ scrollerRef }) => {
  const barsRef = useRef([]);

  useEffect(() => {
    if (typeof gsap === 'undefined') {
      console.error('GSAP is not available');
      return;
    }
    
    if (typeof ScrollTrigger === 'undefined') {
      console.error('ScrollTrigger is not available');
      return;
    }

    const timer = setTimeout(()=> {
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
            ease: 'power1.out',
            duration: 1,
          }
        );
      });

      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
    
  }, [scrollerRef]);

  return (
    <SectionPaper title="Skills">
      <div style={{  display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {skills.map((skill, idx) => (
          <div key={skill.name}>
            <div style={{ marginBottom: '0.3rem', fontWeight: 'bold' }}>{skill.name} {skill.percent+ '%'}</div>

            <div
              style={{
                height: '20px',
                width: '100%',
                background: '#eee',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <div
                ref={(el) => (barsRef.current[idx] = el)}
                data-percent={skill.percent}
                style={{
                  height: '100%',
                  width: 0,
                  background: '#3452ff',
                  borderRadius: '10px',
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
