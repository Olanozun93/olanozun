import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';

interface PortfolioCardProps {
  project: any;
  onClick: () => void;
}

export default function PortfolioCard({ project, onClick }: PortfolioCardProps) {
  return (
    <Card 
      className="p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-accent-orange/20 group"
      onClick={onClick}
    >
      {/* Category Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${
        project.category === 'success-stories' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-blue-100 text-blue-800'
      }`}>
        {project.category === 'success-stories' ? (
          <>
            <TrendingUp className="w-3 h-3" />
            Success Story
          </>
        ) : (
          <>
            <Users className="w-3 h-3" />
            Learning Experience
          </>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-orange transition-colors line-clamp-2">
        {project.title}
      </h3>
      
      {/* Excerpt */}
      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
        {project.excerpt}
      </p>

      {/* Metrics Preview (if available) */}
      {project.metrics && (
        <div className="flex items-center gap-4 mb-4">
          {project.metrics.slice(0, 2).map((metric: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-accent-orange">{metric.value}</div>
              <div className="text-xs text-gray-500">{metric.metric}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag: string) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-3 h-3" />
          {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </div>
        <Button 
          variant="outline" 
          className="border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white transition-all duration-300 group/btn"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}