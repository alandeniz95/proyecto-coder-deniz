import { useState } from "react";
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () => {
  const [products, setProducts] = useState([
    {
      title: "Tocino de Cielo",
      image: "https://alandeniz95.github.io/AnthonBakery/img/tocinoDeCielo.jpg",
      price: 1000,
      stock: 10,
      description:
        'Viajamos al Mediterráneo para ésta receta: Tocino de Cielo. Las primeras noticias del tocino de cielo se remontan al año 1324, fecha en la cual fué creado por las monjas del Convento de Espíritu Santo de Jerez de la Frontera. Su origen está ligado a la elaboración del vino de la zona y al empleo masivo de claras de huevo usadas para la clarificación del mismo. Las yemas de huevo sobrantes eran entregadas a las religiosas, las cuales, con el fín de reutilizarlas, crearon el postre "tocino de cielo". Con el tiempo, devino en uno de los postres más emblemáticos de la repostería española. El nombre hace referencia al parecido visual con el tocino de cerdo, mientras que el sufijo viene dado por las manos religiosas que lo elaboraban. En textura recuerda al flan de toda la vida, pero al ser pura yema es un poco más sostenido.',
    },
    {
      title: "Balcarce",
      image: "https://alandeniz95.github.io/AnthonBakery/img/balcarce.jpg",
      price: 900,
      stock: 10,
      description:
        "En sus orígenes el postre fue conocido como “Imperial” y su historia se remonta a la confitería París de la ciudad de Balcarce, propiedad de Guillermo Talou. Luego, la marca fue vendida a una firma de Mar del Plata, dónde se lo rebautizó con el nombre de Balcarce, debido a su procedencia. Es tan popular éste postre que tiene su propia fiesta en el mes de agosto, cuando se realiza la fiesta del postre de Balcarce cuyo objetivo es homenajear a su creador, Guillermo Talou. Está coformado por bizcochuelo, dulce de leche, crema batida, merengue, castañas en almibar, y coco rallado",
    },
    {
      title: "El Chajá",
      image: "https://alandeniz95.github.io/AnthonBakery/img/chaja.jpg",
      price: 1100,
      stock: 10,
      description:
        'El popular postre uruguayo fué inventado en abril de 1927 por Orlando Castellano, propietario de la Confitería Las Familias en el departamento de Paysandú. El señor Castellano lo dió a probar a sus comensales, y uno de ellos, don Miguel Serra le respondio: "éste postre es suave como el Chajá", haciendo referencia al ave de gran plumaje y cuerpo pequeño. Desde entonces su popularidad hizo que pueda conseguirse en la mayoría de los paises de Sudamérica. Está conformado por bizcochuelo, dulce de leche, crema chantilly, duraznos en almibar y merengue.',
    },
    {
      title: "Tiramisú",
      image: "https://alandeniz95.github.io/AnthonBakery/img/tiramisu.jpg",
      price: 1000,
      stock: 10,
      description:
        "Se dice que es una de las cinco palabras que conoce un no-italohablante. Es un postre que desde los 70 figura en las cartas de los restaurantes de todo el mundo, tiene historias de su creación prácticamente desde la edad media, todas de dudosa procedencia. A ciencia cierta, en la Toscana sentían debilidad por el triffle inglés, que los diplomáticos que viajaban a Inglaterra, y regresaban a Italia, hacían replicando las costumbres y recetas de los restaurantes caros de Londres. Se considera zuppa (como la zuppa inglese que venden en las panaderias y pizzerías porteñas como sopa inglesa), al ser galletitas in zuppa, o embebidas, generalmente en almibar intercaladas con crema, en este caso crema de queso mascarpone.",
    },
  ]);

  return (
    <div>
      <div className="">
      <h1>Productos en stock</h1>
      <hr/>
        <ItemList />
      </div>
    </div>
  );
};


