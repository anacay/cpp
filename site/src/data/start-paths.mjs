// The doors on /start/: one per kind of reader. `page: true` doors get their
// own page at /start/<id>/; the rest are sections on /start/ (#<id>).
// Times are reading times at 220 words a minute.
export const doors = [
  { id: 'new', name: 'New to the role', time: '35 minutes', page: true },
  { id: 'practicing', name: 'Practicing planners', time: '55 minutes' },
  { id: 'senior', name: 'Senior planners', time: '1 hour 50 minutes' },
  { id: 'head', name: 'People who lead planning teams', time: '42 minutes' },
  { id: 'program-managers', name: 'Program managers' },
  { id: 'sre', name: 'Site reliability engineers', page: true },
  { id: 'finance', name: 'Finance partners', page: true },
  { id: 'supply', name: 'Supply partners', page: true },
];

export const doorPages = () => doors.filter((d) => d.page);
