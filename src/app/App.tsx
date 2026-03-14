import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="h-screen bg-black text-white overflow-hidden relative flex flex-col">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-4 px-6 md:py-6 md:px-12">
        <h2 className="text-xl md:text-3xl">Vidi Apps</h2>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-8 md:py-16 relative z-10">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-3xl md:text-7xl lg:text-8xl mb-4 md:mb-8 leading-tight">
            Building Hit
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Mobile Apps
              </span>
            </span>
          </h1>

          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 md:mb-12 leading-relaxed px-4">
            We create applications that are loved by millions
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a 
              href="mailto:hello@vidiapps.com"
              className="relative inline-block text-base md:text-xl text-black bg-white px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto overflow-hidden group rounded-full hover:scale-105 transition-transform"
            >
              <span className="relative z-10">Get in touch</span>
            </a>
            <a 
              href="mailto:hello@vidiapps.com"
              className="relative inline-block text-base md:text-xl text-white px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto border border-white/30 backdrop-blur-sm overflow-hidden group rounded-full hover:border-white/60 hover:scale-105 transition-all"
            >
              <span className="relative z-10">Learn more</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 md:py-8 px-6 md:px-12 border-t border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-gray-400">
            © Vidi Studios LLP
          </p>
          <a 
            href="mailto:hello@vidiapps.com"
            className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
          >
            hello@vidiapps.com
          </a>
        </div>
      </footer>
    </div>
  );
}