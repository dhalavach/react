import { Download, X } from 'lucide-react';
import { useSelectedItemsStore } from '../stores/selectedItemsStore';

export const SelectedItemsFlyout = () => {
  const { selectedItems, clearAll, getSelectedCount } = useSelectedItemsStore();
  const selectedCount = getSelectedCount();

  if (selectedCount === 0) return null;

  const downloadCSV = () => {
    const headers = [
      'Name',
      'Height',
      'Mass',
      'Hair Color',
      'Skin Color',
      'Eye Color',
      'Birth Year',
      'Gender',
      'Homeworld URL',
      'Films Count',
      'Species Count',
      'Vehicles Count',
      'Starships Count',
      'Details URL',
    ];

    const csvContent = [
      headers.join(','),
      ...selectedItems.map((item) =>
        [
          `"${item.name}"`,
          `"${item.height}"`,
          `"${item.mass}"`,
          `"${item.hair_color}"`,
          `"${item.skin_color}"`,
          `"${item.eye_color}"`,
          `"${item.birth_year}"`,
          `"${item.gender}"`,
          `"${item.homeworld}"`,
          item.films.length,
          item.species.length,
          item.vehicles.length,
          item.starships.length,
          `"${item.url}"`,
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `${selectedCount}_items.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-900">
              {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={clearAll}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Unselect all</span>
            </button>

            <button
              onClick={downloadCSV}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
