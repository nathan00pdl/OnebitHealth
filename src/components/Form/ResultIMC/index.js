import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "../style";

export default function ResultIMC(props) {

    //Chamando API de compartilhamento
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é " + props.ResultIMC
        })
    }

    return (
        <View style={styles.contextIMC}>
            <View style={styles.boxShareButton}>
                <Text style={styles.information}>{props.messageResultIMC}</Text>
                <Text style={styles.ResultIMC}>{props.ResultIMC}</Text>
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}