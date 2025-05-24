import Link from "next/link"

const header = () => {
  return (
    <header className="absolute top-0 left-0 flex flex-row items-center justify-between w-full p-10 z-10">
      <Link href="/" className="w-[13.56rem]">
        <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2759 7.81818C11.2759 7.81818 3 14.6364 3 16C3 17.3636 11.2759 22.8182 11.2759 22.8182M27.8276 1L18.1724 31M36.1034 7.81818C36.1034 7.81818 43 14.1464 43 16C43 17.8536 36.1034 22.8182 36.1034 22.8182" stroke="#3C82F6" strokeWidth="5" />
        </svg>

      </Link>
      <div className="flex items-center gap-10">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-bold text-[#1C4ED8] text-3xl">
          Home
        </button>
        <button onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })} className="font-bold text-[#905FE0] text-3xl">
          Projects
        </button>
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="font-bold text-green-700 text-3xl">
          Text me
        </button>
      </div>
      <a target="_blank" href="t.me/ksunnw" className="px-6 py-4 bg-[#BBF7D0] text-green-700 text-3xl font-bold rounded-2xl shadow w-[13.56rem]">Let's Work</a>
    </header>
  )
}

export default header
