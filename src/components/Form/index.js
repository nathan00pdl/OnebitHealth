import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import ResultIMC from "./ResultIMC/"
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura");
    const [IMC, setIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [listIMC, setListIMC] = useState([]);

    function IMCCalculator() {
        let heightFormat = height.replace(",", ".");
        let totalIMC = (weight / (heightFormat * heightFormat)).toFixed(2);

        setListIMC((list) => [...list, { id: new Date().getTime(), IMC: totalIMC }])
        setIMC(totalIMC)
    }

    function verificationIMC() {
        if (IMC == null) {
            Vibration.vibrate();  // React Native's Vibration API
            setErrorMessage("Campo Obrigatório* ");
        }
    }

    function validationIMC() {
        if (weight != null && height != null) {
            IMCCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        } else {
            verificationIMC()
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("Preencha o peso e a altura")
        }
    }

    return (
        <View style={styles.formContext}>
            {IMC == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>

                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    />

                    <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 75.365"
                        keyboardType="numeric"
                    />

                    <TouchableOpacity
                        style={styles.ButtonCalculator}
                        onPress={() => {
                            validationIMC()
                        }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>

                </Pressable>
                :
                <View style={styles.exhibitionResultIMC}>
                    <ResultIMC messageResultIMC={messageIMC} ResultIMC={IMC} />
                    <TouchableOpacity
                        style={styles.ButtonCalculator}
                        onPress={() => {
                            validationIMC()
                        }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listIMCs}
                data={[...listIMC].reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.ResultIMCItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = {item.IMC}</Text>
                        </Text>
                    )
                }}
                keyExtractor={(item) => String(item.id)}
            >

            </FlatList>
        </View >
    );
}