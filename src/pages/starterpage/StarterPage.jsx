import StarterPack from "./StarterPack"


function StarterPage() {

    return(
        <div>
            <StarterPack 
                Read_More_Description_Show="This is the short description."
                Read_More_Description_Click2Show="Here is the expanded content that appears when you click Read More."
            />
        </div>
    );
  
}
export default StarterPage