export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t mt-8">
      <div className="container mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <div>
          © {new Date().getFullYear()} TaskManager. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
        </div>
      </div>
    </footer>
  );
}