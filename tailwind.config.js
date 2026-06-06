export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        surface: '0 25px 60px rgba(15, 23, 42, 0.18)',
      },
      colors: {
        deepnavy: '#0B1220',
        surface: '#111827',
        card: '#1F2937',
        border: '#374151',
        accent: '#3B82F6',
        cyan: '#06B6D4',
        emerald: '#10B981',
        body: '#0B1220',
      },
    },
  },
  plugins: [],
};
