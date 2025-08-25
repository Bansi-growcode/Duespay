const AppStoreButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-4">
    {/* Google Play */}
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-black rounded-xl px-5 py-2 gap-3 hover:scale-105 transition"
    >
      <svg width="60" height="60" viewBox="0 0 512 512" className="mr-2">
        <g>
          <polygon fill="#FFD400" points="184,256 24,464 352,312 "/>
          <polygon fill="#FF3333" points="24,48 184,256 352,200 "/>
          <polygon fill="#48FF48" points="24,464 352,200 352,312 "/>
          <polygon fill="#00C3FF" points="352,200 488,272 352,312 "/>
        </g>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-xl text-white">Get it on</span>
        <span className="text-2xl font-semibold text-white">Google Play</span>
      </div>
    </a>
    {/* App Store */}
    <a
      href="https://www.apple.com/app-store/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-black rounded-xl px-5 py-2 gap-3 hover:scale-105 transition"
    >
      <svg width="60" height="60" viewBox="0 0 24 24" fill="white" className="mr-2">
        <path d="M19.665 13.973c-.02-2.14 1.75-3.162 1.83-3.21-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.07 8.56.71 1.03 1.56 2.19 2.68 2.15 1.08-.04 1.49-.69 2.8-.69 1.31 0 1.68.69 2.8.67 1.16-.02 1.89-1.05 2.6-2.08.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.44zm-2.67-6.31c.6-.73 1.01-1.75.9-2.76-.87.03-1.92.58-2.54 1.31-.56.65-1.05 1.7-.86 2.7.95.07 1.93-.49 2.5-1.25z"/>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-xl text-white">Available on the</span>
        <span className="text-xl font-semibold text-white">App Store</span>
      </div>
    </a>
  </div>
);

export default AppStoreButtons;