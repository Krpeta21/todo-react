import './todocard.css'
export function TodoCard({todo}){
    return(
        <div className="todoCard">
            <h1>{todo}</h1>
            <button>eliminar</button>
        </div>
    )
}