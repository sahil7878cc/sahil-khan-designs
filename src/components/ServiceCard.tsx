
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  example?: string;
}

const ServiceCard = ({ title, description, icon, example }: ServiceCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-darkBlue/60 hover:bg-darkBlue border border-white/10 transition-all hover:shadow-lg hover:shadow-blueAccent/5 group">
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-blueAccent/20 to-blueDeep/20 text-blueAccent mb-6 group-hover:from-blueAccent/30 group-hover:to-blueDeep/30 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/60 mb-4">{description}</p>
      {example && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-sm font-medium text-blueAccent mb-1">Example</p>
          <p className="text-white/60 text-sm italic">{example}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
