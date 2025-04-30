import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../home/styles";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
 
export default function Produto() {

    const {id} = useLocalSearchParams()
    const [produtos, setProduto] = useState<ProdutoType>()

    function fetchProduct(){
        fetch("http://localhost:8080/produtos/=")
        .then((res) => res.json())
        .then((data => setProduto(data)))
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    type ProdutoType = {
        name: string;
        description: string;
        price: number;
        image: {uri: string};
    }
   
    const produto: ProdutoType = {
        name: "Chicken Galaxy",
        description: "Pão macio e brilhante, hambúrguer de frango crocante, queijo derretido, alface fresca e molho especial de estrelas!",
        price: 22.00,
        image: require("@/assets/images/Chickenburguer.png")
    
    };
 
    return (
        <View style={styles.container}>
            <View style={styles.productHeader}>
                <Image
                source={produto?.image}
                style={styles.productImage} />
            </View>
           
            <View style={styles.productDetails}>
                <Text style={styles.title}>Detalhes do produto</Text>
                <Text style={styles.productName}>{produto.name}</Text>
                <Text style={styles.DetailItemPrice}>R$ {produto.price.toFixed(2)}</Text>
                <Text style={styles.productDescription}>{produto.description}</Text>
               
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
 
                <TouchableOpacity style={styles.backToMenuButton}>
                     <Text style={styles.backToMenuText}>Voltar ao Menu</Text>
                </TouchableOpacity>
 
            </View>
        </View>
    )
}