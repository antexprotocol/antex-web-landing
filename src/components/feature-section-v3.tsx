import tradePage from "../assets/antex-trade.png"
export default function FeatureSectionV2() {

  return <section id="feature-section-v3" className="min-h-svh relative z-1 flex items-center justify-center">

    <svg className="w-full" width={1440} height={320} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <mask
        id="mask0_4831_31868"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={1440}
        height={320}
      >
        <path
          d="M432 320L431.69 319.996C425.309 319.834 420.166 314.691 420.004 308.309L420 308L420 168C401.081 168 366.755 171.211 328.994 179.908C291.228 188.607 250.11 202.774 217.554 224.64C165.028 259.919 98.5205 270.241 71.7939 271L2.81277e-06 271L2.92757e-06 269L71.7373 269L73.0078 268.958C100.295 267.921 165.144 257.432 216.438 222.98C249.278 200.924 290.66 186.686 328.545 177.96C366.435 169.233 400.912 166 420 166L420 160.875L9.13432e-06 160.875L9.24913e-06 158.875L420 158.875L420 153C400.912 153 366.435 149.767 328.545 141.04C290.66 132.314 249.278 118.076 216.438 96.0194C165.144 61.5678 100.295 51.0786 73.0078 50.0418L71.7373 49.9998L1.54989e-05 49.9998L1.56137e-05 47.9998L71.794 47.9998C98.5205 48.7586 165.028 59.0809 217.554 94.3592C250.11 116.225 291.228 130.393 328.994 139.092C366.755 147.789 401.081 151 420 151L420 11.9999C420 5.476 425.206 0.167956 431.69 0.003772L432 -0.000134206L1008 -5.75169e-05C1014.63 -5.66345e-05 1020 5.37253 1020 11.9999L1020 151C1038.92 151 1073.24 147.789 1111.01 139.092C1148.77 130.393 1189.89 116.226 1222.45 94.3593C1274.97 59.081 1341.48 48.7588 1368.21 48L1440 48L1440 50L1368.26 50L1366.99 50.042C1339.7 51.0788 1274.86 61.5679 1223.56 96.0195C1190.72 118.076 1149.34 132.314 1111.46 141.04C1073.57 149.767 1039.09 153 1020 153L1020 158.125L1440 158.125L1440 160.125L1020 160.125L1020 166C1039.09 166 1073.57 169.233 1111.46 177.96C1149.34 186.686 1190.72 200.924 1223.56 222.98C1274.86 257.432 1339.7 267.921 1366.99 268.958L1368.26 269L1440 269L1440 271L1368.21 271C1341.48 270.241 1274.97 259.919 1222.45 224.641C1189.89 202.774 1148.77 188.607 1111.01 179.908C1073.24 171.211 1038.92 168 1020 168L1020 308L1020 308.31C1019.83 314.794 1014.52 320 1008 320L432 320ZM1008 318C1013.52 318 1018 313.523 1018 308L1018 11.9999C1018 6.47712 1013.52 1.99994 1008 1.99994L432 1.99987C426.477 1.99987 422 6.47707 422 11.9999L422 308C422 313.523 426.477 318 432 318L1008 318Z"
          fill="#B7B7FF"
        />
      </mask>
      <g mask="url(#mask0_4831_31868)">
        <rect x={720} y={-31} width={720} height={361} fill="#B7B7FF" />
        <rect
          x={720}
          y={330}
          width={720}
          height={361}
          transform="rotate(-180 720 330)"
          fill="#B7B7FF"
        />
      </g>
    </svg>
    <img src={tradePage.src} alt="trade page" className="absolute w-[38%] z-2 top-1/2 left-1/2 -translate-1/2" />
    <div className="absolute z-3 w-[38%] aspect-[1200/619] bg-black/60 top-1/2 left-1/2 -translate-1/2 flex items-center justify-center">
      <a href="https://testnet.antex.ai" className="cursor-pointer transition-all bg-white text-black hover:bg-[#8678FD] hover:text-black hover:border-[#8678FD] hover:shadow-[0_0_100px_100px_rgba(134,120,253,0.03)] px-7 py-4 rounded-xl flex items-center justify-center border border-white gap-1.5 text-base">
          <span>Enter AnteX Testnet</span>
          <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path
              d="M12.2857 13L12.2857 1.21429L10.6573 1.21429L0.499992 1.21429"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M12.2857 1.21434L1.07455 12.4255"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
      </a>
    </div>


  </section>
}