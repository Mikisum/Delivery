import { Header } from "./components/Header/Header"
import { Layout } from "./components/Layout/Layout"

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <nav>
          <Layout className="navigation__container" />
        </nav>
        <section></section>
      </main>
    </>
  )
}
