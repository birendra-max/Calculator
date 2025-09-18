import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function About() {
    return (
        <LinearGradient
            colors={['#05070aff', '#090c11ff', '#111827']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* App Logo */}
                <View style={styles.logoContainer}>
                    <View style={styles.logoCircle}>
                        <Text style={styles.logoText}>
                            <Image source={require("../../assets/calculator.png")} style={{width:"100%",height:"100%"}} />
                        </Text>
                    </View>
                </View>

                {/* Title */}
                <Text style={styles.title}>Calculator App</Text>
                <Text style={styles.subtitle}>Developed by Birendra Kumar Pradhan</Text>

                {/* Card Section */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>About this App</Text>
                    <Text style={styles.cardText}>
                        This Calculator is built with React Native to provide a clean,
                        fast, and user-friendly experience. It is designed for quick
                        calculations with an elegant and simple interface.
                    </Text>
                </View>

                {/* Developer Info */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>About the Developer</Text>
                    <Text style={styles.cardText}>
                        Hello, I’m <Text style={styles.highlight}>Birendra Kumar Pradhan</Text>, a passionate software developer from Bangalore.
                        I specialize in building modern, high-performance apps, responsive websites, and full-stack solutions.
                        With a strong foundation in React Native, PHP, CodeIgniter, and JavaScript, I focus on writing clean, efficient,
                        and maintainable code.

                        I enjoy creating intuitive user experiences, solving challenging problems, and constantly learning new technologies.
                        When I’m not coding, I love exploring new tech trends, contributing to open-source projects, and sharing knowledge with the developer community.
                    </Text>
                </View>


                {/* Website Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>🌐 birendrapradhan.in</Text>
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
    scrollContent: {
        paddingTop: 50,
        paddingBottom:100,
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: 30,
        marginBottom: 20,
    },
    logoCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#0b0e12ff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#3b82f6',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },
    logoText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#f8fafc',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#94a3b8',
        marginBottom: 20,
    },
    card: {
        width: '100%',
        backgroundColor: '#1e293b',
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#38bdf8',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 15,
        lineHeight: 22,
        color: '#e2e8f0',
        textAlign: "justify"
    },
    highlight: {
        color: '#facc15',
        fontWeight: '600',
    },
    footer: {
        marginTop: 20,
        marginBottom: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#38bdf8',
        textDecorationLine: 'underline',
    },
});