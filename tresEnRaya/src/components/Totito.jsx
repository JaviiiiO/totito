import './Index.css'

const TURNS = {
    X: 'X',
    O: 'O',
}

const board = Array(9).fill(null)


export function Totito() {
    return(
        <main className="board">
            <h1>Tic Tac Toe</h1>
            <section className="game">
                {
                    board.map((_, index) => {
                        return (
                            <div className='cell' key={index}>
                                <span className='cell-content'>
                                    {index}
                                </span>
                            </div>
                        )
                    })
                }

            </section>
        </main>
    )

}