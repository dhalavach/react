import { ExternalLink, Heart } from 'lucide-react';

export const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      data-testid="about"
      className="min-h-screen bg-white dark:bg-gray-800 text-center px-6 py-16 dark:text-gray-200 transition-colors"
    >
      <div data-testid="created-by" className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <Heart data-testid="heart-icon" className="w-5 h-5 text-red-500" />
          <p className="text-gray-600 dark:text-gray-300">
            Created by yours truly
          </p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {currentYear}
        </p>

        <div className="flex items-center justify-center space-x-2">
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>RS School React Course</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
