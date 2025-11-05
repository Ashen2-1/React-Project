import './StarterCSS.css'
import useCollapse from 'react-collapsed';

function StarterPack(props) {
    const { getCollapseProps, getToggleProps, isOpen } = useCollapse();

    return (
        <div className='Read_More_Description'>
            <h1 id='Read_More_Header1'>ART HISTORY</h1>
            <h2 id='Read_More_Header2'>Methodologies</h2>
            <p>{props.Read_More_Description_Show}</p>

            {!isOpen && (
                <button {...getToggleProps()}>Read More</button>
            )}

            <section {...getCollapseProps()}>
                <p>{props.Read_More_Description_Click2Show}</p>
            </section>

            {isOpen && (
                <button {...getToggleProps()}>Read Less</button>
            )}
        </div>
    );
}

export default StarterPack;