import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import styles from './index.module.css'

class HomePage extends React.Component {
  render () {
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <div>
        <Helmet title={siteTitle} />

        <p>
          Wikicours est un répertoire de cours en ligne de qualité, 📚✨ constamment amélioré par une communauté de professeurs et d'utilisateurs. 📝 Le tout gratuit et libre de droit. 💸🆓
        </p>

        <section className={styles.schoolAndGrade}>
          <div className={styles.CollegeLycee}>
            <h4>Collège</h4>

            <div>
              <Link to='6e'>6<sup>e</sup></Link>
              <Link to='5e'>5<sup>e</sup></Link>
              <Link to='4e'>4<sup>e</sup></Link>
              <Link to='3e'>3<sup>e</sup></Link>
            </div>
          </div>

          <div className={styles.CollegeLycee}>
            <h4>Lycée</h4>

            <div>
              <Link to='2nde'>2<sup>nde</sup></Link>
              <Link to='1ère'>1<sup>ère</sup></Link>
              <Link to='Terminale'>Terminale</Link>
            </div>
          </div>
        </section>

        <section>
          <h2>
            Contribuer
          </h2>

          <p>
            Tout le monde peut améliorer Wikicours.
          </p>

          <p>
            Users can already remix any public app on Glitch, and we want to give project owners control over their app's look,
            so we do not force buttons into any apps. What we do want, though, is for our community to <em>encourage</em>
            others to remix and learn more about their apps, so we built a widget that you can include in your projects to generate
            our neat little button wherever you like.
          </p>
        </section>

        <section>
          <h2>
            Communauté et contact
          </h2>

          <p>
            Nous accordons une place très importante à la communauté, et tout le monde est invité à prendre part au developpement du projet via notre <a href='https://gitter.im/Wikicours/Lobby'>chat sur Gitter</a>.
            Partagez vos idées, question ou remarques avec nous, nous serons ravis d'en discuter !

            Vous pouvez aussi nous contacer via <a href='mailto:admin@wikicours.org'>e-mail</a> et suivre nos actualités sur Twitter à <a href='http://twitter.com/Wikicours'>@Wikicours</a>.

            Wikicours est entièrement Open Source, retrouvez-nous sur <a href='https://github.com/thomaskuntzz/wikicours'>GitHub</a> !
          </p>
        </section>
      </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
