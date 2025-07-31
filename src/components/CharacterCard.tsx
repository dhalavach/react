import { User, Calendar, Ruler, Weight } from 'lucide-react';
import type { Character } from '../types/Character';
import { useSelectedItemsStore } from '../stores/selectedItemsStore';

interface Props {
  character: Character;
  onClick?: (character: Character) => void;
}

const formatDescription = (character: Character): string => {
  const details = [];

  if (character.gender !== 'unknown') {
    details.push(character.gender);
  }

  if (character.birth_year !== 'unknown') {
    details.push(`Born ${character.birth_year}`);
  }

  if (character.height !== 'unknown') {
    details.push(`${character.height}cm tall`);
  }

  if (character.mass !== 'unknown') {
    details.push(`${character.mass}kg`);
  }

  return details.join(' • ');
};

export const CharacterCard = ({ character, onClick }: Props) => {
  const description = formatDescription(character);
  const { isSelected, addItem, removeItem } = useSelectedItemsStore();
  const selected = isSelected(character.url);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.target.checked) {
      addItem(character);
    } else {
      removeItem(character.url);
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(character);
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 border cursor-pointer hover:border-blue-300 hover:scale-[1.02] ${
        selected
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
          : 'border-gray-200 dark:border-gray-700'
      } dark:bg-gray-800 `}
      onClick={handleClick}
    >
      <div className="flex items-start justify-between mb-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 "
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User data-testid="avatar" className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
            {character.name}
          </h3>

          {description && (
            <p className="text-gray-600 text-sm mb-3 dark:text-gray-300 ">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 ">
            {character.height !== 'unknown' && (
              <div className="flex items-center space-x-1">
                <Ruler className="w-3 h-3" />
                <span>{character.height}cm</span>
              </div>
            )}

            {character.mass !== 'unknown' && (
              <div className="flex items-center space-x-1">
                <Weight className="w-3 h-3" />
                <span>{character.mass}kg</span>
              </div>
            )}

            {character.birth_year !== 'unknown' && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{character.birth_year}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
