import Card from './components/Card'
import Header from './components/Header'
import NavBar from './components/NavBar'
import styles from './page.module.css'

export default function Home() {
  return (
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Card />
          </div>
        </main> 

  )
}
