import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Projects = () => {
    return (
      <div className="desktop-only">
        <h3>p r o j e c t s</h3>
        <div className="imgs">
          <Link legacyBehavior href="https://song-of-the-day-ai.vercel.app/">
            <Image
              src="/assets/images/portada1.png"
              width={361}
              height={534}
              alt="Portada Robot"
              className="shadow"
            />
          </Link>
          <Link
            legacyBehavior
            href="https://akketza.github.io/Rick-and-Morty-random-episode-generator/"
          >
            <Image
              src="/assets/images/rick3.png"
              width={361}
              height={534}
              alt="Rick"
              className="shadow"
            />
          </Link>
          <Link legacyBehavior href="#">
            <Image
              src="/assets/images/SOON.png"
              width={361}
              height={534}
              alt="SOON"
              className="shadow"
            />
          </Link>
        </div>
        <p className="desktop-only">2001 - ∞</p>
      </div>
    );
}

export default Projects
