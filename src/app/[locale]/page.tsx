'use client';

import { SearchSection } from '../../components/SearchSection';
import { ResultsSection } from '../../components/ResultsSection';
import { SelectedItemsFlyout } from '../../components/SelectedItemsFlyout';
import Link from 'next/link';
import { reportWebVitals } from '../../webVitals';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    reportWebVitals();
  }, []);

  return (
    <div data-testid="homepage" className="min-h-screen">
      <SearchSection />
      <ResultsSection />
      <div className="mt-8 text-center">
        <Link
          href="/about"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          About This Project
        </Link>
      </div>
      <SelectedItemsFlyout />
    </div>
  );
}
