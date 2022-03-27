import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* fuentes web (google font) */}
          {/* hojas de estilos de liberías de internet */}
          {/* script/js podemos agregar scripts que traigamos desde internet */}
        </Head>
        {/* Podemos tener mayores controles sobre el body como añadir clases de css por ejemplo */}
        <body>
          <Main />
          <NextScript />
          {/* Podemos agregar agregar elementos adocionales que apliquen para todo el documento y todas las páginas, pero esto no es muy común */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
