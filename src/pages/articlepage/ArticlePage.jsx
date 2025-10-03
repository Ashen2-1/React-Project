import ArticleBox from "./ArticleBox";
import img1 from '../../assets/3.png';
// import AnotherImage from '../assets/another-image.jpg';
import './ArticleBox.css';
function ArticlePage(props) {
  const articleSections = [  
    {
      type: 'text',
      content:<br/>
    },    
    {
      type: 'text',
      content:<br/>
    },  
    {
      type: 'text',
      content:<br/>
    },  
    {
      type: 'text',
      content: "When people speak of the masters of Impressionism, the world often praises Monet’s water lilies, Renoir’s festive dances, and Degas’ ballerinas, yet frequently overlooks the artist who captured subtlety with a delicate brush — Berthe Morisot. Morisot (1841–1895) was a central figure in the 19th-century French Impressionist movement and the first woman to exhibit in the Impressionist Salon. Renowned for her refined brushwork and her remarkable sensitivity to light and atmosphere, Morisot often depicted the everyday lives of women."
    },
    {
      type: 'text',
      title: "Born into Elegance, Painting Against the Current",
      content: "Morisot came from a wealthy upper-middle-class family and grew up in an environment steeped in art and literature. She received formal artistic training as a young girl. However, her artistic path was constrained by societal norms. She could not roam the streets for plein air painting like all the male artist, nor could she freely attend the academies. She was compelled to turn her gaze toward the world she could access — the home, gardens, women, children, and the quiet moments of daily life."
    },
    {
      type: 'image',
      src: img1,
      alt: "Berthe Morisot",
      caption: "Berthe Morisot, Self-Portrait, 1885"
    },
    {
      type: 'text',
      title: "Artistic Style and Themes",
      content: "Morisot's work is characterized by light, quick brushstrokes that capture the essence of a moment. She often painted domestic scenes, gardens, and portraits of women and children, bringing a uniquely feminine perspective to Impressionism."
    }
  ];

  return(
    <ArticleBox
      title="The Forgotten Genius of Light and Shadow - Berthe Morisot"
      sections={articleSections}
      tags={["Impressionism", "Women Artists", "19th Century", "French Art"]}
    />
  );
}

export default ArticlePage;