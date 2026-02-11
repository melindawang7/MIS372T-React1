export default function Section ({title, children}) {
    return (
        <div>
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        </div>
        
    )

}