import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#101626] flex flex-col relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[#101626]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-[#4DF1C5] to-[#36BB9F] rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-[#4DC2C1] to-[#36BB9F] rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-[#4DF1C5] to-[#4DC2C1] rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <main className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-12 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="GEO.GO Logo"
              width={300}
              height={300}
              className="w-64 sm:w-80 animate-fade-in"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-4 animate-fade-in">
            Go Beyond, Earn Beyond
          </h1>
          <p className="text-xl sm:text-2xl text-[#4DF1C5] font-light max-w-2xl mx-auto mb-8 animate-fade-in">
            Explore, earn, and unlock new possibilities with our innovative Web3 mobile app.
          </p>
          {/* <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 bg-white bg-opacity-10 text-white placeholder-gray-400 rounded-full w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#4DF1C5]"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#4DF1C5] text-[#101626] rounded-full font-semibold text-lg hover:bg-[#36BB9F] transition-colors duration-300 w-full sm:w-auto"
            >
              Get Updates
            </button>
          </form> */}
        </div>
      </main>
    </div>
  );
}
