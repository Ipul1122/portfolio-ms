import React from 'react';
import { SkillItem } from '../../types/global';

interface SkillBadgeProps {
  skill: SkillItem;
  isSelected?: boolean;
  onHover?: (skill: SkillItem | null) => void;
  onClick?: (skill: SkillItem) => void;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  skill,
  isSelected,
  onHover,
  onClick,
}) => {
  const getCategoryColor = (cat: SkillItem['category']) => {
    switch (cat) {
      case 'frontend':
        return 'border-accent/30 text-accent bg-accent/5 hover:bg-accent/15';
      case 'backend':
        return 'border-[#8B5E3C]/30 text-[#8B5E3C] bg-[#8B5E3C]/5 hover:bg-[#8B5E3C]/15';
      case 'devops':
        return 'border-[#5A7D7C]/40 text-[#5A7D7C] bg-[#5A7D7C]/5 hover:bg-[#5A7D7C]/15';
      case 'creative':
        return 'border-[#C25E3E]/40 text-[#C25E3E] bg-[#C25E3E]/5 hover:bg-[#C25E3E]/15';
      default:
        return 'border-border text-text-primary bg-background-secondary';
    }
  };

  return (
    <button
      type="button"
      onClick={() => onClick?.(skill)}
      onMouseEnter={() => onHover?.(skill)}
      onMouseLeave={() => onHover?.(null)}
      className={`
        group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-sm font-medium
        transition-all duration-300 transform active:scale-95 cursor-pointer shadow-warm-sm
        ${
          isSelected
            ? 'bg-text-primary text-[#FDFBF7] border-text-primary shadow-warm-md scale-105 ring-2 ring-accent/30'
            : getCategoryColor(skill.category)
        }
      `}
    >
      <span
        className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150 ${
          isSelected
            ? 'bg-accent'
            : skill.category === 'frontend'
            ? 'bg-accent'
            : skill.category === 'backend'
            ? 'bg-[#8B5E3C]'
            : skill.category === 'devops'
            ? 'bg-[#5A7D7C]'
            : 'bg-[#C25E3E]'
        }`}
      />
      <span className="tracking-wide">{skill.name}</span>
      <span className="text-[11px] font-mono opacity-60 ml-0.5 group-hover:opacity-100 transition-opacity">
        {skill.experienceYears}y
      </span>
    </button>
  );
};
