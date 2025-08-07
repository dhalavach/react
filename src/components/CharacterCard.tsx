import { User, Calendar, Ruler, Weight } from 'lucide-react';
import type { Character } from '../types/Character';
import { useSelectedItemsStore } from '../stores/selectedItemsStore';
import { useMemo } from 'react';
//import { useCharacterDetailsStore } from '../stores/characterDetailsStore';

interface Props {
  character: Character;
  onClick?: (character: Character) => void;
}

const isKnown = (value: string) => value.toLowerCase() !== 'unknown';

const useCharacterDescription = (character: Character) =>
  useMemo(() => {
    const parts: string[] = [];

    if (isKnown(character.gender)) parts.push(character.gender);
    if (isKnown(character.birth_year))
      parts.push(`Born ${character.birth_year}`);
    if (isKnown(character.height)) parts.push(`${character.height}cm tall`);
    if (isKnown(character.mass)) parts.push(`${character.mass}kg`);

    return parts.join(' • ');
  }, [character]);

export const CharacterCard = ({ character, onClick }: Props) => {
  //const { setCharacter } = useCharacterDetailsStore();

  const description = useCharacterDescription(character);
  const { isSelected, addItem, removeItem } = useSelectedItemsStore();
  const selected = isSelected(character.url);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.target.checked) addItem(character);
    else removeItem(character.url);
  };

  const handleClick = () => {
    onClick?.(character);
    // setCharacter(character); //test addition - maybe remove later
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
          onClick={(e) => e.stopPropagation()}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 "
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
            {isKnown(character.height) && (
              <div className="flex items-center space-x-1">
                <Ruler className="w-3 h-3" />
                <span>{character.height}cm</span>
              </div>
            )}

            {isKnown(character.mass) && (
              <div className="flex items-center space-x-1">
                <Weight className="w-3 h-3" />
                <span>{character.mass}kg</span>
              </div>
            )}

            {isKnown(character.birth_year) && (
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
