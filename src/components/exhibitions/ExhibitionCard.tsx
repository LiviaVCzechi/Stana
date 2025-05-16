import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

interface ExhibitionCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  date,
  category
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Tag className="h-4 w-4 text-blue-500 mr-2" />
          <span className="text-sm text-blue-500 font-medium">{category}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          to={`/exhibitions/${id}`}
          className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
        >
          View Exhibition
        </Link>
      </div>
    </div>
  );
};

export default ExhibitionCard;