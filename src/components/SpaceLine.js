
const SpaceLine = () => {
    return (
    <div className="bg-black p-6">
    <div className="relative">
      <div className="absolute -top-[55px] -left-5 -right-5 h-28 overflow-hidden">
        <svg className="w-full h-full shadow-2xl shadow-white " viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="redLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(244, 63, 94, 0)" />
              <stop offset="25%" stopColor="rgba(244, 63, 94, 1)" />
              <stop offset="50%" stopColor="red" />
              <stop offset="75%" stopColor="rgba(244, 63, 94, 1)" />
              <stop offset="100%" stopColor="rgba(244, 63, 94, 0)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,0 C300,100 900,100 1200,0"
            fill="url(#bottomCurveGradient)"
            filter="url(#glow)"
          />
          <path
            d="M0,100 C300,0 900,0 1200,100"
            fill="none"
            stroke="url(#redLineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
        </svg>
      </div>
    </div>
  </div>
    )
}

export default SpaceLine