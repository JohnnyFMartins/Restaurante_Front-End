import { Image, ImageSourcePropType, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { styles } from "./styles"
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'

export type ProductType = {
    id: number,
    name: String,
    price: number,
    description: String,
    ingredients: String,
    imgUrl: ImageSourcePropType
}

export default function Index() {
    
    const [produtos, setProdutos] = useState<ProductType[]>()

    function fetchProducts(){
        fetch("http://localhost:8080/produtos/")
        .then((res) => res.json())
        .then((data) => setProdutos(data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (

        <ScrollView style={styles.menuList}>

            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/Banner.png")} />
            </View>
            <Text style={styles.restaurantName}>Rocket Grub</Text>
            <Text style={styles.subtitle}>Um Lanche de Outro Mundo!</Text>

            <View>

                <View style={styles.tabs}>
                    {["Combos", "Lanches", "Bebidas", "Sobremesas"].map((tab) => (
                        <TouchableOpacity key={tab}>
                            <Text style={styles.tabText} >{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {
                    produtos?.map((item) => (
                            <Link href={`/produto/${item.id}`} asChild key={item.id}>
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text>{item.description}</Text>
                                <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                            </View>
                            <Image source={item.imgUrl}  style={styles.itemImage} />

                        </TouchableOpacity>
                    </Link>
                    ))
                }

            </View>

        </ScrollView>

    )
}

