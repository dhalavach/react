import { onLCP, onINP, onCLS, Metric, onFCP } from 'web-vitals';

function sendToAnalytics(metric: Metric) {
  console.log(metric);
}

export function reportWebVitals() {
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onINP(sendToAnalytics); //interaction to next paint
  onCLS(sendToAnalytics); //cumulative layout shift
}
