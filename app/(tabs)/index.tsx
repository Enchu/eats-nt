import {Image, StyleSheet, Platform, View, Text, Button} from 'react-native';
import {Canvas} from "@react-three/fiber/native";
import {StatusBar} from "expo-status-bar";
import {BottomUI} from "@/components/BottomUI";
import {Suspense} from "react";
import {Sandwich} from "@/components/Sandwich";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Canvas camera={{position: [-2, 2.5, 5], fov: 30}}>
                <color attach="background" args={["#512DA8"]}/>
                <Suspense>
                    <Sandwich/>
                </Suspense>
            </Canvas>
            <BottomUI/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
