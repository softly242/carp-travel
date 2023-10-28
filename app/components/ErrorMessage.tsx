'use client'

interface ErrorMessageProps {
  message: string;
  className: string;
}

export default function ErrorMessage({message, className}:  ErrorMessageProps) {
  return <div className={`flex justify-end ${className || ''}`}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1 mt-[3px]"
    >
      <path
        d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
        stroke="#FF5757"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-[#FF5757] font-extralight text-xs leading-6 tracking-[2.4px]">{message}</span>
  </div>
}

