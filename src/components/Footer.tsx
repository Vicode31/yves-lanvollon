import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 mt-8 text-white bg-zinc-900">
      <div className="flex items-center justify-center gap-8 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 max-lg:flex-col">
        <p>
          &copy; {new Date().getFullYear()} Yves DENIAU - Hypnothérapeute. Tous
          droits réservés.
        </p>
        <div className="flex justify-center gap-4">
          {/* Bouton FB */}
          <section className="flex justify-center items-center">
            <a href="https://www.facebook.com/profile.php?id=61575927465588&locale=fr_FR">
              <button className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 448 512"
                  strokeWidth="0"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-5"
                >
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                </svg>
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Facebook
                </span>
              </button>
            </a>
          </section>
          {/* Bouton Instagram */}
          <a href="https://www.instagram.com/yves_deniau_hypnotherapeute?igsh=MWlueHcxbTQ3dWNkdg%3D%3D&utm_source=qr">
            <button className="group flex justify-center py-1.5 px-2 rounded-md drop-shadow-xl bg-insta from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
              <svg
                fill="white"
                viewBox="0 0 448 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
              <span className="absolute duration-700 opacity-0 group-hover:opacity-100 group-hover:text-black group-hover:text-sm group-hover:-translate-y-8">
                Instagram
              </span>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/yvesdeniauhypnotherapeute/">
            <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] cursur-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1.1em"
                viewBox="0 0 512 512"
                strokeWidth="0"
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
              </svg>
              <span className="absolute duration-700 opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10">
                Linkedin
              </span>
            </button>
          </a>
          <a href="https://www.google.com/search?q=Yves+Deniau+Praticien+en+hypnose&sca_esv=3bea377ccf617f2a&hl=fr-FR&biw=1440&bih=812&ei=KDX5Z4reHpSbkdUP2aTnyA8&ved=0ahUKEwiKkoXbpdCMAxWUTaQEHVnSGfkQ4dUDCBA&uact=5&oq=Yves+Deniau+Praticien+en+hypnose&gs_lp=Egxnd3Mtd2l6LXNlcnAiIFl2ZXMgRGVuaWF1IFByYXRpY2llbiBlbiBoeXBub3NlMggQABiABBiiBDIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBDIFEAAY7wVIvAVQkARYkARwAXgAkAEAmAFFoAFFqgEBMbgBA8gBAPgBAZgCAqACUsICCxAAGLADGKIEGIkFwgIIEAAYsAMY7wWYAwCIBgGQBgSSBwEyoAfaArIHATG4B0s&sclient=gws-wiz-serp">
            <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#f15649] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] cursor-pointer">
              <Image
                src="/Google-Logo.png"
                height={20}
                width={20}
                alt="Google Logo"
                className="w-5"
              />
              <span className="absolute duration-700 opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10">
                Google
              </span>
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
