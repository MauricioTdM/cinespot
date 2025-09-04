import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-tertiary">
            <Navbar /> {/* Você pode adicionar seu Navbar aqui */}
            {/* Este é o container principal do conteúdo da página */}
            <main>
                {/*
          É AQUI QUE A MÁGICA ACONTECE:
          - w-full: Garante que o container ocupe toda a largura disponível para centralização.
          - max-w-[1440px]: Limita a largura máxima do conteúdo a 1440px.
          - mx-auto: Centraliza o container horizontalmente (margin-left: auto; margin-right: auto;).
          - px-4 sm:px-6 lg:px-8: Adiciona um padding horizontal que se adapta a diferentes tamanhos de tela,
            evitando que o conteúdo toque as bordas em telas menores.
        */}
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {children} {/* Renderiza o conteúdo da página específica */}
                </div>
            </main>

            {/* <Footer /> */} {/* Você pode adicionar seu Footer aqui */}
        </div>
    )
}