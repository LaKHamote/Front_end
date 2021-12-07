import ItemCard from "../ItemCard"
import { Container } from "./styles.js"

const Itens = () => {

    return (
        <Container>
            { products.map((item, index) => (
                <ItemCard key={index} name={item.name} price={item.price} photo={item.photo_url}/>
            ))}

        </Container>
    )
}

export default Itens



const products = [
    {
      "id": 1,
      "name": "Tábua de Queijos",
      "type_name": "Entrada",
      "price": 69.0,
      "quantity": "Porção para 2 pessoas",
      "description": "Queijos Frescos: Minas Frescal, Ricota, Cream Cheese. Queijos Firmes: Grana Padano, parmesão, Queijos Azuis: Stilton, gorgonzola, roquefort",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--556c37b52bbb14022e63f472adabfef2741340c6/T%C3%A1bua-de-queijos.jpg"
    },
    {
      "id": 2,
      "name": "Tábua de Carne Frias",
      "type_name": "Entrada",
      "price": 39.0,
      "quantity": "Porção para 2 pessoas",
      "description": "Galatines variadas, chourição, mortadela, presunto, fiambre",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--60da6ac5d6183468565d9877eaf4b4d1ffb9a636/T%C3%A1bua-de-carnes-frias.jpg"
    },
    {
      "id": 3,
      "name": "Saladinha",
      "type_name": "Entrada",
      "price": 39.5,
      "quantity": "Porção para 1 pessoas",
      "description": "Salada levinha, com o toque crocante das amêndoas laminadas",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--23a99efda874d935896d39d23c380fa6e9d6eb59/Salada.jpg"
    },
    {
      "id": 4,
      "name": "Pizza de Calabresa",
      "type_name": "Pizza",
      "price": 67.0,
      "quantity": "8 fatias",
      "description": "Queijo, molho especial, calabresa",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b0ba7a1718b08a5f6fffcd053c8a5524b5c6b012/Calabresa.jpg"
    },
    {
      "id": 5,
      "name": "Pizza Portuguesa",
      "type_name": "Pizza",
      "price": 71.0,
      "quantity": "8 fatias",
      "description": "Queijo, molho especial, ovo fatiado , tomate, rúcula",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fa20747c9a3fa487041adb5352dbe429bc95361a/portuguesa.jpg"
    },
    {
      "id": 6,
      "name": "Pizza de Frango com Catupiry",
      "type_name": "Pizza",
      "price": 80.0,
      "quantity": "8 fatias",
      "description": "Queijo, molho especial, frango catupiry",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b4a5547780a31788d236e859ab0c11bfea4fd4d4/pizza-de-frango-com-catupiry-18845.jpg"
    },
    {
      "id": 7,
      "name": "Lasanha de Camarão",
      "type_name": "Lasanha",
      "price": 200.0,
      "quantity": "Porção de até 6 pessoas",
      "description": "Variação que é a cara do Brasil, com gostinho de mar e a cremosidade do requeijão. A Maizena engrossa o molho bechamel, que ganha uma cremosidade surpreendente",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f6891a266ba516ee36764b085e9cfb2650e6177e/LasanhadeCamar%C3%A3o%E2%80%8B.jpg"
    },
    {
      "id": 8,
      "name": "Lasanha de Frango",
      "type_name": "Lasanha",
      "price": 180.0,
      "quantity": "Porção de até 6 pessoas",
      "description": "Esse “quase ragú” de frango vai muito bem com a fina massa da lasanha e o queijo muçarela fatiado. A carne branca ganha sabor único com o tempero em pó Knorr zero sal frango. Nessa variação, o molho é ao sugo",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--97edb97f2612036a45885d2a1e29ba11e4c64a96/Lasanhadefrango.jpg"
    },
    {
      "id": 9,
      "name": "Lasanha Bolonhesa",
      "type_name": "Lasanha",
      "price": 220.0,
      "quantity": "Porção de até 6 pessoas",
      "description": "Um clássico que não pode faltar para quem não dispensa as boas tradições à mesa: a lasanha à bolonhesa! Essa versão pra lá de cremosa guarda um segredo especial: o caldo de carne Knorr, que contém um mix de especiarias para realçar o sabor",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--43d2b9acf9d64ce6dfe87b621de4f53b0f694b54/LasanhaBolonhesa.jpg"
    },
    {
      "id": 10,
      "name": "Macarrão ao vinho branco",
      "type_name": "Macarrão",
      "price": 65.0,
      "quantity": "Porção individual",
      "description": "Massa Pérola Negra leva muçarela de búfala, tomate, pancetta, azeitonas pretas e manjericão fresco",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9ba2b96e22314dd21172989bcd10f5817b21a10/VinhoBranco.jpg"
    },
    {
      "id": 11,
      "name": "Macarrão à parisiense",
      "type_name": "Macarrão",
      "price": 80.0,
      "quantity": "Porção individual",
      "description": "Tradicional molho francês que leva frango e ervilha com massa especial",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--726a051935a59d5a8f8c84910a7512d8bc181eba/macarrao-a-parisiense.jpg"
    },
    {
      "id": 12,
      "name": "Espaguete ao vôngole",
      "type_name": "Macarrão",
      "price": 120.0,
      "quantity": "Porção individual",
      "description": "Massa leve e saborosa feita com frutos do mar",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e7d6ced65322934bebfee5c361eaba0a2a3754a3/spaghetti.jpg"
    },
    {
      "id": 13,
      "name": "Àgua mineral sem gás",
      "type_name": "Bebida",
      "price": 7.5,
      "quantity": "500 ml",
      "description": "Garrafa chique de água da fonte",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--42027a9b1b7e21ac184a23b2c5098009a5161b0c/Agua.jpg"
    },
    {
      "id": 14,
      "name": "Fanta Laranja",
      "type_name": "Bebida",
      "price": 11.0,
      "quantity": "350ml",
      "description": "Latinha original",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a4b96ea2370f337b4ce04402915ff4cfa1a7a6f7/Fanta.jpeg"
    },
    {
      "id": 15,
      "name": "Vinho topíssimo",
      "type_name": "Bebida",
      "price": 99999.99,
      "quantity": "Garrafa de 1 litro",
      "description": "Vinho descoberto no derretimento de uma calota polar, provavelmente envelhecido a ao menos 5000 anos",
      "photo_url": "/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9053125f97082b926c372244d16a9bf693112658/Caro.jpg"
    }
  ]
