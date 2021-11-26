import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function Seo({ description, lang, meta, title, author }) {
  const metaDescription = description || 'Новые рубежи | Солид–Лизинг и наши инвесторы'
  const defaultTitle = title || 'Солид Лизинг для инвесторов, лизинг авто москва, инвесторам, выгодная аренда автомобилей для ИП и машины в лизинг'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: 'ru',
  author: 'd19',
  meta: [],
  description: '',
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
