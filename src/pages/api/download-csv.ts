import type { NextApiRequest, NextApiResponse } from 'next';

function escapeCsv(value: string): string {
  if (typeof value === 'string') {
    return `"${value.replace(/"/g, '""')}"`; // escape quotes by doubling them
  }
  return value;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // We'll expect selectedItems as JSON array in POST body
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const selectedItems = req.body.selectedItems;
  if (!Array.isArray(selectedItems)) {
    res.status(400).json({ error: 'Invalid data' });
    return;
  }

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

  const csvRows = [
    headers.join(','),
    ...selectedItems.map((item) =>
      [
        escapeCsv(item.name),
        escapeCsv(item.height),
        escapeCsv(item.mass),
        escapeCsv(item.hair_color),
        escapeCsv(item.skin_color),
        escapeCsv(item.eye_color),
        escapeCsv(item.birth_year),
        escapeCsv(item.gender),
        escapeCsv(item.homeworld),
        item.films.length,
        item.species.length,
        item.vehicles.length,
        item.starships.length,
        escapeCsv(item.url),
      ].join(',')
    ),
  ];

  const csvContent = csvRows.join('\n');

  res.setHeader('Content-Type', 'text/csv;charset=utf-8');
  res.setHeader(
    'Content-Disposition',
    `attachment; filename=selected_items.csv`
  );

  res.status(200).send(csvContent);
}
