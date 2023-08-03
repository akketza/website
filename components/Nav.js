import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Nav = () => {
    return (
      <div className="main navMobile">
        <div className="menu">
          <Image
            src="/assets/images/AVERRR.png"
            width={500}
            height={217}
            alt="Foto Perfil"
            className="fotoo"
          />

          <div className="letras">
            <Link legacyBehavior href="https://www.linkedin.com/in/iggnacio/">
              <a target="_blank">LinkedIn</a>
            </Link>
            <Link legacyBehavior href="https://twitter.com/akketza">
              <a target="_blank">X / Twitter</a>
            </Link>
            <Link legacyBehavior href="https://github.com/akketza">
              <a target="_blank">GitHub</a>
            </Link>
            <Link download legacyBehavior href="/assets/resume.pdf">
              <a target="_blank">READ.CV</a>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Nav
