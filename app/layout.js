import '@styles/globals.css'
import Nav from '@components/Nav'
import Projects from '@components/Projects'


export const metadata = {
  title: 'Akketza',
  description: 'Portfolio akketza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>

          <Nav />
          <div className='centerMain'>
            {children}
            <Projects />
          </div>
        </main>
      </body>
    </html>
  )
}
