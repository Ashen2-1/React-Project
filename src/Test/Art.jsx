
function Art(){

    const art1 = "Oil Painting";
    const art2 = "Watercolor";
    const art3 = "Acrylic Painting";
    const art4 = "Fresco";
    const art5 = "Tempera";
    const art6 = "Encaustic (wax painting)";
    const art7 = "Spray Painting";

    return(
        <ul>
            <li>{art1}</li>
            <li>{art2.toUpperCase()}</li>
            <li>{art3}</li>
            <li>{art4}</li>
            <li>{art5}</li>
            <li>{art6}</li>
            <li>{art7}</li>
        </ul>
    );

}

export default Art