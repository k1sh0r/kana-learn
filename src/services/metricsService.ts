const METRICS_STORAGE_KEY = 'page_metrics';

export interface PageMetrics {
  timeSpent: number;
  maxScroll: number;
  lastVisited: number;
  visits: number;
}

export const metricsService = {
  getMetrics(path: string): PageMetrics {
    const allMetrics = JSON.parse(localStorage.getItem(METRICS_STORAGE_KEY) || '{}');
    return allMetrics[path] || { timeSpent: 0, maxScroll: 0, visits: 0, lastVisited: 0 };
  },

  updateMetrics(path: string, updates: Partial<PageMetrics>) {
    const allMetrics = JSON.parse(localStorage.getItem(METRICS_STORAGE_KEY) || '{}');
    const currentMetrics = this.getMetrics(path);
    
    allMetrics[path] = {
      ...currentMetrics,
      ...updates,
      visits: currentMetrics.visits + (updates.visits || 0),
      timeSpent: currentMetrics.timeSpent + (updates.timeSpent || 0),
      maxScroll: Math.max(currentMetrics.maxScroll || 0, updates.maxScroll || 0),
      lastVisited: updates.lastVisited || Date.now()
    };

    localStorage.setItem(METRICS_STORAGE_KEY, JSON.stringify(allMetrics));
  },

  getAllMetrics(): Record<string, PageMetrics> {
    return JSON.parse(localStorage.getItem(METRICS_STORAGE_KEY) || '{}');
  }
};
