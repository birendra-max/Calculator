import * as Speech from 'expo-speech';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");


    // 🔊 Speak result whenever it changes
    useEffect(() => {
        if (result) {
            Speech.speak(result.toString(), {
                language: "en-US",
                rate: 0.9,
                pitch: 1.0,
            });
        }
    }, [result]);

    const buttons = [
        ["C", "⌫", "%", "/"],
        ["7", "8", "9", "×"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["00", "0", ".", "="]
    ];

    const handlePress = (value) => {
        if (value === "C") {
            setInput("");
            setResult("");
        } else if (value === "⌫") {
            setInput(input.slice(0, -1));
        } else if (value === "=") {
            try {
                const evalResult = eval(input).toString();
                setResult(evalResult);
            } catch {
                setResult("Error");
            }
        } else {
            const newInput = input + value;
            setInput(newInput);
        }
    };

    return (
        <LinearGradient
            colors={['#05070aff', '#090c11ff', '#111827']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                {/* Display */}
                <View style={styles.displayWrapper}>
                    <Text style={styles.inputText}>{input || "0"}</Text>
                    <Text style={styles.resultText}>{result}</Text>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    {buttons.map((row, i) => (
                        <View key={i} style={styles.buttonRow}>
                            {row.map((btn) => (
                                <TouchableOpacity
                                    key={btn}
                                    style={[
                                        styles.button,
                                        btn === "=" ? styles.equalsButton : null,
                                        ["+", "-", "×", "/", "%"].includes(btn) ? styles.operatorButton : null,
                                        btn === "C" ? styles.clearButton : null,
                                    ]}
                                    onPress={() => handlePress(btn === "×" ? "*" : btn)}
                                >
                                    <Text
                                        style={[
                                            styles.buttonText,
                                            btn === "=" ? styles.equalsText : null,
                                            ["+", "-", "×", "/", "%"].includes(btn) ? styles.operatorText : null,
                                            btn === "C" ? styles.clearText : null,
                                        ]}
                                    >
                                        {btn}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        gap: 30,
    },

    // Display
    displayWrapper: {
        width: "100%",
        padding: 20,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.05)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.1)",
    },
    inputText: {
        fontSize: 36,
        color: "#10b981",
        textAlign: "right",
        fontWeight: "bold",
    },
    resultText: {
        fontSize: 28,
        color: "#f69309ff",
        textAlign: "right",
        marginTop: 8,
    },

    // Buttons
    buttonContainer: {
        width: "100%",
        borderRadius: 25,
        backgroundColor: "rgba(0, 0, 0, 0.03)",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18,
    },
    button: {
        flex: 1,
        height: 70,
        marginHorizontal: 6,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.06)",
    },
    buttonText: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "600",
    },

    operatorButton: {
        backgroundColor: "rgba(16, 185, 129, 0.15)",
    },
    operatorText: {
        color: "#10b981",
        fontWeight: "bold",
        fontSize: 26,
    },
    clearButton: {
        backgroundColor: "rgba(138, 106, 1, 0.15)",
    },
    clearText: {
        color: "#ed9d09ff",
        fontWeight: "bold",
        fontSize: 22,
    },
    equalsButton: {
        backgroundColor: "#10b981",
    },
    equalsText: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
});