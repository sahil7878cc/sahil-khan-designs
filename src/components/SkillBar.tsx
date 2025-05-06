
interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/90 font-medium">{name}</span>
        <span className="text-white/60 text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-darkBlue/60 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blueAccent to-blueDeep rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
